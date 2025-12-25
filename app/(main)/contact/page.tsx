'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useSession } from 'next-auth/react'

export default function ContactPage() {
  const router = useRouter()
  const { data: session, status } = useSession()
  const isAuthed = status === 'authenticated'

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceType: '',
    budget: '',
    timeline: '',
    description: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (!isAuthed && (!formData.name || !formData.email)) {
      setError('please provide your name and email')
      setLoading(false)
      return
    }

    if (!formData.description) {
      setError('please describe what you need')
      setLoading(false)
      return
    }

    const payload = {
      ...formData,
      ...(isAuthed && {
        name: session?.user?.name ?? formData.name,
        email: session?.user?.email ?? formData.email
      })
    }

    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => null)
        setError(errorData?.error || 'something went wrong. try again?')
        setLoading(false)
        return
      }

      alert("got it. i'll get back to you soon.")
      router.push('/')
    } catch (err) {
      setError('something went wrong. try again?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="py-12 max-w-2xl mx-auto">
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-foreground">get in touch</h1>
          <p className="text-muted-foreground">
            working on something interesting? need help building a product? let's talk.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive rounded-lg text-destructive text-sm">
              {error}
            </div>
          )}

          {!isAuthed ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="your name"
                required
              />

              <Input
                label="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
              />
            </div>
          ) : (
            <div className="rounded-lg border border-border bg-muted px-4 py-3 text-sm text-foreground">
              sending as{' '}
              <span className="font-medium">
                {session?.user?.name || session?.user?.email}
              </span>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">what do you need?</label>
            <select
              value={formData.serviceType}
              onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
            >
              <option value="">select one (optional)</option>
              <option value="WEB_DEVELOPMENT">web development</option>
              <option value="PRODUCT_DESIGN">product design</option>
              <option value="CONSULTATION">consultation</option>
              <option value="COLLABORATION">collaboration</option>
              <option value="OTHER">something else</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">budget (optional)</label>
              <select
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              >
                <option value="">not sure yet</option>
                <option value="SMALL">small ($500-$2k)</option>
                <option value="MEDIUM">medium ($2k-$10k)</option>
                <option value="LARGE">large ($10k+)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">timeline (optional)</label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
              >
                <option value="">not sure yet</option>
                <option value="ASAP">asap</option>
                <option value="1_2_WEEKS">1-2 weeks</option>
                <option value="1_MONTH">1 month</option>
                <option value="FLEXIBLE">flexible</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">tell me more</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={6}
              className="w-full px-4 py-2 bg-card border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
              placeholder="what are you building? what problem are you solving?"
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'sending...' : 'send message'}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            i'll get back to you within 24 hours
          </p>
        </form>
      </div>
    </div>
  )
}
