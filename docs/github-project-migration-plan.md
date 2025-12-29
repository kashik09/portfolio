# GitHub Project Mass Migration Plan

**Goal:** Import portfolio projects from GitHub repositories into the portfolio database
**Target:** 20-30 GitHub repositories → Database projects with metadata
**Timeline:** 2-3 days (with automation)

---

## Overview

This plan outlines the process to mass-import projects from your GitHub account into your portfolio database while maintaining data quality and enriching each project with proper metadata.

---

## Phase 1: Data Collection & Analysis (2-4 hours)

### 1.1 Fetch All GitHub Repositories

```typescript
// scripts/github/fetch-repos.ts
import { Octokit } from '@octokit/rest'

const octokit = new Octokit({
  auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN
})

async function fetchAllRepos() {
  const { data: repos } = await octokit.repos.listForAuthenticatedUser({
    sort: 'updated',
    per_page: 100,
    type: 'owner' // Only repos you own
  })

  return repos.map(repo => ({
    name: repo.name,
    fullName: repo.full_name,
    description: repo.description,
    homepage: repo.homepage,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    topics: repo.topics,
    createdAt: repo.created_at,
    updatedAt: repo.updated_at,
    isPrivate: repo.private,
    defaultBranch: repo.default_branch,
    htmlUrl: repo.html_url,
    cloneUrl: repo.clone_url,
  }))
}
```

### 1.2 Filter Relevant Projects

```typescript
// scripts/github/filter-repos.ts
interface RepoFilterCriteria {
  excludeArchived?: boolean
  excludePrivate?: boolean
  excludeForks?: boolean
  minStars?: number
  includeTopics?: string[]
  excludeNames?: string[]
}

function filterRepos(repos: GitHubRepo[], criteria: RepoFilterCriteria) {
  return repos.filter(repo => {
    // Exclude archived
    if (criteria.excludeArchived && repo.archived) return false

    // Exclude private
    if (criteria.excludePrivate && repo.private) return false

    // Exclude forks
    if (criteria.excludeForks && repo.fork) return false

    // Minimum stars
    if (criteria.minStars && repo.stargazers_count < criteria.minStars) return false

    // Include specific topics
    if (criteria.includeTopics?.length) {
      const hasMatchingTopic = criteria.includeTopics.some(topic =>
        repo.topics?.includes(topic)
      )
      if (!hasMatchingTopic) return false
    }

    // Exclude specific names
    if (criteria.excludeNames?.includes(repo.name)) return false

    return true
  })
}

// Example usage
const portfolioRepos = filterRepos(allRepos, {
  excludeArchived: true,
  excludePrivate: true,
  excludeForks: true,
  minStars: 0,
  includeTopics: ['portfolio', 'web-app', 'next.js', 'react'],
  excludeNames: ['dotfiles', 'config', '.github']
})
```

### 1.3 Extract Additional Metadata

```typescript
// scripts/github/enrich-metadata.ts
async function enrichRepo(repo: GitHubRepo) {
  // Fetch README
  const readme = await fetchReadme(repo.fullName)

  // Fetch languages
  const languages = await fetchLanguages(repo.fullName)

  // Fetch latest release
  const latestRelease = await fetchLatestRelease(repo.fullName)

  // Analyze README for project details
  const analysis = analyzeReadme(readme)

  return {
    ...repo,
    readme,
    languages,
    latestRelease,
    extractedTitle: analysis.title,
    extractedDescription: analysis.description,
    extractedFeatures: analysis.features,
    extractedTechStack: analysis.techStack,
    hasDocumentation: analysis.hasDocumentation,
    hasDemoLink: analysis.hasDemoLink,
    screenshots: analysis.screenshots,
  }
}

function analyzeReadme(readme: string) {
  // Extract title (first H1)
  const titleMatch = readme.match(/^#\s+(.+)$/m)
  const title = titleMatch?.[1]

  // Extract description (text after first heading, before next heading)
  const descMatch = readme.match(/^#\s+.+$\n\n(.+?)(?=\n\n##|\n\n#|$)/ms)
  const description = descMatch?.[1]

  // Find features section
  const featuresMatch = readme.match(/##\s+Features\s*\n([\s\S]+?)(?=\n##|$)/i)
  const features = featuresMatch?.[1]
    .split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => line.replace(/^-\s*/, '').trim())

  // Find tech stack
  const techMatch = readme.match(/##\s+(?:Tech Stack|Technologies|Built With)\s*\n([\s\S]+?)(?=\n##|$)/i)
  const techStack = techMatch?.[1]
    .split('\n')
    .filter(line => line.trim().startsWith('-'))
    .map(line => line.replace(/^-\s*/, '').trim())

  // Check for demo link
  const hasDemoLink = /demo|live|deployed|visit/i.test(readme)

  // Check for documentation
  const hasDocumentation = /##\s+(?:Documentation|API|Usage)/i.test(readme)

  // Find screenshot links
  const screenshots = Array.from(
    readme.matchAll(/!\[.*?\]\((https?:\/\/.*?\.(?:png|jpg|gif|webp))\)/g)
  ).map(match => match[1])

  return {
    title,
    description,
    features,
    techStack,
    hasDemoLink,
    hasDocumentation,
    screenshots,
  }
}
```

