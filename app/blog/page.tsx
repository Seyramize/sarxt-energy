"use client"

import { useState } from "react"
import { blogPosts } from "@/lib/blog-data"
import { BlogPostCard } from "@/components/blog-post-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter posts based on search query
  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Sarxt Energy Blog</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest industry news, company updates, and expert insights.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Featured Articles</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Highlighted insights from our experts and latest updates.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <BlogPostCard key={post.id} post={post} featured />
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Browse All Articles</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Filter by category or explore our complete collection.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="industry-news">Industry News</TabsTrigger>
                <TabsTrigger value="company-updates">Company Updates</TabsTrigger>
                <TabsTrigger value="solar-tips">Solar Tips</TabsTrigger>
                <TabsTrigger value="mep-insights">M.E.P. Insights</TabsTrigger>
                <TabsTrigger value="case-studies">Case Studies</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogPostCard key={post.id} post={post} />
                ))}
              </div>
            </TabsContent>

            {["industry-news", "company-updates", "solar-tips", "mep-insights", "case-studies"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts
                    .filter((post) => post.category === category)
                    .map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">No articles found</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Try adjusting your search criteria.</p>
              {searchQuery && (
                <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                  Clear Search
                </Button>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
