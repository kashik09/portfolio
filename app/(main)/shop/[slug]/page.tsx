import { permanentRedirect } from 'next/navigation'

export default function ShopProductRedirect({ params }: { params: { slug: string } }) {
  permanentRedirect(`/products/${params.slug}`)
}
