import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BlogPostCard } from "@/components/blog-post-card"
import { Calendar, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/blog" className="inline-flex items-center text-primary hover:underline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to all articles
              </Link>
            </div>

            <Badge
              className={`mb-4 ${
                post.category === "industry-news"
                  ? "bg-blue-500"
                  : post.category === "company-updates"
                    ? "bg-green-500"
                    : post.category === "solar-tips"
                      ? "bg-yellow-500"
                      : post.category === "mep-insights"
                        ? "bg-purple-500"
                        : "bg-orange-500"
              }`}
            >
              {post.category === "industry-news"
                ? "Industry News"
                : post.category === "company-updates"
                  ? "Company Updates"
                  : post.category === "solar-tips"
                    ? "Solar Tips"
                    : post.category === "mep-insights"
                      ? "M.E.P. Insights"
                      : "Case Studies"}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{post.title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{post.author.role}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4 text-gray-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16 -mt-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-lg">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/6 order-2 md:order-1">
              <div className="sticky top-24">
                <div className="flex flex-row md:flex-col gap-4 justify-center">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400 hidden md:block">Share</span>
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <Link
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://sarxtenergy.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook className="h-4 w-4" />
                      <span className="sr-only">Share on Facebook</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <Link
                      href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://sarxtenergy.com/blog/${post.slug}`)}&text=${encodeURIComponent(post.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-4 w-4" />
                      <span className="sr-only">Share on Twitter</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild className="rounded-full">
                    <Link
                      href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sarxtenergy.com/blog/${post.slug}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:w-5/6 order-1 md:order-2">
              <div className="max-w-3xl">
                <article className="prose prose-lg dark:prose-invert max-w-none">
                  {post.content.split("\n").map((paragraph, index) => {
                    if (paragraph.startsWith("# ")) {
                      return <h1 key={index}>{paragraph.substring(2)}</h1>
                    } else if (paragraph.startsWith("## ")) {
                      return <h2 key={index}>{paragraph.substring(3)}</h2>
                    } else if (paragraph.startsWith("### ")) {
                      return <h3 key={index}>{paragraph.substring(4)}</h3>
                    } else if (paragraph.startsWith("- ")) {
                      return <li key={index}>{paragraph.substring(2)}</li>
                    } else if (paragraph.startsWith("> ")) {
                      return <blockquote key={index}>{paragraph.substring(2)}</blockquote>
                    } else if (paragraph.trim() === "") {
                      return <br key={index} />
                    } else {
                      return <p key={index}>{paragraph}</p>
                    }
                  })}
                </article>

                <div className="mt-8 pt-8 border-t flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-12">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogPostCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-primary/10 p-8 rounded-xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Want to learn more?</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Contact our team for personalized advice on solar power and M.E.P. solutions for your home or business.
            </p>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
