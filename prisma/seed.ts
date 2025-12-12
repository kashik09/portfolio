import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Add JS Calculator project
  const calculator = await prisma.project.upsert({
    where: { slug: 'js-calculator' },
    update: {},
    create: {
      slug: 'js-calculator',
      title: 'JS Calculator - Modern Calculator App',
      description: 'A feature-rich, modern calculator web application with draggable modals, multiple themes (Dark, Light, Ocean, Sunset), advanced operations, and comprehensive calculation history. Built with Next.js 16, React 19, and Tailwind CSS.',
      category: 'CLASS',
      tags: ['calculator', 'javascript', 'nextjs', 'tailwind'],
      techStack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Lucide React'],
      imageUrl: '/projects/js-calculator.png', // We'll add the image
      featured: true,
      published: true,
      githubUrl: 'https://github.com/kashik09/js-calc',
      // demoUrl: 'https://js-calc-kashi.vercel.app', // Add after deploying
    }
  })

  console.log('✅ Created calculator project:', calculator.title)
  console.log('🎉 Seeding complete!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })