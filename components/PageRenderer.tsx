'use client'

import { useEffect, useState } from 'react'
import { Spinner } from '@/components/ui/Spinner'
import { Hero } from '@/components/sections/Hero'
import { RichText } from '@/components/sections/RichText'
import { ProjectGrid } from '@/components/sections/ProjectGrid'
import { CTA } from '@/components/sections/CTA'
import { FAQ } from '@/components/sections/FAQ'
import { ContactBlock } from '@/components/sections/ContactBlock'
import { Cards } from '@/components/sections/Cards'

interface PageSection {
  id: string
  type: string
  data: any
  order: number
}

interface Page {
  id: string
  slug: string
  title: string
  status: string
  seoTitle?: string | null
  seoDescription?: string | null
  sections: PageSection[]
}

interface PageRendererProps {
  slug: string
}

export function PageRenderer({ slug }: PageRendererProps) {
  const [page, setPage] = useState<Page | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchPage()
  }, [slug])

  const fetchPage = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`/api/pages/${slug}`)
      const data = await response.json()

      if (data.success) {
        setPage(data.data)

        // Set page title and meta tags
        if (data.data.seoTitle) {
          document.title = data.data.seoTitle
        } else {
          document.title = data.data.title
        }

        if (data.data.seoDescription) {
          const metaDescription = document.querySelector('meta[name="description"]')
          if (metaDescription) {
            metaDescription.setAttribute('content', data.data.seoDescription)
          }
        }
      } else {
        setError(data.error || 'Page not found')
      }
    } catch (err) {
      console.error('Error fetching page:', err)
      setError('Failed to load page')
    } finally {
      setLoading(false)
    }
  }

  const renderSection = (section: PageSection) => {
    switch (section.type) {
      case 'HERO':
        return <Hero key={section.id} data={section.data} />
      case 'RICH_TEXT':
        return <RichText key={section.id} data={section.data} />
      case 'PROJECT_GRID':
        return <ProjectGrid key={section.id} data={section.data} />
      case 'CTA':
        return <CTA key={section.id} data={section.data} />
      case 'FAQ':
        return <FAQ key={section.id} data={section.data} />
      case 'CONTACT_BLOCK':
        return <ContactBlock key={section.id} data={section.data} />
      case 'CARDS':
        return <Cards key={section.id} data={section.data} />
      default:
        console.warn(`Unknown section type: ${section.type}`)
        return null
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Spinner size="lg" />
      </div>
    )
  }

  if (error || !page) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            {error || 'Page not found'}
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg
              font-semibold hover:bg-primary/90 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {page.sections
        .sort((a, b) => a.order - b.order)
        .map((section) => renderSection(section))}
    </div>
  )
}
