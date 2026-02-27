import { Post } from '@prisma/client'

export default function NewsCard({ post }: { post: Post }) {
  return (
    <article className="bg-white rounded-3xl overflow-hidden shadow-lg p-6">
      <h3 className="text-xl font-bold mb-2 uppercase">{post.title}</h3>
      <p className="text-gray-600 line-clamp-3 mb-4">{post.content}</p>
      <a href={`/berita/${post.slug}`} className="text-yellow-600 font-bold italic">
        BACA SELENGKAPNYA »
      </a>
    </article>
  )
}