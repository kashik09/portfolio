'use client'

import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export interface FeaturedWorkStoryItem {
  id: string
  title: string
  href: string
  what: string
  why?: string
  focus?: string
  proves?: string
  thumbnailUrl?: string | null
}

interface FeaturedWorkStoryProps {
  projects: FeaturedWorkStoryItem[]
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max)
}

export function FeaturedWorkStory({ projects }: FeaturedWorkStoryProps) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [localT, setLocalT] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReduceMotion(media.matches)

    updatePreference()

    if (media.addEventListener) {
      media.addEventListener('change', updatePreference)
      return () => media.removeEventListener('change', updatePreference)
    }

    media.addListener(updatePreference)
    return () => media.removeListener(updatePreference)
  }, [])

  useEffect(() => {
    if (projects.length === 0) return

    let rafId: number | null = null

    const updateProgress = () => {
      const track = trackRef.current
      if (!track) return

      const rect = track.getBoundingClientRect()
      const scrollY = window.scrollY || window.pageYOffset
      const trackTop = rect.top + scrollY
      const trackHeight = track.offsetHeight
      const viewportHeight = window.innerHeight
      const scrollDistance = Math.max(trackHeight - viewportHeight, 1)

      const progress = clamp((scrollY - trackTop) / scrollDistance, 0, 0.999)
      const indexFloat = progress * projects.length
      const nextIndex = Math.floor(indexFloat)
      const nextLocalT = reduceMotion ? 0 : indexFloat - nextIndex

      setActiveIndex(nextIndex)
      setLocalT(nextLocalT)
    }

    const onScroll = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(() => {
        rafId = null
        updateProgress()
      })
    }

    updateProgress()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateProgress)
    }
  }, [projects.length, reduceMotion])

  const scenes = useMemo(() => projects, [projects])

  if (scenes.length === 0) return null

  const nextIndex = Math.min(activeIndex + 1, scenes.length - 1)

  return (
    <section id="work" className="py-0">
      <div className="space-y-6">
        <div className="mx-auto w-full max-w-[64rem] px-4 pb-6 pt-12 sm:px-6 md:pt-16">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            featured work
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            a scroll story of featured builds
          </h2>
          <p className="mt-3 max-w-prose text-base leading-relaxed text-muted-foreground">
            each scene is one project. scroll to melt between them.
          </p>
        </div>

        <div
          ref={trackRef}
          className="relative"
          style={{ height: `${scenes.length * 100}vh` }}
        >
          <div className="sticky top-0 h-screen w-full overflow-hidden">
            {scenes.map((project, index) => {
              const isActive = index === activeIndex
              const isNext = index === nextIndex
              const opacity = reduceMotion
                ? isActive
                  ? 1
                  : 0
                : isActive
                  ? 1 - localT
                  : isNext
                    ? localT
                    : 0
              const scale = reduceMotion
                ? 1
                : isActive
                  ? 1 - localT * 0.02
                  : isNext
                    ? 1.02 - localT * 0.02
                    : 1
              const blur = reduceMotion
                ? 0
                : isActive
                  ? localT * 2
                  : isNext
                    ? (1 - localT) * 2
                    : 0

              const detailRows = project.why
                ? [
                    { label: 'what', value: project.what },
                    { label: 'why', value: project.why },
                    { label: 'proves', value: project.proves }
                  ]
                : [
                    { label: 'what', value: project.what },
                    { label: 'focus', value: project.focus },
                    { label: 'proves', value: project.proves }
                  ]

              return (
                <div
                  key={project.id}
                  className="absolute inset-0"
                  style={{
                    opacity,
                    transform: `scale(${scale})`,
                    filter: `blur(${blur}px)`
                  }}
                >
                  <div
                    className={`absolute inset-0 bg-cover bg-center ${
                      project.thumbnailUrl
                        ? ''
                        : 'bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'
                    }`}
                    style={
                      project.thumbnailUrl
                        ? { backgroundImage: `url(${project.thumbnailUrl})` }
                        : undefined
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/70" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] opacity-30 [background-size:3px_3px]" />

                  <div className="absolute inset-x-4 bottom-16 z-10 sm:left-10 sm:right-auto sm:bottom-20">
                    <div className="w-full max-w-[28rem] space-y-4 rounded-2xl border border-white/10 bg-black/45 p-5 text-white backdrop-blur-lg">
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                          scene {index + 1}
                        </p>
                        <h3 className="text-2xl font-semibold sm:text-3xl">
                          {project.title}
                        </h3>
                      </div>

                      <div className="space-y-3">
                        {detailRows
                          .filter((row) => row.value)
                          .map((row) => (
                            <div key={row.label} className="grid gap-1">
                              <span className="text-[0.65rem] uppercase tracking-[0.25em] text-white/60">
                                {row.label}
                              </span>
                              <span className="text-sm leading-relaxed text-white/90 sm:text-base">
                                {row.value}
                              </span>
                            </div>
                          ))}
                      </div>

                      <Link
                        href={project.href}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 transition hover:text-white"
                      >
                        open project
                        <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
