'use client'

import { useEffect, useState } from 'react'
import { ProjectCard, ProjectCardData } from '@/components/ProjectCard'
import { Spinner } from '@/components/ui/Spinner'

interface ProjectGridData {
  title?: string
  filter?: 'ALL' | 'WEB' | 'MOBILE' | 'DESIGN'
  limit?: number
}

interface ProjectGridProps {
  data: ProjectGridData
}

export function ProjectGrid({ data }: ProjectGridProps) {
  const [projects, setProjects] = useState<ProjectCardData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [data.filter, data.limit])

  const fetchProjects = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      if (data.filter && data.filter !== 'ALL') {
        params.append('category', data.filter)
      }
      params.append('status', 'published')

      const response = await fetch(`/api/projects?${params}`)
      const result = await response.json()

      if (result.success) {
        let projectsData = result.data
        if (data.limit) {
          projectsData = projectsData.slice(0, data.limit)
        }
        setProjects(projectsData)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
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
        ) : projects.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">
            No projects found
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} variant="public" />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
