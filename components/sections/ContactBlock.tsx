interface ContactBlockData {
  title?: string
  description?: string
  showForm?: boolean
  email?: string
  phone?: string
}

interface ContactBlockProps {
  data: ContactBlockData
}

export function ContactBlock({ data }: ContactBlockProps) {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {data.title && (
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
              {data.title}
            </h2>
          )}
          {data.description && (
            <p className="text-lg text-muted-foreground text-center mb-12">
              {data.description}
            </p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Get in Touch</h3>
              {data.email && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a
                    href={`mailto:${data.email}`}
                    className="text-primary hover:underline"
                  >
                    {data.email}
                  </a>
                </div>
              )}
              {data.phone && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-primary hover:underline"
                  >
                    {data.phone}
                  </a>
                </div>
              )}
            </div>

            {/* Contact Form */}
            {data.showForm && (
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Send a Message</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg
                        focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg
                        focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-background text-foreground border border-border rounded-lg
                        focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg
                      font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
