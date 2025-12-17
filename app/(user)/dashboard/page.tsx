'use client'

import { useSession } from 'next-auth/react'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Download, FileText, ArrowRight, Package, Clock } from 'lucide-react'
import { useToast } from '@/components/ui/Toast'

interface DashboardStats {
  totalDownloads: number
  totalRequests: number
  pendingRequests: number
}

interface RecentDownload {
  slug: string
  name: string
  category: string
  downloadedAt: string
}

interface RecentRequest {
  id: string
  serviceType: string
  status: string
  createdAt: string
}

export default function DashboardPage() {
  const { data: session } = useSession()
  const { showToast } = useToast()
  const [loading, setLoading] = useState(true)
  const [stats, setStats] = useState<DashboardStats>({
    totalDownloads: 0,
    totalRequests: 0,
    pendingRequests: 0
  })
  const [recentDownloads, setRecentDownloads] = useState<RecentDownload[]>([])
  const [recentRequests, setRecentRequests] = useState<RecentRequest[]>([])

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)

      // TODO: Replace with actual API calls
      // const [statsRes, downloadsRes, requestsRes] = await Promise.all([
      //   fetch('/api/user/stats'),
      //   fetch('/api/user/downloads/recent'),
      //   fetch('/api/user/requests/recent')
      // ])

      // Mock data for development
      await new Promise(resolve => setTimeout(resolve, 1000))

      setStats({
        totalDownloads: 3,
        totalRequests: 5,
        pendingRequests: 2
      })

      setRecentDownloads([
        {
          slug: 'ui-kit-pro',
          name: 'UI Kit Pro',
          category: 'UI_KIT',
          downloadedAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
          slug: 'dashboard-template',
          name: 'Dashboard Template',
          category: 'TEMPLATE',
          downloadedAt: new Date(Date.now() - 172800000).toISOString()
        },
        {
          slug: 'icon-pack',
          name: 'Icon Pack',
          category: 'ASSET',
          downloadedAt: new Date(Date.now() - 259200000).toISOString()
        }
      ])

      setRecentRequests([
        {
          id: '1',
          serviceType: 'Web Development',
          status: 'IN_PROGRESS',
          createdAt: new Date(Date.now() - 86400000).toISOString()
        },
        {
          id: '2',
          serviceType: 'UI/UX Design',
          status: 'PENDING',
          createdAt: new Date(Date.now() - 172800000).toISOString()
        },
        {
          id: '3',
          serviceType: 'Mobile App',
          status: 'COMPLETED',
          createdAt: new Date(Date.now() - 604800000).toISOString()
        }
      ])
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      showToast('Failed to load dashboard data', 'error')
    } finally {
      setLoading(false)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300'
      case 'IN_PROGRESS':
      case 'REVIEWING':
        return 'bg-blue-500/20 text-blue-700 dark:text-blue-300'
      case 'COMPLETED':
        return 'bg-green-500/20 text-green-700 dark:text-green-300'
      case 'REJECTED':
      case 'CANCELLED':
        return 'bg-red-500/20 text-red-700 dark:text-red-300'
      default:
        return 'bg-primary/20 text-primary'
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    return date.toLocaleDateString()
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8 max-w-7xl">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Welcome back, {session?.user?.name?.split(' ')[0] || 'there'}!
        </h1>
        <p className="text-muted-foreground">
          Here's an overview of your account activity
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Download className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Downloads</p>
              <p className="text-3xl font-bold text-foreground">{stats.totalDownloads}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 rounded-lg">
              <FileText className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Requests</p>
              <p className="text-3xl font-bold text-foreground">{stats.totalRequests}</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-yellow-500/10 rounded-lg">
              <Clock className="text-yellow-600 dark:text-yellow-400" size={24} />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Pending Requests</p>
              <p className="text-3xl font-bold text-foreground">{stats.pendingRequests}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link
          href="/request"
          className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-2xl p-8 text-white hover:shadow-xl transition-shadow group"
        >
          <FileText size={32} className="mb-4" />
          <h3 className="text-xl font-bold mb-2">Request a Service</h3>
          <p className="text-white/90 mb-4">
            Need help with a project? Submit a service request and I'll get back to you.
          </p>
          <span className="inline-flex items-center gap-2 text-white font-medium group-hover:gap-3 transition-all">
            Get Started <ArrowRight size={20} />
          </span>
        </Link>

        <Link
          href="/services"
          className="bg-card border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg transition-all group"
        >
          <Package size={32} className="mb-4 text-primary" />
          <h3 className="text-xl font-bold text-foreground mb-2">Browse Services</h3>
          <p className="text-muted-foreground mb-4">
            Explore the services I offer and find the right solution for your needs.
          </p>
          <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            View Services <ArrowRight size={20} />
          </span>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Downloads */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Recent Downloads</h2>
            {recentDownloads.length > 0 && (
              <Link
                href="/dashboard/downloads"
                className="text-sm text-primary hover:underline font-medium"
              >
                View all
              </Link>
            )}
          </div>

          {recentDownloads.length === 0 ? (
            <div className="text-center py-12">
              <Download className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-muted-foreground mb-4">No downloads yet</p>
              <Link
                href="/services"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Browse Services
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentDownloads.map((download) => (
                <Link
                  key={download.slug}
                  href={`/dashboard/downloads/${download.slug}`}
                  className="block p-4 bg-muted rounded-lg hover:bg-muted/70 transition"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{download.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {download.category.replace('_', ' ')}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(download.downloadedAt)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Recent Requests */}
        <div className="bg-card rounded-2xl border border-border p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Recent Requests</h2>
            {recentRequests.length > 0 && (
              <Link
                href="/dashboard/requests"
                className="text-sm text-primary hover:underline font-medium"
              >
                View all
              </Link>
            )}
          </div>

          {recentRequests.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-muted-foreground mb-4">No requests submitted yet</p>
              <Link
                href="/request"
                className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition"
              >
                Submit Request
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {recentRequests.map((request) => (
                <Link
                  key={request.id}
                  href={`/dashboard/requests/${request.id}`}
                  className="block p-4 bg-muted rounded-lg hover:bg-muted/70 transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-foreground">{request.serviceType}</h3>
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${getStatusColor(request.status)}`}>
                      {request.status.replace('_', ' ')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(request.createdAt)}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
