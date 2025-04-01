"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Star, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const cities = [
    { name: "New York", icon: "🗽" },
    { name: "Los Angeles", icon: "🌴" },
    { name: "Chicago", icon: "🌆" },
    { name: "Miami", icon: "🏖️" },
    { name: "San Francisco", icon: "🌉" },
  ]

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "This service saved me so much time! I was able to book parking in advance and enjoy my night out without stress.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "I use this app every weekend now. The convenience of knowing I have a guaranteed spot is worth every penny.",
      rating: 5,
    },
    {
      id: 3,
      name: "Jessica Williams",
      text: "Great service! Easy to use and has saved me from driving around looking for parking multiple times.",
      rating: 4,
    },
  ]

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
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
                href="/cities"
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

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Book Your Parking in Advance for an Unforgettable Night Out
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Skip the stress of finding parking. Reserve your spot ahead of time and enjoy your evening without
                  worry.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="px-8">
                  Find Parking Now
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Parking illustration"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* City Selection */}
      <section id="cities" className="w-full py-12 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your City</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We offer convenient parking solutions in major cities across the country.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5 lg:gap-8 pt-8">
              {cities.map((city) => (
                <Button
                  key={city.name}
                  variant="outline"
                  className="h-auto flex flex-col py-6 px-4 gap-2 hover:bg-muted"
                >
                  <span className="text-4xl">{city.icon}</span>
                  <span className="font-medium">{city.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Users Say</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of satisfied customers who have simplified their parking experience.
              </p>
            </div>
            <div className="w-full max-w-3xl mx-auto pt-8">
              <Card className="border-none shadow-lg">
                <CardContent className="p-6 sm:p-8">
                  <div className="relative">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                      onClick={prevTestimonial}
                    >
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">Previous</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                      onClick={nextTestimonial}
                    >
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Next</span>
                    </Button>
                    <div className="overflow-hidden px-8">
                      <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
                      >
                        {testimonials.map((testimonial) => (
                          <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                            <div className="flex flex-col items-center gap-4">
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                                  />
                                ))}
                              </div>
                              <blockquote className="text-center text-lg italic">&ldquo;{testimonial.text}&rdquo;</blockquote>
                              <div className="font-medium">— {testimonial.name}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 mt-6">
                    {testimonials.map((_, i) => (
                      <Button
                        key={i}
                        variant="ghost"
                        size="icon"
                        className={`h-2 w-2 rounded-full p-0 ${i === activeTestimonial ? "bg-primary" : "bg-muted"}`}
                        onClick={() => setActiveTestimonial(i)}
                      >
                        <span className="sr-only">Go to slide {i + 1}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Simplify Your Parking?
              </h2>
              <p className="max-w-[700px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of users who have transformed their night out experience with our parking solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button size="lg" variant="secondary" className="px-8">
                Find Your City
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/placeholder.svg?height=32&width=32" alt="Logo" width={32} height={32} />
                <span className="text-xl font-bold">ParkEasy</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Making parking easy and stress-free for a better night out experience.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  About
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Careers
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Press
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Help</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Support
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Privacy
                </Link>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
                  Cookies
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row justify-between items-center mt-8 pt-8 border-t">
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

