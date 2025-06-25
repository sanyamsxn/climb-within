"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Calendar, Clock, ChevronRight } from "lucide-react"
import Image from "next/image"
import articlesData from "@/data/articles.json"
import Header from "@/components/header"

// import { animateHeaderAndNav } from "@/lib/gsapAni";

gsap.registerPlugin(ScrollTrigger)

interface Article {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  image: string
  category: string
  readTime: string
}

export default function ArticlesPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const articlesRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" })

      // Stagger animation for article cards
      gsap.fromTo(
        cardRefs.current,
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.3,
        },
      )

      // Scroll-triggered animations
      cardRefs.current.forEach((card) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0.7, scale: 0.95 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            },
          )
        }
      })
    }, articlesRef)

    return () => ctx.revert()
  }, [])

  const handleReadMore = (article: Article) => {
    setSelectedArticle(article)
    setIsDialogOpen(true)

    // Animate dialog entrance
    gsap.fromTo(
      ".dialog-content",
      { opacity: 0, scale: 0.8, y: 50 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out", delay: 0.1 },
    )
  }

  const handleCloseDialog = () => {
    gsap.to(".dialog-content", {
      opacity: 0,
      scale: 0.8,
      y: 50,
      duration: 0.3,
      ease: "power3.in",
      onComplete: () => {
        setIsDialogOpen(false)
        setSelectedArticle(null)
      },
    })
  }

  return (
    <>
      <Header/>
    <div ref={articlesRef} className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div ref={headerRef} className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4">
          <h1 className="text-9xl font-bold text-neutral-600 s">
            Mountain Explorer
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Discover insights, guides, and stories from the world&apos;s most spectacular mountain ranges
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.articles.map((article, index) => (
            <Card
              key={article.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
              onClick={() => handleReadMore(article)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-slate-700">
                    {article.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="space-y-3">
                <CardTitle className="text-xl font-bold line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-3">{article.excerpt}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarFallback className="text-xs">
                        {article.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span>{article.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Article Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="dialog-content max-w-4xl max-h-[80vh] overflow-y-auto">
          {selectedArticle && (
            <>
              <DialogHeader className="space-y-4">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src={selectedArticle.image || "/placeholder.svg"}
                    alt={selectedArticle.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-slate-700">
                      {selectedArticle.category}
                    </Badge>
                  </div>
                </div>

                <DialogTitle className="text-3xl font-bold">{selectedArticle.title}</DialogTitle>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback>
                          {selectedArticle.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{selectedArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedArticle.readTime}</span>
                    </div>
                  </div>
                </div>

                <DialogDescription className="text-lg text-slate-600">{selectedArticle.excerpt}</DialogDescription>
              </DialogHeader>

              <div className="mt-6 prose prose-lg max-w-none">
                {selectedArticle.content.split("\n\n").map((paragraph, index) => (
                  <p key={index} className="mb-4 text-slate-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <Button onClick={handleCloseDialog} className="w-full">
                  Close Article
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
    </>
  )
}