---

## Phase 2: Data Transformation (4-6 hours)

### 2.1 Map GitHub Data to Portfolio Schema

```typescript
// scripts/github/transform-to-project.ts
import { ProjectCategory } from '@prisma/client'

interface ProjectTransform {
  // Required fields
  title: string
  slug: string
  description: string
  category: ProjectCategory

  // Optional fields
  longDescription?: string
  techStack: string[]
  features?: string[]
  role?: string
  duration?: string
  teamSize?: number
  client?: string

  // Links
  githubUrl: string
  liveUrl?: string
  demoUrl?: string

  // Media
  thumbnailUrl?: string
  screenshotUrls: string[]

  // Metadata
  featured: boolean
  published: boolean
  startDate?: Date
  endDate?: Date

  // GitHub-specific
  stars: number
  forks: number
  language: string
  topics: string[]
}

function transformRepo(enrichedRepo: EnrichedRepo): ProjectTransform {
  // Determine category from topics/language
  const category = inferCategory(enrichedRepo)

  // Generate slug
  const slug = generateSlug(enrichedRepo.name)

  // Use extracted or fallback to repo data
  const title = enrichedRepo.extractedTitle || toTitleCase(enrichedRepo.name)
  const description = enrichedRepo.extractedDescription || enrichedRepo.description || ''

  // Build long description from README
  const longDescription = buildLongDescription(enrichedRepo)

  // Extract tech stack
  const techStack = [
    enrichedRepo.language,
    ...(enrichedRepo.extractedTechStack || []),
    ...(enrichedRepo.topics || [])
  ].filter(Boolean)

  return {
    title,
    slug,
    description: truncate(description, 200),
    longDescription,
    category,
    techStack,
    features: enrichedRepo.extractedFeatures,

    githubUrl: enrichedRepo.htmlUrl,
    liveUrl: enrichedRepo.homepage || undefined,

    thumbnailUrl: enrichedRepo.screenshots?.[0],
    screenshotUrls: enrichedRepo.screenshots || [],

    featured: enrichedRepo.stars >= 10, // Auto-feature popular repos
    published: !enrichedRepo.private,

    stars: enrichedRepo.stars,
    forks: enrichedRepo.forks,
    language: enrichedRepo.language,
    topics: enrichedRepo.topics || [],

    // Defaults
    role: 'Developer',
    teamSize: 1,
    startDate: new Date(enrichedRepo.createdAt),
    endDate: new Date(enrichedRepo.updatedAt),
  }
}

function inferCategory(repo: EnrichedRepo): ProjectCategory {
  const topics = repo.topics || []
  const language = repo.language?.toLowerCase() || ''
  const name = repo.name.toLowerCase()

  // Web Development
  if (topics.includes('next.js') || topics.includes('react') || topics.includes('web-app')) {
    return 'WEB_DEVELOPMENT'
  }

  // Mobile Development
  if (topics.includes('react-native') || topics.includes('flutter') || topics.includes('ios') || topics.includes('android')) {
    return 'MOBILE_APP'
  }

  // E-commerce
  if (topics.includes('e-commerce') || topics.includes('shop') || name.includes('shop') || name.includes('store')) {
    return 'E_COMMERCE'
  }

  // Portfolio
  if (topics.includes('portfolio') || name.includes('portfolio')) {
    return 'PORTFOLIO_SITE'
  }

  // UI/UX
  if (topics.includes('design-system') || topics.includes('ui-library') || language === 'css') {
    return 'UI_UX_DESIGN'
  }

  // API
  if (topics.includes('api') || topics.includes('backend') || name.includes('api')) {
    return 'API_BACKEND'
  }

  // Default
  return 'WEB_DEVELOPMENT'
}
```

### 2.2 Handle Missing Data

