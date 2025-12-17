'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Download, Package, Search, Filter } from 'lucide-react'
import { useToast } from '@/components/ui/Toast'

interface UserDownload {
  slug: string
  name: string
  description: string
  category: string
  thumbnailUrl?: string
  downloadLimit: number
  downloadsUsed: number
  purchasedAt: string
  expiresAt?: string
  fileSize: number
}

export default function DownloadsPage() {
  const { showToast } = useToast()
  const [loading, setLoading] = useState(true)
  const [downloads, setDownloads] = useState<UserDownload[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')

  useEffect(() => {
    fetchDownloads()
  }, [])

  const fetchDownloads = async () => {
    try {
      setLoading(true)

      // TODO: Replace with actual API call
      // const response = await fetch('/api/user/downloads')
      // const data = await response.json()

      // Mock data for development
      await new Promise(resolve => setTimeout(resolve, 1000))

      setDownloads([
        {
          slug: 'ui-kit-pro',
          name: 'UI Kit Pro',
          description: 'Complete UI component library with 200+ components',
          category: 'UI_KIT',
          thumbnailUrl: '/images/products/ui-kit.png',
          downloadLimit: 3,
          downloadsUsed: 1,
          purchasedAt: new Date(Date.now() - 2592000000).toISOString(),
          fileSize: 15728640
        },
        {
          slug: 'dashboard-template',
          name: 'Dashboard Template',
          description: 'Modern admin dashboard template with dark mode',
          category: 'TEMPLATE',
          thumbnailUrl: '/images/products/dashboard.png',
          downloadLimit: 3,
          downloadsUsed: 2,
          purchasedAt: new Date(Date.now() - 5184000000).toISOString(),
          fileSize: 8388608
        },
        {
          slug: 'icon-pack',
          name: 'Premium Icon Pack',
          description: '500+ SVG icons for modern applications',
          category: 'ASSET',
          downloadLimit: 3,
          downloadsUsed: 0,
          purchasedAt: new Date(Date.now() - 1296000000).toISOString(),
          fileSize: 2097152
        }
      ])
    } catch (error) {
      console.error('Error fetching downloads:', error)
      showToast('Failed to load downloads', 'error')
    } finally {
      setLoading(false)
    }
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / 1048576).toFixed(1) + ' MB'
  }

  const formatCategory = (category: string) => {
    return category.replace(/_/g, ' ')
  }

  const filteredDownloads = downloads.filter(download => {
    const matchesSearch = download.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      download.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = categoryFilter === 'all' || download.category === categoryFilter

    return matchesSearch && matchesCategory
  })

  const categories = Array.from(new Set(downloads.map(d => d.category)))

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6 max-w-7xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">My Downloads</h1>
        <p className="text-muted-foreground">
          Access all your purchased digital products
        </p>
      </div>

      {downloads.length === 0 ? (
        /* Empty State */
        <div className="bg-card rounded-2xl border border-border p-12 text-center">
          <Package className="mx-auto mb-4 text-muted-foreground" size={64} />
          <h2 className="text-2xl font-bold text-foreground mb-2">No downloads yet</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            You haven't purchased any digital products yet. Browse our services to find templates, UI kits, and more.
          </p>
          <Link
            href="/services"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            Browse Services
          </Link>
        </div>
      ) : (
        <>
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <input
                type="text"
                placeholder="Search downloads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>
                  {formatCategory(category)}
                </option>
              ))}
            </select>
          </div>

          {/* Downloads Grid */}
          {filteredDownloads.length === 0 ? (
            <div className="bg-card rounded-2xl border border-border p-12 text-center">
              <Search className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-muted-foreground">
                No downloads match your search criteria
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDownloads.map((download) => (
                <Link
                  key={download.slug}
                  href={`/dashboard/downloads/${download.slug}`}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  {/* Thumbnail */}
                  {download.thumbnailUrl ? (
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <img
                        src={download.thumbnailUrl}
                        alt={download.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Package className="text-primary" size={48} />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {download.name}
                      </h3>
                      <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full font-medium whitespace-nowrap ml-2">
                        {formatCategory(download.category)}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {download.description}
                    </p>

                    {/* Download Info */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {formatFileSize(download.fileSize)}
                      </span>
                      <span className={`font-medium ${
                        download.downloadsUsed >= download.downloadLimit
                          ? 'text-red-600 dark:text-red-400'
                          : 'text-green-600 dark:text-green-400'
                      }`}>
                        {download.downloadLimit - download.downloadsUsed} downloads left
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-3 w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          download.downloadsUsed >= download.downloadLimit
                            ? 'bg-red-500'
                            : 'bg-green-500'
                        }`}
                        style={{
                          width: `${(download.downloadsUsed / download.downloadLimit) * 100}%`
                        }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
