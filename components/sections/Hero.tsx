interface HeroData {
  title: string
  subtitle?: string
  ctaText?: string
  ctaLink?: string
}

interface HeroProps {
  data: HeroData
}

export function Hero({ data }: HeroProps) {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            {data.title}
          </h1>
          {data.subtitle && (
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              {data.subtitle}
            </p>
          )}
          {data.ctaText && data.ctaLink && (
            <a
              href={data.ctaLink}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg
                font-semibold hover:bg-primary/90 transition-colors"
            >
              {data.ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