```typescript
// scripts/github/data-enrichment.ts
interface DataEnrichmentStrategy {
  generateMissingImages: boolean
  useAIForDescriptions: boolean
  inferTechStackFromCode: boolean
  captureScreenshots: boolean
}

async function enrichMissingData(
  project: ProjectTransform,
  repo: EnrichedRepo,
  strategy: DataEnrichmentStrategy
) {
  // Generate thumbnail if missing
  if (!project.thumbnailUrl && strategy.generateMissingImages) {
    project.thumbnailUrl = await generateProjectThumbnail(project)
  }

  // Use AI to enhance description if too short
  if (project.description.length < 50 && strategy.useAIForDescriptions) {
    project.description = await generateDescription(project, repo)
  }

  // Analyze package.json for tech stack
  if (strategy.inferTechStackFromCode) {
    const packageJson = await fetchFile(repo.fullName, 'package.json')
    if (packageJson) {
      const dependencies = extractDependencies(packageJson)
      project.techStack = [...new Set([...project.techStack, ...dependencies])]
    }
  }

  // Capture live screenshot if URL exists
  if (project.liveUrl && strategy.captureScreenshots) {
    const screenshot = await captureScreenshot(project.liveUrl)
    if (screenshot) {
      project.screenshotUrls = [screenshot, ...project.screenshotUrls]
    }
  }

  return project
}

async function generateDescription(project: ProjectTransform, repo: EnrichedRepo): Promise<string> {
  // Use OpenAI or Claude to generate description
  const prompt = `
Generate a compelling 1-2 sentence description for a portfolio project:

Project Name: ${project.title}
Tech Stack: ${project.techStack.join(', ')}
GitHub Description: ${repo.description}
Features: ${project.features?.join(', ')}

Write a professional, engaging description suitable for a portfolio.
`

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100
    })
  })

  const data = await response.json()
  return data.choices[0].message.content.trim()
}
```

---

## Phase 3: Database Import (2-3 hours)

### 3.1 Batch Import Script

```typescript
// scripts/github/import-to-db.ts
import { PrismaClient } from '@prisma/client'
import { transformRepo, enrichMissingData } from './transform'

const prisma = new PrismaClient()

interface ImportOptions {
  batchSize: number
  skipExisting: boolean
  dryRun: boolean
  enrichmentStrategy: DataEnrichmentStrategy
}

async function importProjects(
  repos: EnrichedRepo[],
  options: ImportOptions
) {
  const results = {
    total: repos.length,
    imported: 0,
    skipped: 0,
    failed: 0,
    errors: [] as Array<{ repo: string; error: string }>
  }

  // Process in batches
  for (let i = 0; i < repos.length; i += options.batchSize) {
    const batch = repos.slice(i, i + options.batchSize)

    await Promise.all(
      batch.map(async (repo) => {
        try {
          // Transform repo to project
          let project = transformRepo(repo)

          // Enrich missing data
          project = await enrichMissingData(
            project,
            repo,
            options.enrichmentStrategy
          )

          // Check if exists
          if (options.skipExisting) {
            const existing = await prisma.project.findUnique({
              where: { slug: project.slug }
            })
            if (existing) {
              console.log(`Skipping existing project: ${project.slug}`)
              results.skipped++
              return
            }
          }

          // Dry run check
          if (options.dryRun) {
            console.log(`[DRY RUN] Would import:`, project.title)
            results.imported++
            return
          }

          // Import to database
          await prisma.project.create({
            data: {
              ...project,
              // Add user ID (replace with your user ID)
              createdById: process.env.ADMIN_USER_ID!
            }
          })

          console.log(`✅ Imported: ${project.title}`)
          results.imported++
        } catch (error) {
          console.error(`❌ Failed to import ${repo.name}:`, error)
          results.failed++
          results.errors.push({
            repo: repo.name,
            error: error instanceof Error ? error.message : 'Unknown error'
          })
        }
      })
    )

    // Progress update
    console.log(
      `Progress: ${i + batch.length}/${repos.length} ` +
      `(Imported: ${results.imported}, Skipped: ${results.skipped}, Failed: ${results.failed})`
    )
  }

  return results
}
```

### 3.2 Preview & Review System

```typescript
// scripts/github/preview-import.ts
async function generatePreview(repos: EnrichedRepo[]) {
  const projects = repos.map(transformRepo)

  // Generate HTML preview
  const html = `
