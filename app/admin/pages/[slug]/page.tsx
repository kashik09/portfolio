'use client'

import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Save, Plus, Trash2, GripVertical, Eye } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { StyledSelect } from '@/components/ui/StyledSelect'
import { Spinner } from '@/components/ui/Spinner'
import ConfirmModal from '@/components/ui/ConfirmModal'

interface PageData {
  id?: string
  slug: string
  title: string
  status: 'DRAFT' | 'PUBLISHED'
  seoTitle: string
  seoDescription: string
}

interface Section {
  id?: string
  type: string
  data: any
  order: number
}

const SECTION_TYPES = [
  { value: 'HERO', label: 'Hero Section' },
  { value: 'RICH_TEXT', label: 'Rich Text / Markdown' },
  { value: 'PROJECT_GRID', label: 'Project Grid' },
  { value: 'CARDS', label: 'Cards' },
  { value: 'CTA', label: 'Call to Action' },
  { value: 'FAQ', label: 'FAQ' },
  { value: 'CONTACT_BLOCK', label: 'Contact Block' }
]

export default function PageEditorPage() {
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string
  const isNew = slug === 'new'

  const [loading, setLoading] = useState(!isNew)
  const [saving, setSaving] = useState(false)
  const [pageData, setPageData] = useState<PageData>({
    slug: '',
    title: '',
    status: 'DRAFT',
    seoTitle: '',
    seoDescription: ''
  })
  const [sections, setSections] = useState<Section[]>([])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; sectionIndex: number | null }>({
    open: false,
    sectionIndex: null
  })

  useEffect(() => {
    if (!isNew) {
      fetchPage()
    }
  }, [slug, isNew])

  const fetchPage = async () => {
    try {
      setLoading(true)
      const response = await fetch(`/api/pages/${slug}`)
      const data = await response.json()

      if (data.success) {
        const page = data.data
        setPageData({
          id: page.id,
          slug: page.slug,
          title: page.title,
          status: page.status,
          seoTitle: page.seoTitle || '',
          seoDescription: page.seoDescription || ''
        })
        setSections(page.sections || [])
      } else {
        console.error('Failed to fetch page:', data.error)
        alert('Failed to load page')
        router.push('/admin/pages')
      }
    } catch (error) {
      console.error('Error fetching page:', error)
      alert('Error loading page')
      router.push('/admin/pages')
    } finally {
      setLoading(false)
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {}

    if (!pageData.title.trim()) {
      newErrors.title = 'Title is required'
    }

    if (!pageData.slug.trim()) {
      newErrors.slug = 'Slug is required'
    } else if (!/^[a-z0-9-]+$/.test(pageData.slug)) {
      newErrors.slug = 'Slug must be lowercase letters, numbers, and hyphens only'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSave = async () => {
    if (!validateForm()) return

    try {
      setSaving(true)

      // Save or create page
      const pageResponse = await fetch(
        isNew ? '/api/pages' : `/api/pages/${slug}`,
        {
          method: isNew ? 'POST' : 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(pageData)
        }
      )

      const pageResult = await pageResponse.json()

      if (!pageResult.success) {
        alert('Failed to save page: ' + pageResult.error)
        return
      }

      // If new page, we need to add sections to the newly created page
      if (isNew && sections.length > 0) {
        const createdPageSlug = pageResult.data.slug

        // Add all sections
        for (const section of sections) {
          await fetch(`/api/pages/${createdPageSlug}/sections`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: section.type,
              data: section.data,
              order: section.order
            })
          })
        }

        router.push(`/admin/pages/${createdPageSlug}`)
      } else if (!isNew && sections.length > 0) {
        // Update existing sections
        const sectionsWithIds = sections.filter(s => s.id)
        if (sectionsWithIds.length > 0) {
          await fetch(`/api/pages/${slug}/sections`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sections: sectionsWithIds })
          })
        }

        // Add new sections (without id)
        const newSections = sections.filter(s => !s.id)
        for (const section of newSections) {
          await fetch(`/api/pages/${slug}/sections`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: section.type,
              data: section.data,
              order: section.order
            })
          })
        }

        // Reload to get updated sections with IDs
        await fetchPage()
      } else if (!isNew) {
        // Just update page metadata
        router.push('/admin/pages')
      }

      alert('Page saved successfully!')
    } catch (error) {
      console.error('Error saving page:', error)
      alert('Error saving page')
    } finally {
      setSaving(false)
    }
  }

  const addSection = (type: string) => {
    const newSection: Section = {
      type,
      data: getDefaultDataForType(type),
      order: sections.length
    }
    setSections([...sections, newSection])
  }

  const getDefaultDataForType = (type: string): any => {
    switch (type) {
      case 'HERO':
        return { title: '', subtitle: '', ctaText: '', ctaLink: '' }
      case 'RICH_TEXT':
        return { content: '' }
      case 'PROJECT_GRID':
        return { title: '', filter: 'ALL' }
      case 'CARDS':
        return { title: '', cards: [] }
      case 'CTA':
        return { title: '', description: '', buttonText: '', buttonLink: '' }
      case 'FAQ':
        return { title: '', items: [] }
      case 'CONTACT_BLOCK':
        return { title: '', showForm: true }
      default:
        return {}
    }
  }

  const updateSection = (index: number, data: any) => {
    const updated = [...sections]
    updated[index] = { ...updated[index], data }
    setSections(updated)
  }

  const deleteSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index))
    setDeleteModal({ open: false, sectionIndex: null })
  }

  const moveSectionUp = (index: number) => {
    if (index === 0) return
    const updated = [...sections]
    ;[updated[index - 1], updated[index]] = [updated[index], updated[index - 1]]
    updated.forEach((section, i) => {
      section.order = i
    })
    setSections(updated)
  }

  const moveSectionDown = (index: number) => {
    if (index === sections.length - 1) return
    const updated = [...sections]
    ;[updated[index], updated[index + 1]] = [updated[index + 1], updated[index]]
    updated.forEach((section, i) => {
      section.order = i
    })
    setSections(updated)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => router.push('/admin/pages')}
            size="sm"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">
              {isNew ? 'Create New Page' : 'Edit Page'}
            </h1>
            <p className="text-muted-foreground mt-1">
              {isNew ? 'Configure page settings and add sections' : `Editing: ${pageData.title}`}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {!isNew && pageData.status === 'PUBLISHED' && (
            <Button
              variant="outline"
              onClick={() => window.open(`/${slug}`, '_blank')}
              size="sm"
            >
              <Eye size={18} className="mr-2" />
              Preview
            </Button>
          )}
          <Button onClick={handleSave} disabled={saving}>
            <Save size={18} className="mr-2" />
            {saving ? 'Saving...' : 'Save Page'}
          </Button>
        </div>
      </div>

      {/* Page Settings */}
      <div className="bg-card border border-border rounded-lg p-6 space-y-4">
        <h2 className="text-xl font-semibold text-foreground mb-4">Page Settings</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Page Title"
            placeholder="About Us"
            value={pageData.title}
            onChange={(e) => setPageData({ ...pageData, title: e.target.value })}
            error={errors.title}
            required
          />

          <Input
            label="URL Slug"
            placeholder="about"
            value={pageData.slug}
            onChange={(e) => setPageData({ ...pageData, slug: e.target.value.toLowerCase() })}
            error={errors.slug}
            required
            disabled={!isNew}
          />
        </div>

        <StyledSelect
          label="Status"
          value={pageData.status}
          onChange={(e) => setPageData({ ...pageData, status: e.target.value as 'DRAFT' | 'PUBLISHED' })}
        >
          <option value="DRAFT">Draft</option>
          <option value="PUBLISHED">Published</option>
        </StyledSelect>

        <Input
          label="SEO Title"
          placeholder="About Us - Your Company"
          value={pageData.seoTitle}
          onChange={(e) => setPageData({ ...pageData, seoTitle: e.target.value })}
        />

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            SEO Description
          </label>
          <textarea
            className="w-full px-4 py-3 bg-card text-foreground border border-border rounded-lg
              focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
            rows={3}
            placeholder="A brief description of this page for search engines..."
            value={pageData.seoDescription}
            onChange={(e) => setPageData({ ...pageData, seoDescription: e.target.value })}
          />
        </div>
      </div>

      {/* Sections */}
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-foreground">Page Sections</h2>
          <StyledSelect
            value=""
            onChange={(e) => {
              if (e.target.value) {
                addSection(e.target.value)
                e.target.value = ''
              }
            }}
          >
            <option value="">Add Section...</option>
            {SECTION_TYPES.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </StyledSelect>
        </div>

        {sections.length === 0 ? (
          <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
            <Plus size={48} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">No sections yet</h3>
            <p className="text-muted-foreground">
              Add your first section using the dropdown above
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div
                key={index}
                className="border border-border rounded-lg p-4 bg-background"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-1">
                      <button
                        onClick={() => moveSectionUp(index)}
                        disabled={index === 0}
                        className="text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ▲
                      </button>
                      <button
                        onClick={() => moveSectionDown(index)}
                        disabled={index === sections.length - 1}
                        className="text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        ▼
                      </button>
                    </div>
                    <GripVertical size={20} className="text-muted-foreground" />
                    <span className="font-medium text-foreground">
                      {SECTION_TYPES.find(t => t.value === section.type)?.label || section.type}
                    </span>
                  </div>
                  <button
                    onClick={() => setDeleteModal({ open: true, sectionIndex: index })}
                    className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>

                {/* Section-specific editor - simplified for now */}
                <div className="space-y-3">
                  <textarea
                    className="w-full px-4 py-3 bg-card text-foreground border border-border rounded-lg
                      focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none font-mono text-sm"
                    rows={6}
                    placeholder="Section data (JSON)"
                    value={JSON.stringify(section.data, null, 2)}
                    onChange={(e) => {
                      try {
                        const parsed = JSON.parse(e.target.value)
                        updateSection(index, parsed)
                      } catch (err) {
                        // Invalid JSON, allow user to keep typing
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Section Confirmation */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, sectionIndex: null })}
        onConfirm={() => deleteModal.sectionIndex !== null && deleteSection(deleteModal.sectionIndex)}
        title="Delete Section"
        message="Are you sure you want to delete this section? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  )
}
