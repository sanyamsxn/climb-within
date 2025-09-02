"use client"

import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Header from "@/components/header";

/* ---------------------------- utility: classnames --------------------------- */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ")
}

/* --------------------------------- Types ---------------------------------- */
type Article = {
  id: number
  title: string
  excerpt: string
  content: string
  author: string
  date: string          // "YYYY-MM-DD" (parsed deterministically below)
  image: string
  category: string
  readTime: string
}

/* -------------------------- Deterministic date fmt ------------------------- */
// Avoids SSR/client timezone/locale mismatches.
function formatYMD(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number)
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  if (!y || !m || !d) return dateStr
  return `${months[m - 1]} ${d}, ${y}`
}

/* --------------------------------- Badge ---------------------------------- */
const Badge: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ className, children, ...props }) => (
  <span
    className={cn(
      "inline-block rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-gray-900",
      className
    )}
    {...props}
  >
    {children}
  </span>
)

/* --------------------------------- Button --------------------------------- */
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "ghost" | "solid" }
const Button: React.FC<ButtonProps> = ({ className, variant = "solid", children, ...props }) => (
  <button
    className={cn(
      "inline-flex items-center justify-center gap-1 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
      variant === "solid"
        ? "bg-blue-600 text-white hover:bg-blue-500"
        : "text-blue-200 hover:text-white hover:bg-white/10",
      className
    )}
    {...props}
  >
    {children}
  </button>
)

/* --------------------------------- Avatar --------------------------------- */
const Avatar: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  const initials = useMemo(
    () =>
      name
        .split(" ")
        .map((n) => n[0]?.toUpperCase())
        .slice(0, 2)
        .join(""),
    [name]
  )
  return (
    <div
      className={cn(
        "flex h-7 w-7 items-center justify-center rounded-full bg-gray-700 text-xs font-semibold text-gray-100 ring-1 ring-gray-600",
        className
      )}
      aria-label={name}
      title={name}
    >
      {initials || "?"}
    </div>
  )
}

/* ---------------------------------- Card ---------------------------------- */
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/80 shadow-md backdrop-blur",
        "transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl",
        className
      )}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col gap-2 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-xl font-semibold leading-snug tracking-tight text-white",
        className
      )}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray-300", className)} {...props} />
  )
)
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("mt-auto p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

/* ---------------------------------- Modal --------------------------------- */
function Modal({
  open,
  onClose,
  children,
}: {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  if (!open) return null
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      aria-modal="true"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative mx-4 w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-2xl border border-gray-700 bg-gray-900 shadow-2xl">
        {children}
      </div>
    </div>
  )
}

/* ------------------------------ Sample content ----------------------------- */
const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Trekking the Annapurna Circuit",
    excerpt:
      "A practical guide to planning, acclimatization, tea houses, and the Thorong La pass.",
    content:
      "The Annapurna Circuit remains one of the most diverse treks in Nepal. Start counter-clockwise from Besisahar, plan 12–18 days depending on side trips, and build in at least two acclimatization days in Manang. Tea houses are plentiful—carry a light sleeping bag, water purification, and cash for remote stretches. Crossing Thorong La (5,416 m) demands an early start, stable weather, and steady pacing. Off-season storms can load the pass with snow, so always check local conditions and turn back if needed.",
    author: "Kara Singh",
    date: "2025-05-02",
    image: "/photos/17.jpeg",
    category: "Nepal",
    readTime: "7 min",
  },
  {
    id: 2,
    title: "Everest Base Camp: What No One Tells You",
    excerpt:
      "It’s not just altitude—logistics, lodges, and rest days make or break the experience.",
    content:
      "EBC is achievable for fit trekkers with the right plan. The Lukla flight window can shift for days—pad your itinerary. Choose a slower itinerary that includes extra nights in Namche and Dingboche. Diamox can help but won’t replace acclimatization. Expect basic rooms but world-class views; bring a warm liner and earplugs. Hydrate well, avoid alcohol, and use a pulse oximeter to monitor trends rather than fixate on single readings.",
    author: "Ashish Saxena",
    date: "2025-03-18",
    image: "/photos/3.jpeg",
    category: "Himalaya",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "Dolomites Hut-to-Hut for Beginners",
    excerpt:
      "Alta Via 1 in a week: reservations, budgets, and what to pack for variable weather.",
    content:
      "Alta Via 1 is stunning and beginner-friendly with proper planning. Book rifugi well in advance for July–September. Pack light layers, a waterproof shell, and cash for huts. Afternoon thunderstorms are common—start early and aim to finish by mid-afternoon. GPX tracks help but the signage is excellent. If pressed for time, the Cortina to Lagazuoi section offers a perfect 3-day sampler.",
    author: "Renu Sharma",
    date: "2025-04-07",
    image: "/photos/22.jpeg",
    category: "Italy",
    readTime: "5 min",
  },
  {
    id: 4,
    title: "Kilimanjaro Routes Compared",
    excerpt:
      "Machame vs. Lemosho vs. Marangu—success rates, crowd levels, and cost breakdowns.",
    content:
      "Success correlates with route length. Lemosho (7–8 days) balances scenery and acclimatization; Machame is popular and scenic over 6–7 days; Marangu is faster but has lower success rates. Choose reputable operators with good guide-to-client ratios. Pack for freezing summit temps, bring gaiters, and practice slow, steady pacing—‘pole pole’.",
    author: "Ashish Saxena",
    date: "2025-02-22",
    image: "/photos/15.jpeg",
    category: "Tanzania",
    readTime: "8 min",
  },
  {
    id: 5,
    title: "Alpine Safety: Reading a Spring Snowpack",
    excerpt:
      "Timing, aspect, and overnight refreeze: a simple checklist for safer travel.",
    content:
      "In spring, firm morning neve often turns to mush by early afternoon. Plan low-angle routes, favor north aspects for longer firmness, and watch for rollerballs and pinwheels—early warnings the surface is losing cohesion. Helmets, crampons, and an early turnaround time matter more than speed.",
    author: "Renu Sharma",
    date: "2025-04-29",
    image: "/photos/11.jpeg",
    category: "Alps",
    readTime: "4 min",
  },
  {
    id: 6,
    title: "Salkantay vs. Inca Trail",
    excerpt:
      "Which Peru trek suits your style, timeline, and budget?",
    content:
      "The Inca Trail requires permits and offers iconic ruins each day; Salkantay is permit-free, higher, and wilder. If you value solitude and alpine passes, pick Salkantay. If you want stone steps and classic Inca sites culminating at the Sun Gate, the Inca Trail wins—book months ahead.",
    author: "Rakesh",
    date: "2025-01-30",
    image: "/photos/7.jpeg",
    category: "Peru",
    readTime: "5 min",
  },
]

