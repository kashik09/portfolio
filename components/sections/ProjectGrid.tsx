'use client'

import { useEffect, useState } from 'react'
import { PortfolioCard } from '@/components/PortfolioCard'
import { PortfolioItem } from '@/lib/portfolio/types'
import { Spinner } from '@/components/ui/Spinner'

interface ProjectGridData {
  title?: string
  filter?: 'ALL' | 'WEB' | 'MOBILE' | 'DESIGN'
  limit?: number
  includeDigitalProducts?: boolean
}

interface ProjectGridProps {
  data: ProjectGridData
}

export function ProjectGrid({ data }: ProjectGridProps) {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPortfolioItems()
  }, [data.filter, data.limit, data.includeDigitalProducts])

  const fetchPortfolioItems = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()

      if (data.filter && data.filter !== 'ALL') {
        params.append('category', data.filter)
      }

      if (data.limit) {
        params.append('limit', data.limit.toString())
      }

      if (data.includeDigitalProducts) {
        params.append('includeDigitalProducts', 'true')
      }

      const response = await fetch(`/api/portfolio?${params}`)
      const result = await response.json()

      if (result.success) {
        setItems(result.data)
      }
    } catch (error) {
      console.error('Error fetching portfolio items:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {data.title}
          </h2>
        )}

        {loading ? (
          <div className="flex justify-center py-12">
            <Spinner size="lg" />
          </div>
        ) : items.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No items found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <PortfolioCard key={item.slug} item={item} variant="public" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
