"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Calendar, MapPin, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function CityListingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [sortBy, setSortBy] = useState("date-asc")
  const [dateFilter, setDateFilter] = useState<string[]>([])

  // Sample city data
  const city = {
    name: "New York",
    description: "Explore events and secure parking in the Big Apple",
    image: "/placeholder.svg?height=400&width=1200",
  }

  // Sample events data
  const allEvents = [
    {
      id: 1,
      name: "Broadway Show: Hamilton",
      date: "2025-04-05",
      time: "7:00 PM",
      venue: "Richard Rodgers Theatre",
      address: "226 W 46th St, New York, NY 10036",
      image: "/placeholder.svg?height=200&width=300",
      popularity: 98,
      category: "Theater",
    },
    {
      id: 2,
      name: "NBA Game: Knicks vs. Lakers",
      date: "2025-04-10",
      time: "8:00 PM",
      venue: "Madison Square Garden",
      address: "4 Pennsylvania Plaza, New York, NY 10001",
      image: "/placeholder.svg?height=200&width=300",
      popularity: 95,
      category: "Sports",
    },
    {
      id: 3,
      name: "Concert: Taylor Swift",
      date: "2025-04-15",
      time: "8:30 PM",
      venue: "Barclays Center",
      address: "620 Atlantic Ave, Brooklyn, NY 11217",
      image: "/placeholder.svg?height=200&width=300",
      popularity: 99,
      category: "Music",
    },
    {
      id: 4,
      name: "Comedy Show: Kevin Hart",
      date: "2025-04-03",
      time: "9:00 PM",
      venue: "Radio City Music Hall",
      address: "1260 6th Ave, New York, NY 10020",
      image: "/placeholder.svg?height=200&width=300",
      popularity: 90,
      category: "Comedy",
    },
    {
      id: 5,
      name: "Museum Exhibition: Modern Art",
      date: "2025-04-20",
      time: "10:00 AM - 5:00 PM",
      venue: "MoMA",
      address: "11 W 53rd St, New York, NY 10019",
      image: "/placeholder.svg?height=200&width=300",
      popularity: 85,
      category: "Arts",
    },
    {
      id: 6,
      name: "Food Festival: Taste of NYC",
      date: "2025-04-25",
      time: "11:00 AM - 8:00 PM",
      venue: "Hudson Yards",
      address: "20 Hudson Yards, New York, NY 10001",
      image: "/placeholder.svg?height=200&width=300",
      popularity: 92,
      category: "Food",
    },
  ]

  // Date filter options
  const dateOptions = [
    { id: "today", label: "Today" },
    { id: "tomorrow", label: "Tomorrow" },
    { id: "this-week", label: "This Week" },
    { id: "this-weekend", label: "This Weekend" },
    { id: "next-week", label: "Next Week" },
  ]

  // Filter and sort events
  const filteredEvents = allEvents.filter((event) => {
    if (dateFilter.length === 0) return true

    // This is a simplified filter logic - in a real app, you'd implement proper date filtering
    if (dateFilter.includes("today") && event.date === "2025-04-01") return true
    if (dateFilter.includes("tomorrow") && event.date === "2025-04-02") return true
    if (dateFilter.includes("this-week") && ["2025-04-03", "2025-04-04", "2025-04-05"].includes(event.date)) return true
    if (dateFilter.includes("this-weekend") && ["2025-04-06", "2025-04-07"].includes(event.date)) return true
    if (
      dateFilter.includes("next-week") &&
      ["2025-04-08", "2025-04-09", "2025-04-10", "2025-04-11", "2025-04-12"].includes(event.date)
    )
      return true

    return dateFilter.length === 0
  })

  // Sort events
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    switch (sortBy) {
      case "date-asc":
        return new Date(a.date).getTime() - new Date(b.date).getTime()
      case "date-desc":
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      case "popularity":
        return b.popularity - a.popularity
      default:
        return 0
    }
  })

  // Toggle date filter
  const toggleDateFilter = (id: string) => {
    setDateFilter((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} />
              <span className="text-xl font-bold">ParkEasy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
              Home
            </Link>
            <Link href="#cities" className="text-sm font-medium hover:underline underline-offset-4">
              Cities
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Login
            </Button>
            <Button className="hidden md:flex">Sign Up</Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="container md:hidden">
            <nav className="flex flex-col gap-4 p-4">
              <Link
                href="/"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#cities"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Cities
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-sm font-medium hover:underline underline-offset-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-4 pt-2">
                <Button variant="outline" className="flex-1">
                  Login
                </Button>
                <Button className="flex-1">Sign Up</Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* City Hero Section */}
      <section className="w-full py-12 md:py-16 bg-muted/50 relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={city.image || "/placeholder.svg"}
            alt={city.name}
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Events in {city.name}</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">{city.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Events Section */}
      <section className="w-full py-8 md:py-12">
        <div className="container px-4 md:px-6">
          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              {/* Date Filter */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="w-full sm:w-auto justify-start">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter by Date
                    {dateFilter.length > 0 && (
                      <Badge variant="secondary" className="ml-2">
                        {dateFilter.length}
                      </Badge>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-4">
                  <div className="space-y-4">
                    <h4 className="font-medium">Date Range</h4>
                    <Separator />
                    <div className="space-y-2">
                      {dateOptions.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                          <Checkbox
                            id={option.id}
                            checked={dateFilter.includes(option.id)}
                            onCheckedChange={() => toggleDateFilter(option.id)}
                          />
                          <Label htmlFor={option.id}>{option.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              {/* Sort Control */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date-asc">Date (Earliest)</SelectItem>
                  <SelectItem value="date-desc">Date (Latest)</SelectItem>
                  <SelectItem value="popularity">Popularity</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {event.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {event.popularity}% Popular
                      </Badge>
                    </div>
                    <h3 className="font-bold text-lg line-clamp-1">{event.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      <span>
                        {formatDate(event.date)} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      <span className="line-clamp-1">{event.venue}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {sortedEvents.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-6 mb-4">
                <Calendar className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-medium mb-2">No events found</h3>
              <p className="text-muted-foreground max-w-md">
                Try adjusting your filters or check back later for new events in {city.name}.
              </p>
              <Button variant="outline" className="mt-4" onClick={() => setDateFilter([])}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t mt-auto">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} ParkEasy. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

