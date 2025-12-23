import { ArrowRight } from 'lucide-react'

interface CTAData {
  title: string
  description?: string
  buttonText: string
  buttonLink: string
  variant?: 'primary' | 'secondary' | 'gradient'
}

interface CTAProps {
  data: CTAData
}

export function CTA({ data }: CTAProps) {
  const isPrimary = data.variant === 'primary' || !data.variant
  const isGradient = data.variant === 'gradient'

  return (
    <section className={`relative py-14 md:py-20 overflow-hidden ${
      isGradient
        ? 'bg-gradient-to-br from-primary via-primary/80 to-primary/60'
        : isPrimary
        ? 'bg-primary/10 border-y-2 border-primary/20'
        : 'bg-card'
    }`}>
      {/* Decorative blur circles for gradient variant */}
      {isGradient && (
        <>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${
            isGradient ? 'text-white' : 'text-foreground'
          }`}>
            {data.title}
          </h2>
          {data.description && (
            <p className={`text-xl md:text-2xl mb-10 ${
              isGradient ? 'text-white/90' : 'text-muted-foreground'
            }`}>
              {data.description}
            </p>
          )}
          <a
            href={data.buttonLink}
            className={`inline-flex items-center gap-2 px-10 py-5 rounded-lg text-lg font-semibold transition-all hover:scale-105 active:scale-95 ${
              isGradient
                ? 'bg-white text-primary hover:bg-white/90 shadow-2xl'
                : isPrimary
                ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            {data.buttonText}
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  )
}