/* ---------------------------------- Page ---------------------------------- */
export default function ArticlesPage() {
  const [selected, setSelected] = useState<Article | null>(null)

  return (
    <>
    <div id="headerP">
                            <Header/>
                        </div>
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      {/* Header */}
      <section className="container mx-auto px-4 pt-20 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl mt-22 font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-600 bg-clip-text text-transparent">
          Mountain Explorer
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-gray-300">
          Discover guides and stories from the world&apos;s most spectacular mountain ranges.
        </p>
      </section>

      {/* Grid of Articles */}
      <main className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article, i) => (
            <Card key={article.id}>
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={1280}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-500 will-change-transform hover:scale-110"
                  unoptimized
                  priority={i < 3}
                />
                <div className="absolute left-4 top-4">
                  <Badge>{article.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className="line-clamp-2 group-hover:text-blue-300">{article.title}</CardTitle>
                <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Avatar name={article.author} />
                    <span className="truncate">{article.author}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>{article.readTime}</span>
                    <span>·</span>
                    <span>{formatYMD(article.date)}</span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-end">
                  <Button variant="ghost" className="cursor-pointer" onClick={() => setSelected(article)}>
                    Read More
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Modal for Selected Article */}
      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <>
            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={selected.image}
                alt={selected.title}
                width={1600}
                height={900}
                className="h-full w-full object-cover"
                unoptimized
              />
              <div className="absolute left-4 top-4">
                <Badge>{selected.category}</Badge>
              </div>
            </div>

            <div className="px-6 py-5">
              <h2 className="text-2xl md:text-3xl font-bold text-white">{selected.title}</h2>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Avatar name={selected.author} className="h-8 w-8" />
                  <span className="font-medium text-gray-200">{selected.author}</span>
                </div>
                <span>•</span>
                <span>{formatYMD(selected.date)}</span>
                <span>•</span>
                <span>{selected.readTime}</span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-gray-200">{selected.excerpt}</p>

              <div className="prose prose-invert mt-6 max-w-none">
                {selected.content.split("\n\n").map((para, idx) => (
                  <p key={idx} className="mb-4 text-gray-300">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8 border-t border-gray-800 pt-5">
                <Button className="w-full" onClick={() => setSelected(null)}>
                  Close Article
                </Button>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div></>
  )
}
