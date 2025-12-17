'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FileText, Plus, Search, Trash2, Edit2, Eye, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { StyledSelect } from '@/components/ui/StyledSelect'
import ConfirmModal from '@/components/ui/ConfirmModal'
import { Spinner } from '@/components/ui/Spinner'

interface Page {
  id: string
  slug: string
  title: string
  status: 'DRAFT' | 'PUBLISHED'
  seoTitle?: string | null
  seoDescription?: string | null
  createdAt: string
  updatedAt: string
  _count: {
    sections: number
  }
}

export default function PagesAdminPage() {
  const router = useRouter()
  const [pages, setPages] = useState<Page[]>([])
  const [filteredPages, setFilteredPages] = useState<Page[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all')
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; page: Page | null }>({
    open: false,
    page: null
  })
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetchPages()
  }, [])

  useEffect(() => {
    filterPages()
  }, [pages, searchQuery, statusFilter])

  const fetchPages = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/pages')
      const data = await response.json()

      if (data.success) {
        setPages(data.data)
      } else {
        console.error('Failed to fetch pages:', data.error)
      }
    } catch (error) {
      console.error('Error fetching pages:', error)
    } finally {
      setLoading(false)
    }
  }

  const filterPages = () => {
    let filtered = [...pages]

    // Status filter
    if (statusFilter === 'published') {
      filtered = filtered.filter(p => p.status === 'PUBLISHED')
    } else if (statusFilter === 'draft') {
      filtered = filtered.filter(p => p.status === 'DRAFT')
    }

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        p =>
          p.title.toLowerCase().includes(query) ||
          p.slug.toLowerCase().includes(query) ||
          p.seoTitle?.toLowerCase().includes(query)
      )
    }

    setFilteredPages(filtered)
  }

  const handleDelete = async () => {
    if (!deleteModal.page) return

    try {
      setDeleting(true)
      const response = await fetch(`/api/pages/${deleteModal.page.slug}`, {
        method: 'DELETE'
      })

      const data = await response.json()

      if (data.success) {
        setPages(pages.filter(p => p.id !== deleteModal.page!.id))
        setDeleteModal({ open: false, page: null })
      } else {
        console.error('Failed to delete page:', data.error)
        alert('Failed to delete page: ' + data.error)
      }
    } catch (error) {
      console.error('Error deleting page:', error)
      alert('Error deleting page')
    } finally {
      setDeleting(false)
    }
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => router.push('/admin')}
            size="sm"
          >
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">Pages</h1>
            <p className="text-muted-foreground mt-1">
              Manage your site pages and content
            </p>
          </div>
        </div>
        <Button
          onClick={() => router.push('/admin/pages/new')}
          className="flex items-center gap-2"
          size="sm"
        >
          <Plus size={18} />
          <span>Create Page</span>
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Search pages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="w-full sm:w-48">
          <StyledSelect
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
          >
            <option value="all">All Pages</option>
            <option value="published">Published</option>
            <option value="draft">Drafts</option>
          </StyledSelect>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <FileText className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">{pages.length}</p>
              <p className="text-sm text-muted-foreground">Total Pages</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-500/10 rounded-lg">
              <Eye className="text-green-600 dark:text-green-400" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {pages.filter(p => p.status === 'PUBLISHED').length}
              </p>
              <p className="text-sm text-muted-foreground">Published</p>
            </div>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-500/10 rounded-lg">
              <Edit2 className="text-yellow-600 dark:text-yellow-400" size={24} />
            </div>
            <div>
              <p className="text-2xl font-bold text-foreground">
                {pages.filter(p => p.status === 'DRAFT').length}
              </p>
              <p className="text-sm text-muted-foreground">Drafts</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pages List */}
      {filteredPages.length === 0 ? (
        <div className="text-center py-12">
          <FileText size={48} className="mx-auto text-muted-foreground mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {searchQuery || statusFilter !== 'all' ? 'No pages found' : 'No pages yet'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {searchQuery || statusFilter !== 'all'
              ? 'Try adjusting your filters'
              : 'Create your first page to get started'}
          </p>
          {!searchQuery && statusFilter === 'all' && (
            <Button onClick={() => router.push('/admin/pages/new')}>
              Create Your First Page
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => (
            <div
              key={page.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              {/* Status Badge */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    page.status === 'PUBLISHED'
                      ? 'bg-green-500/10 text-green-600 dark:text-green-400'
                      : 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400'
                  }`}
                >
                  {page.status}
                </span>
                <button
                  onClick={() => setDeleteModal({ open: true, page })}
                  className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition"
                  title="Delete page"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Title & Slug */}
              <h3 className="text-xl font-semibold text-foreground mb-2">{page.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">/{page.slug}</p>

              {/* Meta Info */}
              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Sections:</span>
                  <span className="font-medium text-foreground">{page._count.sections}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Updated:</span>
                  <span className="font-medium text-foreground">
                    {new Date(page.updatedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  onClick={() => router.push(`/admin/pages/${page.slug}`)}
                  variant="outline"
                  className="flex-1"
                  size="sm"
                >
                  <Edit2 size={16} className="mr-2" />
                  Edit
                </Button>
                <Button
                  onClick={() => window.open(`/${page.slug}`, '_blank')}
                  variant="outline"
                  size="sm"
                  disabled={page.status !== 'PUBLISHED'}
                >
                  <Eye size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, page: null })}
        onConfirm={handleDelete}
        title="Delete Page"
        message={`Are you sure you want to delete "${deleteModal.page?.title}"? This will also delete all sections. This action cannot be undone.`}
        confirmText="Delete"
        cancelText="Cancel"
      />
    </div>
  )
}
