import Link from 'next/link'
import { ExternalLink, Github, Download, DollarSign } from 'lucide-react'
import { PortfolioItem } from '@/lib/portfolio/types'

interface PortfolioCardProps {
  item: PortfolioItem
  variant?: 'admin' | 'public'
}

export function PortfolioCard({ item, variant = 'public' }: PortfolioCardProps) {
  const isProject = item.kind === 'PROJECT'
  const isDigitalProduct = item.kind === 'DIGITAL_PRODUCT'

  const detailUrl = isProject ? `/projects/${item.slug}` : `/digital-products/${item.slug}`

  return (
    <Link href={detailUrl}>
      <div className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer">
        {/* Image */}
        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
          {item.thumbnail ? (
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-4xl font-bold text-primary/30">{item.title.charAt(0)}</span>
            </div>
          )}

          {/* Type Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm">
              {isProject ? '🗂️ Project' : '🎁 Product'}
            </span>
          </div>

          {/* Price (for digital products) */}
          {isDigitalProduct && item.price && (
            <div className="absolute top-3 right-3">
              <span className="px-3 py-1 text-sm font-bold rounded-full bg-primary text-primary-foreground flex items-center gap-1">
                <DollarSign size={14} />
                {item.price}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            {item.featured && (
              <span className="px-2 py-1 text-xs bg-primary/20 text-primary rounded-full font-medium whitespace-nowrap ml-2">
                Featured
              </span>
            )}
          </div>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {item.description}
          </p>

          {/* Tags / Tech Stack */}
          {(item.tags || item.techStack) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {(item.techStack || item.tags || []).slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-muted text-foreground rounded-md"
                >
                  {tag}
                </span>
              ))}
              {(item.techStack || item.tags || []).length > 4 && (
                <span className="px-2 py-1 text-xs text-muted-foreground">
                  +{(item.techStack || item.tags || []).length - 4} more
                </span>
              )}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-3">
            {isProject && item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} />
                Code
              </a>
            )}
            {isProject && item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink size={16} />
                Live
              </a>
            )}
            {isDigitalProduct && (
              <div className="flex items-center gap-2 text-sm text-primary">
                <Download size={16} />
                {item.fileType || 'Download'}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
