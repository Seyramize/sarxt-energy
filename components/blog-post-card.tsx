import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Calendar } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"

interface BlogPostCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogPostCard({ post, featured = false }: BlogPostCardProps) {
  return (
    <Card
      className={`overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow ${featured ? "h-full" : ""}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <Badge
              className={`
              ${
                post.category === "industry-news"
                  ? "bg-blue-500"
                  : post.category === "company-updates"
                    ? "bg-green-500"
                    : post.category === "solar-tips"
                      ? "bg-yellow-500"
                      : post.category === "mep-insights"
                        ? "bg-purple-500"
                        : "bg-orange-500"
              }
            `}
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
          </div>
        </div>
      </Link>
      <CardHeader className="pb-2">
        <Link href={`/blog/${post.slug}`}>
          <CardTitle className="line-clamp-2 hover:text-primary transition-colors">{post.title}</CardTitle>
        </Link>
        <div className="flex items-center mt-2 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar className="h-4 w-4 text-gray-500" />
            <CardDescription>{post.date}</CardDescription>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4 text-gray-500" />
            <CardDescription>{post.readTime}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter className="flex items-center space-x-3 pt-0">
        <Avatar className="h-8 w-8">
          <AvatarImage src={post.author.avatar || "/placeholder.svg"} alt={post.author.name} />
          <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="font-medium">{post.author.name}</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">{post.author.role}</p>
        </div>
      </CardFooter>
    </Card>
  )
}
