"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Code,
  Globe,
  ShoppingCart,
  Smartphone,
  Database,
  Zap,
  Award,
  Search,
  BarChart3,
  MessageSquare,
  Shield,
  Check,
  Plus,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [currentTeamMember, setCurrentTeamMember] = useState(0)
  const [isAnnual, setIsAnnual] = useState(true)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [floatingOffset, setFloatingOffset] = useState(0)

  const teamMembers = [
    {
      name: "John Doe",
      role: "Product Head",
      image: "/placeholder.svg?height=400&width=300&text=John+Doe",
      bio: "Leading product strategy and innovation",
    },
    {
      name: "Armenia Sean",
      role: "Social Media Head",
      image: "/placeholder.svg?height=400&width=300&text=Armenia+Sean",
      bio: "Driving digital marketing excellence",
    },
    {
      name: "Krishna Murthy",
      role: "Technical Head",
      image: "/placeholder.svg?height=400&width=300&text=Krishna+Murthy",
      bio: "Architecting scalable solutions",
    },
    {
      name: "Sarah Johnson",
      role: "Design Head",
      image: "/placeholder.svg?height=400&width=300&text=Sarah+Johnson",
      bio: "Creating beautiful user experiences",
    },
  ]

  const techStack = [
    { name: "Figma", icon: "🎨" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind", icon: "💨" },
    { name: "Next.js", icon: "⚡" },
    { name: "Python", icon: "🐍" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "TypeScript", icon: "📘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "AWS", icon: "☁️" },
    { name: "Vercel", icon: "▲" },
    { name: "Docker", icon: "🐳" },
    { name: "GraphQL", icon: "📊" },
    { name: "REST API", icon: "🔗" },
  ]

  const portfolioProjects = [
    {
      id: 1,
      title: "End-to-end, all in one",
      subtitle: "EVERYTHING UNDER ONE ROOF",
      description:
        "No more bouncing between tools or chasing teammates. We bring strategy, design, development, and delivery together in one seamless platform—so you can focus on building, not managing.",
      image: "/placeholder.svg?height=400&width=600&text=Project+1",
      color: "#ADFF2F",
    },
    {
      id: 2,
      title: "Built for real people",
      subtitle: "NO TECH SKILLS? NO PROBLEM",
      description:
        "Our platform is built for creators, not coders. Whether you're a founder with an idea or a marketer with a plan, our AI makes the process simple, visual, and intuitive.",
      image: "/placeholder.svg?height=400&width=600&text=Project+2",
      color: "#ADFF2F",
    },
    {
      id: 3,
      title: "Faster launches, fewer headaches",
      subtitle: "FASTER LAUNCHES, FEWER HEADACHES",
      description:
        "Skip the complexity and get straight to results. Our streamlined process eliminates bottlenecks and reduces time-to-market, so you can launch faster and iterate smarter.",
      image: "/placeholder.svg?height=400&width=600&text=Project+3",
      color: "#ADFF2F",
    },
  ]

  const faqs = [
    {
      question: "What is DEEE Solutions?",
      answer:
        "DEEE Solutions is a digital agency that specializes in building modern websites, custom software, and e-commerce solutions for businesses of all sizes.",
    },
    {
      question: "Who is DEEE Solutions for?",
      answer:
        "We work with startups, small businesses, and enterprises looking to establish or enhance their digital presence with cutting-edge technology solutions.",
    },
    {
      question: "Do you replace existing systems?",
      answer:
        "We can integrate with your existing systems or build new solutions from scratch, depending on your specific needs and requirements.",
    },
    {
      question: "What technologies do you support?",
      answer:
        "We work with modern web technologies including React, Next.js, Node.js, Python, and various databases and cloud platforms.",
    },
    {
      question: "Who owns the code we create?",
      answer:
        "You own all the code and intellectual property we create for your project. We provide full documentation and source code upon completion.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We follow industry best practices for security, including encryption, secure hosting, and regular security audits to protect your data.",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [teamMembers.length])

  useEffect(() => {
    const interval = setInterval(() => {
      setFloatingOffset((prev) => (prev + 1) % 360)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % teamMembers.length)
  }

  const prevTeamMember = () => {
    setCurrentTeamMember((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Reduced Torch Light Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-30 transition-all duration-200 ease-out md:block hidden"
        style={{
          background: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, transparent 60%, rgba(0, 0, 0, 0.2) 100%)`,
        }}
      />

      {/* Enhanced Torch Light Inner Glow */}
      <div
        className="fixed pointer-events-none z-20 transition-all duration-200 ease-out md:block hidden"
        style={{
          width: "800px",
          height: "800px",
          left: mousePosition.x - 400,
          top: mousePosition.y - 400,
          background: `radial-gradient(circle, rgba(173, 255, 47, 0.06) 0%, rgba(173, 255, 47, 0.03) 40%, transparent 70%)`,
          borderRadius: "50%",
        }}
      />

      {/* Enhanced Hero Sunlight Rays Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main sunlight rays emanating from top-right */}
        <div className="absolute -top-20 -right-20 w-full h-full">
          {/* Ray 1 */}
          <div
            className="absolute opacity-8"
            style={{
              width: "4px",
              height: "80vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.8) 15%, 
          rgba(173, 255, 47, 0.4) 40%, 
          rgba(173, 255, 47, 0.2) 60%, 
          rgba(173, 255, 47, 0.1) 80%, 
          transparent 100%)`,
              transform: "rotate(25deg)",
              top: "0%",
              right: "15%",
              transformOrigin: "top center",
            }}
          />

          {/* Ray 2 */}
          <div
            className="absolute opacity-6"
            style={{
              width: "6px",
              height: "85vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.7) 10%, 
          rgba(173, 255, 47, 0.5) 30%, 
          rgba(173, 255, 47, 0.3) 50%, 
          rgba(173, 255, 47, 0.15) 70%, 
          rgba(173, 255, 47, 0.05) 85%, 
          transparent 100%)`,
              transform: "rotate(35deg)",
              top: "0%",
              right: "20%",
              transformOrigin: "top center",
            }}
          />

          {/* Ray 3 */}
          <div
            className="absolute opacity-10"
            style={{
              width: "3px",
              height: "75vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.9) 20%, 
          rgba(173, 255, 47, 0.6) 45%, 
          rgba(173, 255, 47, 0.3) 65%, 
          rgba(173, 255, 47, 0.1) 85%, 
          transparent 100%)`,
              transform: "rotate(15deg)",
              top: "0%",
              right: "10%",
              transformOrigin: "top center",
            }}
          />

          {/* Ray 4 */}
          <div
            className="absolute opacity-7"
            style={{
              width: "5px",
              height: "90vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.8) 12%, 
          rgba(173, 255, 47, 0.5) 35%, 
          rgba(173, 255, 47, 0.25) 55%, 
          rgba(173, 255, 47, 0.12) 75%, 
          rgba(173, 255, 47, 0.04) 90%, 
          transparent 100%)`,
              transform: "rotate(45deg)",
              top: "0%",
              right: "25%",
              transformOrigin: "top center",
            }}
          />

          {/* Ray 5 */}
          <div
            className="absolute opacity-9"
            style={{
              width: "2px",
              height: "70vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.85) 25%, 
          rgba(173, 255, 47, 0.5) 50%, 
          rgba(173, 255, 47, 0.2) 75%, 
          transparent 100%)`,
              transform: "rotate(5deg)",
              top: "0%",
              right: "5%",
              transformOrigin: "top center",
            }}
          />

          {/* Ray 6 */}
          <div
            className="absolute opacity-5"
            style={{
              width: "7px",
              height: "95vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.6) 8%, 
          rgba(173, 255, 47, 0.4) 25%, 
          rgba(173, 255, 47, 0.2) 45%, 
          rgba(173, 255, 47, 0.1) 65%, 
          rgba(173, 255, 47, 0.05) 80%, 
          rgba(173, 255, 47, 0.02) 92%, 
          transparent 100%)`,
              transform: "rotate(55deg)",
              top: "0%",
              right: "30%",
              transformOrigin: "top center",
            }}
          />

          {/* Ray 7 */}
          <div
            className="absolute opacity-8"
            style={{
              width: "4px",
              height: "78vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.75) 18%, 
          rgba(173, 255, 47, 0.45) 42%, 
          rgba(173, 255, 47, 0.22) 68%, 
          rgba(173, 255, 47, 0.08) 88%, 
          transparent 100%)`,
              transform: "rotate(-5deg)",
              top: "0%",
              right: "0%",
              transformOrigin: "top center",
            }}
          />

          {/* Ray 8 */}
          <div
            className="absolute opacity-4"
            style={{
              width: "3px",
              height: "100vh",
              background: `linear-gradient(to bottom, 
          #ADFF2F 0%, 
          rgba(173, 255, 47, 0.5) 5%, 
          rgba(173, 255, 47, 0.3) 20%, 
          rgba(173, 255, 47, 0.18) 40%, 
          rgba(173, 255, 47, 0.1) 60%, 
          rgba(173, 255, 47, 0.05) 75%, 
          rgba(173, 255, 47, 0.02) 88%, 
          rgba(173, 255, 47, 0.01) 95%, 
          transparent 100%)`,
              transform: "rotate(65deg)",
              top: "0%",
              right: "35%",
              transformOrigin: "top center",
            }}
          />
        </div>

        {/* Concentrated light source with softer intensity */}
        <div
          className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 opacity-8"
          style={{
            background: `radial-gradient(ellipse at center, 
        rgba(173, 255, 47, 0.15) 0%, 
        rgba(173, 255, 47, 0.08) 25%, 
        rgba(173, 255, 47, 0.04) 50%, 
        rgba(173, 255, 47, 0.02) 70%, 
        transparent 85%)`,
            transform: "rotate(45deg)",
          }}
        />

        {/* Soft ambient glow overlay */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            background: `conic-gradient(from 225deg at 85% 15%, 
        transparent 0deg, 
        rgba(173, 255, 47, 0.02) 30deg, 
        rgba(173, 255, 47, 0.04) 60deg, 
        rgba(173, 255, 47, 0.02) 90deg, 
        transparent 120deg)`,
          }}
        />
      </div>

      {/* Fixed Compact Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-black/20 backdrop-blur-md border border-gray-600/30 rounded-full">
        <div className="flex items-center justify-between px-8 py-3">
          <div className="flex items-center">
            <span className="text-sm font-medium text-white">
              DEEE<span style={{ color: "#ADFF2F" }}>solutions</span>
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white p-1 ml-4"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-4 ml-8">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors text-xs"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Home
            </a>
            <a
              href="#services"
              className="text-gray-400 hover:text-white transition-colors text-xs"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-white transition-colors text-xs"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Portfolio
            </a>
            <a
              href="#pricing"
              className="text-gray-400 hover:text-white transition-colors text-xs"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Pricing
            </a>
            <a
              href="#team"
              className="text-gray-400 hover:text-white transition-colors text-xs"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Team
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors text-xs"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-600/30 mt-2 absolute top-full left-0 right-0 bg-black/25 backdrop-blur-md rounded-b-2xl">
            <div className="flex flex-col px-6 py-4 space-y-3">
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Portfolio
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Pricing
              </a>
              <a
                href="#team"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  document.getElementById("team")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Team
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition-colors text-sm py-2"
                onClick={(e) => {
                  e.preventDefault()
                  setMobileMenuOpen(false)
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative z-10"
      >
        <div
          className="text-center max-w-4xl mx-auto"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        >
          <Badge variant="secondary" className="mb-8 bg-gray-800 text-gray-300 border-gray-700 text-xs font-normal">
            DIGITAL SOLUTIONS
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white mb-8 leading-tight tracking-tight">
            Everything you need
            <br />
            to go from <span style={{ color: "#ADFF2F" }}>idea to launch</span>
          </h1>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            We build digital products that are beautiful, robust, and ahead of their time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-black px-8 py-3 text-sm font-medium rounded-full"
              style={{ backgroundColor: "#ADFF2F" }}
            >
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 text-sm font-medium rounded-full bg-transparent"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div
              className="space-y-4"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              <div className="flex items-center space-x-3">
                <Zap className="h-5 w-5" style={{ color: "#ADFF2F" }} />
                <h3 className="text-xl font-light text-white">One prompt, full product</h3>
              </div>
              <p className="text-gray-400 font-light">Turn ideas into designs, specs, and content.</p>
            </div>

            <div
              className="space-y-4"
              style={{
                transform: `translateY(${scrollY * 0.03}px)`,
              }}
            >
              <div className="flex items-center space-x-3">
                <Database className="h-5 w-5" style={{ color: "#ADFF2F" }} />
                <h3 className="text-xl font-light text-white">Auto tech packs and specs</h3>
              </div>
              <p className="text-gray-400 font-light">Export ready-to-use files with one click.</p>
            </div>
          </div>

          {/* Main Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Search Card */}
            <Card
              className="bg-gray-800/50 border-gray-700 p-8 hover:bg-gray-800/70 transition-all duration-300"
              style={{
                transform: `translateY(${scrollY * 0.02}px)`,
              }}
            >
              <CardContent className="p-0">
                <div className="mb-6">
                  <h3 className="text-2xl font-light text-white mb-2">
                    Search with <span style={{ color: "#ADFF2F" }}>✨</span>
                  </h3>
                  <h4 className="text-2xl font-light mb-6" style={{ color: "#ADFF2F" }}>
                    Seamless Power
                  </h4>
                </div>

                <div className="relative">
                  <div
                    className="flex items-center bg-black border rounded-full px-6 py-4"
                    style={{ borderColor: "#ADFF2F" + "50" }}
                  >
                    <input
                      type="text"
                      placeholder="Generate product..."
                      className="bg-transparent text-gray-400 flex-1 outline-none text-sm"
                    />
                    <Search className="h-4 w-4" style={{ color: "#ADFF2F" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Safety Card */}
            <Card
              className="bg-gray-800/50 border-gray-700 p-8 hover:bg-gray-800/70 transition-all duration-300 relative overflow-hidden"
              style={{
                transform: `translateY(${scrollY * -0.02}px)`,
              }}
            >
              <CardContent className="p-0">
                <div className="absolute top-4 right-4">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#ADFF2F" + "20" }}
                  >
                    <Shield className="h-8 w-8" style={{ color: "#ADFF2F" }} />
                  </div>
                  <div
                    className="absolute -top-2 -right-2 w-4 h-4 rounded-full"
                    style={{ backgroundColor: "#ADFF2F" }}
                  ></div>
                  <div
                    className="absolute top-8 -right-4 w-3 h-3 rounded-full"
                    style={{ backgroundColor: "#ADFF2F" + "CC" }}
                  ></div>
                  <div
                    className="absolute -top-4 right-8 w-2 h-2 rounded-full"
                    style={{ backgroundColor: "#ADFF2F" + "AA" }}
                  ></div>
                </div>

                <h3 className="text-xl font-light text-white mb-2">Your data is safe with us</h3>
                <p className="text-gray-400 text-sm font-light mb-4">Any assets used in projects will live here.</p>
                <p className="text-gray-400 text-sm font-light">Start creating by uploading your files.</p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className="space-y-4"
              style={{
                transform: `translateY(${scrollY * 0.01}px)`,
              }}
            >
              <div className="flex items-center space-x-3">
                <BarChart3 className="h-5 w-5" style={{ color: "#ADFF2F" }} />
                <h3 className="text-xl font-light text-white">Compare reports year over year</h3>
              </div>
              <p className="text-gray-400 font-light">Make data-driven decisions.</p>
            </div>

            <div
              className="space-y-4"
              style={{
                transform: `translateY(${scrollY * -0.01}px)`,
              }}
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="h-5 w-5" style={{ color: "#ADFF2F" }} />
                <h3 className="text-xl font-light text-white">Track and review responses</h3>
              </div>
              <p className="text-gray-400 font-light">Turn messy feedback into clear, actionable insight.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700 text-xs font-normal">
              SERVICES
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Our <span style={{ color: "#ADFF2F" }}>Expertise</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: "Website Development",
                desc: "Modern, responsive websites built with cutting-edge technologies.",
              },
              { icon: Code, title: "Custom Software", desc: "Tailored software solutions for your business needs." },
              {
                icon: ShoppingCart,
                title: "E-commerce Solutions",
                desc: "Complete online store development and management.",
              },
              { icon: Smartphone, title: "Mobile Apps", desc: "Native and cross-platform mobile applications." },
              { icon: Database, title: "Database Solutions", desc: "Robust database design and management systems." },
              { icon: Zap, title: "API Development", desc: "RESTful and GraphQL APIs for seamless integration." },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-800/30 border-gray-700 hover:bg-gray-800/50 transition-all duration-300 group"
                style={{
                  transform: `translateY(${scrollY * (0.01 * (index % 2 === 0 ? 1 : -1))}px)`,
                }}
              >
                <CardContent className="p-6">
                  <service.icon
                    className="h-6 w-6 mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: "#ADFF2F" }}
                  />
                  <h3 className="text-lg font-light text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm font-light">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Carousel with Icons */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700 text-xs font-normal">
              TECHNOLOGIES
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-light text-white mb-4">
              Built with <span style={{ color: "#ADFF2F" }}>Modern Stack</span>
            </h2>
          </div>

          <div className="relative">
            <div className="flex animate-scroll space-x-6 py-4">
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gray-800/30 border border-gray-700 rounded-full px-6 py-3 hover:bg-gray-800/50 transition-colors flex items-center space-x-3"
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-gray-300 whitespace-nowrap text-sm font-light">{tech.name}</span>
                </div>
              ))}
            </div>
            <div className="flex animate-scroll-reverse space-x-6 py-4">
              {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 bg-gray-800/30 border border-gray-700 rounded-full px-6 py-3 hover:bg-gray-800/50 transition-colors flex items-center space-x-3"
                >
                  <span className="text-xl">{tech.icon}</span>
                  <span className="text-gray-400 whitespace-nowrap text-xs font-light">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery with Creative Animations */}
      <section id="portfolio" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 py-16">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700 text-xs font-normal">
              PORTFOLIO
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Our <span style={{ color: "#ADFF2F" }}>Work</span>
            </h2>
          </div>

          <div className="relative">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className="sticky top-20 h-screen flex items-center group"
                style={{
                  zIndex: portfolioProjects.length - index,
                }}
              >
                <Card
                  className="bg-gray-900/95 backdrop-blur-sm border-gray-700 overflow-hidden w-full h-[85vh] flex items-center relative group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  style={{
                    transform: `scale(${1 - index * 0.05}) translateY(${index * 20 + Math.sin(((floatingOffset + index * 60) * Math.PI) / 180) * 5}px)`,
                    boxShadow: `0 0 0 1px rgba(173, 255, 47, 0.1)`,
                  }}
                >
                  {/* Animated border glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{
                      background: `linear-gradient(45deg, transparent, rgba(173, 255, 47, 0.1), transparent)`,
                      backgroundSize: "200% 200%",
                      animation: "gradient-shift 3s ease infinite",
                    }}
                  />

                  {/* Floating orbs animation */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: "#ADFF2F",
                          left: `${10 + i * 12}%`,
                          top: `${20 + (i % 3) * 25}%`,
                          opacity: 0.6,
                          transform: `translateY(${Math.sin(((floatingOffset + i * 45) * Math.PI) / 180) * 10}px)`,
                          transition: "transform 0.1s ease-out",
                        }}
                      />
                    ))}
                  </div>

                  <CardContent className="p-0 w-full h-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 h-full">
                      <div className="flex flex-col justify-center p-8 lg:p-16 relative overflow-hidden">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-1000">
                          <div
                            className="absolute inset-0"
                            style={{
                              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(173, 255, 47, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(173, 255, 47, 0.1) 0%, transparent 50%)`,
                              transform: `rotate(${floatingOffset * 0.5}deg)`,
                              transition: "transform 0.1s ease-out",
                            }}
                          />
                        </div>

                        <Badge
                          variant="secondary"
                          className="mb-6 bg-gray-800 text-gray-300 border-gray-700 text-xs font-normal w-fit transform group-hover:scale-110 group-hover:bg-gray-700 transition-all duration-500"
                        >
                          {project.subtitle}
                        </Badge>
                        <h3 className="text-3xl lg:text-4xl font-light text-white mb-6 transform group-hover:translate-x-2 transition-transform duration-500">
                          {project.title}
                        </h3>
                        <p className="text-gray-400 font-light text-lg leading-relaxed mb-8 transform group-hover:translate-x-1 transition-all duration-700 delay-100">
                          {project.description}
                        </p>
                        <Button
                          className="text-black px-8 py-3 text-sm font-medium rounded-full w-fit transform group-hover:scale-105 group-hover:shadow-lg transition-all duration-500 delay-200 relative overflow-hidden"
                          style={{
                            backgroundColor: "#ADFF2F",
                            boxShadow: "0 0 0 0 rgba(173, 255, 47, 0.4)",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 20px 5px rgba(173, 255, 47, 0.3)"
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.boxShadow = "0 0 0 0 rgba(173, 255, 47, 0.4)"
                          }}
                        >
                          {/* Button shine effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                          <span className="relative z-10">View Project</span>
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        </Button>
                      </div>
                      <div className="relative overflow-hidden">
                        {/* Animated overlay */}
                        <div
                          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                          style={{ backgroundColor: project.color }}
                        />

                        {/* Image with zoom and rotation effect */}
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-out"
                        />

                        {/* Multiple sliding overlay effects */}
                        <div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1500 ease-out"
                          style={{
                            background: `linear-gradient(90deg, transparent, rgba(173, 255, 47, 0.1), transparent)`,
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-2000 ease-out delay-200"
                          style={{
                            background: `linear-gradient(180deg, transparent, rgba(173, 255, 47, 0.05), transparent)`,
                          }}
                        />

                        {/* Animated corner accents */}
                        <div
                          className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform group-hover:scale-110"
                          style={{ borderColor: "#ADFF2F" }}
                        />
                        <div
                          className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300 transform group-hover:scale-110"
                          style={{ borderColor: "#ADFF2F" }}
                        />

                        {/* Pulsing dots */}
                        <div className="absolute top-8 left-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-500">
                          <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: "#ADFF2F" }} />
                        </div>
                        <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-700">
                          <div
                            className="w-2 h-2 rounded-full animate-pulse"
                            style={{ backgroundColor: "#ADFF2F", animationDelay: "0.5s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Add spacing after portfolio */}
          <div className="h-screen"></div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700 text-xs font-normal">
              PRICING
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-8">
              Affordable plans to help you
              <br />
              launch faster and smarter
            </h2>

            {/* Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className={`text-sm ${!isAnnual ? "text-white" : "text-gray-400"}`}>Monthly</span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-12 h-6 rounded-full transition-colors duration-200"
                style={{ backgroundColor: "#ADFF2F" }}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-black rounded-full transition-transform duration-200 ${
                    isAnnual ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
              <span className={`text-sm ${isAnnual ? "text-white" : "text-gray-400"}`}>Annually</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="bg-gray-800/50 border-gray-700 p-8">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-5 w-5" style={{ color: "#ADFF2F" }} />
                  <h3 className="text-lg font-light text-white">Starter</h3>
                </div>
                <div className="text-4xl font-light text-white mb-2">
                  ${isAnnual ? "37" : "47"}
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm font-light mb-6">
                  Perfect for small businesses starting with digital solutions.
                </p>
                <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full mb-6">Buy now</Button>
                <div className="space-y-3">
                  <p className="text-white font-light text-sm mb-3">{"What's included:"}</p>
                  {[
                    "Basic website development",
                    "Standard support",
                    "Basic analytics",
                    "Email support",
                    "1 revision round",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4" style={{ color: "#ADFF2F" }} />
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="bg-gray-800/50 border-gray-700 p-8 relative">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="h-5 w-5" style={{ color: "#ADFF2F" }} />
                  <h3 className="text-lg font-light text-white">Professional</h3>
                </div>
                <div className="text-4xl font-light text-white mb-2">
                  ${isAnnual ? "75" : "95"}
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-400 text-sm font-light mb-6">
                  Perfect for medium businesses with advanced needs.
                </p>
                <Button
                  className="w-full text-black hover:opacity-90 rounded-full mb-6"
                  style={{ backgroundColor: "#ADFF2F" }}
                >
                  Buy now
                </Button>
                <div className="space-y-3">
                  <p className="text-white font-light text-sm mb-3">{"What's included:"}</p>
                  {[
                    "Advanced website development",
                    "Custom software solutions",
                    "Enhanced analytics & insights",
                    "Priority customer support",
                    "3 revision rounds",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4" style={{ color: "#ADFF2F" }} />
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="bg-gray-800/50 border-gray-700 p-8">
              <CardContent className="p-0">
                <div className="flex items-center space-x-2 mb-4">
                  <Award className="h-5 w-5" style={{ color: "#ADFF2F" }} />
                  <h3 className="text-lg font-light text-white">Enterprise</h3>
                </div>
                <div className="text-4xl font-light text-white mb-2">Custom</div>
                <p className="text-gray-400 text-sm font-light mb-6">
                  Perfect for large businesses with complex requirements.
                </p>
                <Button className="w-full bg-white text-black hover:bg-gray-200 rounded-full mb-6">Contact us</Button>
                <div className="space-y-3">
                  <p className="text-white font-light text-sm mb-3">{"What's included:"}</p>
                  {[
                    "Fully customizable solutions",
                    "Dedicated development team",
                    "Enterprise-grade security",
                    "24/7 VIP support",
                    "Unlimited revisions",
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="h-4 w-4" style={{ color: "#ADFF2F" }} />
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section with Smooth Scrolling Animation */}
      <section id="team" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-gray-800 text-gray-300 border-gray-700 text-xs font-normal">
              TEAM
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Meet the team that
              <br />
              builds digital solutions like {"it's"} magic
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="flex justify-center items-center space-x-8">
              {/* Previous members (smaller) */}
              <div className="hidden md:block opacity-50 scale-75 transition-all duration-1000 ease-in-out transform hover:scale-80">
                <Card className="bg-gray-800/50 border-gray-700 w-64 h-96 overflow-hidden">
                  <div className="relative h-80">
                    <img
                      src={
                        teamMembers[(currentTeamMember - 1 + teamMembers.length) % teamMembers.length].image ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg"
                      }
                      alt={teamMembers[(currentTeamMember - 1 + teamMembers.length) % teamMembers.length].name}
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-white font-light transition-all duration-1000">
                      {teamMembers[(currentTeamMember - 1 + teamMembers.length) % teamMembers.length].name}
                    </h3>
                    <p className="text-gray-400 text-sm transition-all duration-1000">
                      {teamMembers[(currentTeamMember - 1 + teamMembers.length) % teamMembers.length].role}
                    </p>
                  </div>
                </Card>
              </div>

              {/* Current member (larger) */}
              <div className="relative transition-all duration-1000 ease-in-out transform">
                <Card
                  className="border-gray-700 w-80 h-[28rem] overflow-hidden transform transition-all duration-1000 ease-in-out hover:scale-110"
                  style={{
                    backgroundColor: "#ADFF2F" + "10",
                    borderColor: "#ADFF2F" + "30",
                    transform: "scale(1.05)",
                    boxShadow: `0 0 30px ${"#ADFF2F"}20`,
                  }}
                >
                  <div className="relative h-80">
                    <img
                      src={teamMembers[currentTeamMember].image || "/placeholder.svg"}
                      alt={teamMembers[currentTeamMember].name}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                      key={currentTeamMember}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-white font-light text-xl mb-1 transition-all duration-1000">
                      {teamMembers[currentTeamMember].name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-2 transition-all duration-1000">
                      {teamMembers[currentTeamMember].role}
                    </p>
                    <p className="text-gray-400 text-xs transition-all duration-1000">
                      {teamMembers[currentTeamMember].bio}
                    </p>
                  </div>
                </Card>

                {/* Navigation buttons */}
                <button
                  onClick={prevTeamMember}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="h-5 w-5 text-white" />
                </button>
                <button
                  onClick={nextTeamMember}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Next member (smaller) */}
              <div className="hidden md:block opacity-50 scale-75 transition-all duration-1000 ease-in-out transform hover:scale-80">
                <Card className="bg-gray-800/50 border-gray-700 w-64 h-96 overflow-hidden">
                  <div className="relative h-80">
                    <img
                      src={teamMembers[(currentTeamMember + 1) % teamMembers.length].image || "/placeholder.svg"}
                      alt={teamMembers[(currentTeamMember + 1) % teamMembers.length].name}
                      className="w-full h-full object-cover transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-white font-light transition-all duration-1000">
                      {teamMembers[(currentTeamMember + 1) % teamMembers.length].name}
                    </h3>
                    <p className="text-gray-400 text-sm transition-all duration-1000">
                      {teamMembers[(currentTeamMember + 1) % teamMembers.length].role}
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamMember(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-500 hover:scale-125 ${
                    index === currentTeamMember ? "scale-125" : ""
                  }`}
                  style={{
                    backgroundColor: index === currentTeamMember ? "#ADFF2F" : "#4B5563",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-light text-white mb-4">
              Frequently asked questions about <span style={{ color: "#ADFF2F" }}>DEEE Solutions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-gray-800/30 border-gray-700">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-white font-light">{faq.question}</span>
                    <Plus
                      className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                        openFaq === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-400 font-light">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-lg font-medium text-white">
            DEEE<span style={{ color: "#ADFF2F" }}>solutions</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-light text-white mb-6 mt-4">
            Try DEEE Solutions free and create your
            <br />
            next product in minutes.
          </h2>
          <Button
            size="lg"
            className="text-black px-8 py-3 text-sm font-medium rounded-full"
            style={{ backgroundColor: "#ADFF2F" }}
          >
            hello@deeesolutions.com
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link href="#home" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Home
            </Link>
            <Link href="#services" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Portfolio
            </Link>
            <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Pricing
            </Link>
            <Link href="#team" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Team
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-light">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