<!DOCTYPE html>
<html>
<head>
  <title>Import Preview</title>
  <style>
    body { font-family: system-ui; padding: 20px; max-width: 1200px; margin: 0 auto; }
    .project { border: 1px solid #ddd; padding: 20px; margin-bottom: 20px; border-radius: 8px; }
    .project h2 { margin-top: 0; }
    .tech-stack { display: flex; gap: 8px; flex-wrap: wrap; }
    .tech { background: #e3f2fd; padding: 4px 12px; border-radius: 16px; font-size: 14px; }
    .category { display: inline-block; background: #4caf50; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; }
    .actions { margin-top: 12px; }
    .edit-btn, .skip-btn { padding: 8px 16px; margin-right: 8px; cursor: pointer; }
    .edit-btn { background: #2196f3; color: white; border: none; border-radius: 4px; }
    .skip-btn { background: #f44336; color: white; border: none; border-radius: 4px; }
  </style>
</head>
<body>
  <h1>Project Import Preview (${projects.length} projects)</h1>
  ${projects.map((project, index) => `
    <div class="project" id="project-${index}">
      <h2>${project.title}</h2>
      <span class="category">${project.category}</span>
      <p>${project.description}</p>

      <div class="tech-stack">
        ${project.techStack.map(tech => `<span class="tech">${tech}</span>`).join('')}
      </div>

      <div style="margin-top: 12px;">
        <strong>GitHub:</strong> <a href="${project.githubUrl}" target="_blank">${project.githubUrl}</a><br>
        ${project.liveUrl ? `<strong>Live:</strong> <a href="${project.liveUrl}" target="_blank">${project.liveUrl}</a>` : ''}
      </div>

      <div class="actions">
        <button class="edit-btn" onclick="editProject(${index})">Edit</button>
        <button class="skip-btn" onclick="skipProject(${index})">Skip</button>
      </div>
    </div>
  `).join('')}

  <button onclick="confirmImport()" style="padding: 12px 24px; background: #4caf50; color: white; border: none; border-radius: 4px; font-size: 16px; cursor: pointer;">
    Confirm and Import All
  </button>

  <script>
    const projects = ${JSON.stringify(projects)};
    const skipped = new Set();

    function editProject(index) {
      // Open edit modal
      alert('Edit functionality - would open modal to edit project details');
    }

    function skipProject(index) {
      skipped.add(index);
      document.getElementById('project-' + index).style.opacity = '0.3';
      document.getElementById('project-' + index).style.pointerEvents = 'none';
    }

    function confirmImport() {
      const toImport = projects.filter((_, i) => !skipped.has(i));
      console.log('Importing', toImport.length, 'projects');
      // POST to import endpoint
      fetch('/api/admin/projects/batch-import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ projects: toImport })
      }).then(() => {
        alert('Import completed!');
        window.location.href = '/admin/projects';
      });
    }
  </script>
</body>
</html>
  `

  // Save preview
  await fs.writeFile('import-preview.html', html)
  console.log('Preview generated: import-preview.html')
}
```

---

## Phase 4: Post-Import Processing (2-4 hours)

### 4.1 Image Processing

```typescript
// scripts/github/process-images.ts
import sharp from 'sharp'

async function processProjectImages(project: Project) {
  const processedImages = []

  for (const imageUrl of project.screenshotUrls) {
    try {
      // Download image
      const response = await fetch(imageUrl)
      const buffer = await response.arrayBuffer()

      // Process with sharp
      const processed = await sharp(Buffer.from(buffer))
        .resize(1200, 675, { fit: 'cover' }) // 16:9 aspect ratio
        .webp({ quality: 85 })
        .toBuffer()

      // Upload to your storage
      const uploadedUrl = await uploadToStorage(processed, `project-${project.slug}-${Date.now()}.webp`)

      processedImages.push(uploadedUrl)
    } catch (error) {
      console.error(`Failed to process image ${imageUrl}:`, error)
    }
  }

  // Update project with processed images
  await prisma.project.update({
    where: { id: project.id },
    data: { screenshotUrls: processedImages }
  })
}
```

### 4.2 SEO Optimization

```typescript
// scripts/github/optimize-seo.ts
async function optimizeSEO(project: Project) {
  // Generate meta description
  const metaDescription = project.description.length > 155
    ? project.description.substring(0, 152) + '...'
    : project.description

  // Generate keywords from tech stack and category
  const keywords = [
    ...project.techStack,
    project.category.toLowerCase().replace('_', ' '),
    'portfolio project',
    'web development'
  ].join(', ')

  // Create Open Graph data
  const ogData = {
    ogTitle: project.title,
    ogDescription: metaDescription,
    ogImage: project.thumbnailUrl,
    twitterCard: 'summary_large_image',
    keywords,
  }

  await prisma.project.update({
    where: { id: project.id },
    data: ogData
  })
}
```

---

## Execution Plan

### Setup (Day 1, Morning - 2 hours)

1. **Install Dependencies**
   ```bash
   npm install @octokit/rest
   npm install sharp
   npm install puppeteer # For screenshot capture
   ```

2. **Set Environment Variables**
   ```bash
   # .env.local
   GITHUB_PERSONAL_ACCESS_TOKEN=ghp_xxxxxxxxxxxx
   OPENAI_API_KEY=sk-xxxxxxxxxxxx
   ADMIN_USER_ID=your-user-id
   ```

3. **Create Scripts Directory**
   ```bash
   mkdir -p scripts/github
   touch scripts/github/fetch-repos.ts
   touch scripts/github/transform-to-project.ts
   touch scripts/github/import-to-db.ts
   ```

### Data Collection (Day 1, Afternoon - 4 hours)

4. **Fetch All Repos**
   ```bash
   npx tsx scripts/github/fetch-repos.ts > repos.json
   ```

5. **Filter & Enrich**
   ```bash
   npx tsx scripts/github/filter-and-enrich.ts
   ```
   - Review repos.json
   - Manually tag repos you want to import
   - Fetch README, languages, releases

6. **Generate Preview**
   ```bash
   npx tsx scripts/github/preview-import.ts
   ```
   - Open import-preview.html
   - Review each project
   - Edit/skip as needed

### Import (Day 2, Morning - 3 hours)

7. **Dry Run**
   ```bash
   npx tsx scripts/github/import-to-db.ts --dry-run
   ```
   - Check console output
   - Verify data looks correct

8. **Import to Database**
   ```bash
   npx tsx scripts/github/import-to-db.ts --batch-size=5
   ```
   - Import in small batches
   - Monitor for errors
   - Fix issues as they arise

### Post-Processing (Day 2, Afternoon - 4 hours)

9. **Process Images**
   ```bash
   npx tsx scripts/github/process-images.ts
   ```

10. **Optimize SEO**
    ```bash
    npx tsx scripts/github/optimize-seo.ts
    ```

11. **Manual Review**
    - Visit /admin/projects
    - Check each imported project
    - Fix any issues
    - Add missing data

### Cleanup (Day 3, Morning - 2 hours)

12. **Final Touches**
    - Set featured projects
    - Arrange project order
    - Test public project pages
    - Update project descriptions if needed

---

## Quality Checklist

Before marking a project as "complete":

- [ ] Title is descriptive and professional
- [ ] Description is clear and engaging (100-200 chars)
- [ ] Category is correct
- [ ] Tech stack is accurate
- [ ] At least 1 screenshot/thumbnail
- [ ] GitHub link works
- [ ] Live URL works (if applicable)
- [ ] SEO metadata present
- [ ] Slug is URL-friendly
- [ ] No typos or formatting issues

---

## Fallback Manual Process

If automation fails or you need more control:

1. **Export repos to CSV**
   ```typescript
   const csv = repos.map(r => [
     r.name,
     r.description,
     r.language,
     r.htmlUrl,
     r.homepage,
     r.topics.join(';')
   ].join(',')).join('\n')

   fs.writeFileSync('repos.csv', csv)
   ```

2. **Edit in Excel/Google Sheets**
   - Add portfolio-specific data
   - Categorize projects
   - Write descriptions
   - Mark which to import

3. **Import from CSV**
   ```typescript
   const csv = fs.readFileSync('repos-edited.csv', 'utf-8')
   const projects = parseCSV(csv)

   for (const project of projects) {
     await prisma.project.create({ data: project })
   }
   ```

---

## Expected Results

After completion, you will have:

- ✅ 20-30 projects imported from GitHub
- ✅ All projects categorized and tagged
- ✅ Professional descriptions for each
- ✅ Optimized images for each project
- ✅ SEO metadata for better discoverability
- ✅ Live links and GitHub links working
- ✅ Portfolio showcasing your best work

**Estimated Time:** 2-3 days
**Automation Level:** 80% automated, 20% manual review/editing
**Quality:** High - suitable for professional portfolio

---

## Maintenance

**Ongoing Updates:**
- Run import script monthly to add new repos
- Set up GitHub webhook to auto-add new projects
- Use GitHub Actions to keep project metadata in sync

**Webhook Setup:**
```typescript
// app/api/webhooks/github/route.ts
export async function POST(request: NextRequest) {
  const payload = await request.json()

  if (payload.action === 'created' && payload.repository) {
    // New repo created - add to portfolio
    const project = transformRepo(payload.repository)
    await prisma.project.create({ data: project })
  }

  return NextResponse.json({ success: true })
}
```

---

**Document Version:** 1.0
**Last Updated:** 2025-12-29
**Status:** Ready for implementation
