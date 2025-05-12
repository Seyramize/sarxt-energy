import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BlogPostCard } from "@/components/blog-post-card"
import { blogPosts } from "@/lib/blog-data"

export function HomeBlogSection() {
  // Get the 3 most recent featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Latest Insights</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed with the latest industry news, expert tips, and company updates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
