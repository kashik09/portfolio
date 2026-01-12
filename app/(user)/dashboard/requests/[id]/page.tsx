'use client'

export const dynamic = 'force-dynamic'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, FileText, Clock, ListChecks } from 'lucide-react'
import { useToast } from '@/components/ui/Toast'
import { Spinner } from '@/components/ui/Spinner'
interface RequestDetail {
  id: string
  projectType: string
  status: string
  budget: string
  timeline: string
  description: string
  requirements?: string | null
  createdAt: string
}
interface ServiceProjectPhase {
  id: string
  phase: string
  startedAt: string
  completedAt?: string | null
}
interface ServiceProjectSummary {
  id: string
  name: string
  currentPhase: string
  status: string
  designRevisions: number
  designRevisionsMax: number
  buildRevisions: number
  buildRevisionsMax: number
  approvedFeatures: string[]
  scope?: string | null
  phases: ServiceProjectPhase[]
}
interface RequestDetailResponse {
  success: boolean
  data?: {
    request: RequestDetail
    serviceProject: ServiceProjectSummary | null
  }
}
interface RequestDetailPageProps {
  params: {
    id: string
  }
}
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
function formatPhase(phase: string) {
  return phase.replace('_', ' ')
}
export default function RequestDetailPage({ params }: RequestDetailPageProps) {
  const { showToast } = useToast()
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [request, setRequest] = useState<RequestDetail | null>(null)
  const [serviceProject, setServiceProject] =
    useState<ServiceProjectSummary | null>(null)
  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setLoading(true)
        const res = await fetch(`/api/me/requests/${params.id}`)
        if (!res.ok) {
          if (res.status === 404 && !cancelled) {
            setNotFound(true)
          } else {
            throw new Error('Failed to load request details')
          }
          return
        }
        const json = (await res.json()) as RequestDetailResponse
        if (!json.success || !json.data) {
          throw new Error('Failed to load request details')
        }
        if (cancelled) return
        setRequest(json.data.request)
        setServiceProject(json.data.serviceProject)
      } catch (error) {
        console.error('Error loading request details:', error)
        if (!cancelled) {
          showToast('Failed to load request details', 'error')
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [params.id, showToast])
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner size="lg" />
      </div>
    )
  }
  if (notFound || !request) {
    return (
      <div className="max-w-3xl">
        <div className="bg-card rounded-2xl border border-border p-12 text-center">
          <FileText
            className="mx-auto mb-4 text-muted-foreground"
            size={64}
          />
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Request not found
          </h2>
          <p className="text-muted-foreground mb-6">
            This request could not be found or you don&apos;t have access to
            it.
          </p>
          <Link
            href="/dashboard/requests"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition font-medium"
          >
            <ArrowLeft size={20} />
            Back to Requests
          </Link>
        </div>
      </div>
    )
  }
  const designRevisionsRemaining =
    serviceProject &&
    Math.max(
      0,
      serviceProject.designRevisionsMax - serviceProject.designRevisions
    )
  const buildRevisionsRemaining =
    serviceProject &&
    Math.max(
      0,
      serviceProject.buildRevisionsMax - serviceProject.buildRevisions
    )
  return (
    <div className="space-y-6 max-w-4xl">
      <Link
        href="/dashboard/requests"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition"
      >
        <ArrowLeft size={20} />
        Back to Requests
      </Link>
      {/* Request Summary */}
      <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-primary/10 rounded-lg">
            <FileText className="text-primary" size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              {request.projectType}
            </h1>
            <p className="text-sm text-muted-foreground">
              Submitted on {formatDate(request.createdAt)}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span>
            Budget:{' '}
            <span className="font-medium text-foreground">
              {request.budget}
            </span>
          </span>
          <span>
            Timeline:{' '}
            <span className="font-medium text-foreground">
              {request.timeline}
            </span>
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock size={14} />
            Status:{' '}
            <span className="font-medium text-foreground">
              {request.status.replace('_', ' ')}
            </span>
          </span>
        </div>
      </div>
      {/* Request Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">
            Project Details
          </h2>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {request.description}
          </p>
        </div>
        <div className="bg-card rounded-2xl border border-border p-6">
          <h2 className="text-lg font-bold text-foreground mb-3">
            Additional Requirements
          </h2>
          <p className="text-sm text-muted-foreground whitespace-pre-line">
            {request.requirements || 'No additional requirements provided.'}
          </p>
        </div>
      </div>
      {/* Service Project Summary */}
      {serviceProject && (
        <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <ListChecks className="text-primary" size={20} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">
                Project Delivery Status
              </h2>
              <p className="text-sm text-muted-foreground">
                Linked service project: {serviceProject.name}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Current phase</p>
              <p className="font-medium text-foreground">
                {formatPhase(serviceProject.currentPhase)}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Design revisions</p>
              <p className="font-medium text-foreground">
                {serviceProject.designRevisions} used
                {typeof designRevisionsRemaining === 'number' &&
                  ` · ${designRevisionsRemaining} remaining`}
              </p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Build revisions</p>
              <p className="font-medium text-foreground">
                {serviceProject.buildRevisions} used
                {typeof buildRevisionsRemaining === 'number' &&
                  ` · ${buildRevisionsRemaining} remaining`}
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">
                Included in original scope
              </p>
              {serviceProject.approvedFeatures.length > 0 ? (
                <ul className="list-disc list-inside text-foreground space-y-1">
                  {serviceProject.approvedFeatures.map(feature => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">
                  Scope has not been explicitly defined yet.
                </p>
              )}
            </div>
            <div>
              <p className="text-muted-foreground mb-1">
                Boundaries & paid work
              </p>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {serviceProject.scope ||
                  'Original scope is fixed at quote acceptance. Changes require additional credits or paid add-ons. Maintenance covers bug fixes only; new features, pages, or design changes are treated as new work. We will confirm scope and credits before starting any additions.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
