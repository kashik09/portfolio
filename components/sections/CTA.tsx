interface CTAData {
  title: string
  description?: string
  buttonText: string
  buttonLink: string
  variant?: 'primary' | 'secondary'
}

interface CTAProps {
  data: CTAData
}

export function CTA({ data }: CTAProps) {
  const isPrimary = data.variant === 'primary' || !data.variant

  return (
    <section className={`py-20 md:py-32 ${isPrimary ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${isPrimary ? '' : 'text-foreground'}`}>
            {data.title}
          </h2>
          {data.description && (
            <p className={`text-lg md:text-xl mb-8 ${isPrimary ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
              {data.description}
            </p>
          )}
          <a
            href={data.buttonLink}
            className={`inline-block px-8 py-4 rounded-lg font-semibold transition-colors ${
              isPrimary
                ? 'bg-primary-foreground text-primary hover:bg-primary-foreground/90'
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            }`}
          >
            {data.buttonText}
          </a>
        </div>
      </div>
    </section>
  )
}
