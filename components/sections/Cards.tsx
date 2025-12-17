interface Card {
  title: string
  description: string
  icon?: string
  link?: string
}

interface CardsData {
  title?: string
  cards: Card[]
  columns?: 2 | 3 | 4
}

interface CardsProps {
  data: CardsData
}

export function Cards({ data }: CardsProps) {
  const columns = data.columns || 3

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {data.title && (
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            {data.title}
          </h2>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 max-w-6xl mx-auto`}>
          {data.cards.map((card, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
            >
              {card.icon && (
                <div className="text-4xl mb-4">
                  {card.icon}
                </div>
              )}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {card.description}
              </p>
              {card.link && (
                <a
                  href={card.link}
                  className="text-primary hover:underline font-medium"
                >
                  Learn more →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
