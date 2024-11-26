'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, TruckIcon, DollarSign, Package, Anchor, CreditCard, Menu } from 'lucide-react'

export function BlockPage() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['services', 'features', 'send-money', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link className="flex items-center justify-center space-x-2" href="/">
            <Globe className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">GlobalTrade Solutions</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            {['services', 'features', 'send-money', 'contact'].map((section) => (
              <button
                key={section}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === section ? 'text-primary' : ''
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 border-b"
          >
            {['services', 'features', 'send-money', 'contact'].map((section) => (
              <button
                key={section}
                className={`block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 ${
                  activeSection === section ? 'text-primary' : ''
                }`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-48 overflow-hidden">
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ opacity }}
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
              alt="Global Trade Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Global Trade Solutions for Your Business
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Streamline your cross-border transactions, secure your shipments, and expand your global reach with our comprehensive services.
                </p>
              </motion.div>
              <motion.div 
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button size="lg" className="bg-primary hover:bg-primary/90">Get Started</Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">Learn More</Button>
              </motion.div>
            </div>
          </div>
        </section>
        <motion.section 
          id="services" 
          className="w-full py-20 md:py-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: DollarSign, title: "Cross-Border Payments", description: "Secure and efficient international transactions" },
                { icon: Shield, title: "Escrow Holdings", description: "Safe and reliable fund management" },
                { icon: TruckIcon, title: "Freight Insurance", description: "Comprehensive coverage for your shipments" },
                { icon: Package, title: "Import/Export of Heavy Machinery", description: "Specialized logistics for industrial equipment" },
                { icon: Anchor, title: "Bulk Commodity Insurance", description: "Tailored protection for large-scale goods" },
                { icon: Globe, title: "Purchasing Services", description: "Expert assistance in global procurement" }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center text-center space-y-4 p-6">
                      <service.icon className="h-12 w-12 text-primary mb-2" />
                      <h3 className="text-xl font-bold">{service.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        <motion.section 
          id="features" 
          className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Comprehensive Solutions</h3>
                <ul className="space-y-2">
                  {[
                    "End-to-end global trade services",
                    "Secure financial transactions",
                    "Tailored insurance solutions",
                    "Expert logistics management"
                  ].map((feature, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
                  alt="Global Trade Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.section>
        <motion.section 
          id="send-money" 
          className="w-full py-20 md:py-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Send Money Internationally</h2>
            <Card className="max-w-md mx-auto">
              <CardContent className="p-6">
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="amount" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Amount</label>
                    <Input id="amount" placeholder="Enter amount" type="number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="from-currency" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">From Currency</label>
                    <Select>
                      <SelectTrigger id="from-currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                        <SelectItem value="jpy">JPY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="to-currency" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">To Currency</label>
                    <Select>
                      <SelectTrigger id="to-currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">USD</SelectItem>
                        <SelectItem value="eur">EUR</SelectItem>
                        <SelectItem value="gbp">GBP</SelectItem>
                        <SelectItem value="jpy">JPY</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="recipient" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Recipient's Name</label>
                    <Input id="recipient" placeholder="Enter recipient's name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="account" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Recipient's Account Number</label>
                    <Input id="account" placeholder="Enter account number" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="payment-method" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Payment Method</label>
                    <Select>
                      <SelectTrigger id="payment-method">
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bank">Bank Transfer</SelectItem>
                        <SelectItem value="visa">Visa Card</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="submit" className="w-full">Send Money</Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </div>
        </motion.section>
        <motion.section 
          id="contact" 
          className="w-full py-20 md:py-32 bg-primary text-primary-foreground"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Go Global?</h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Contact us today to learn how we can streamline your international trade operations.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="submit" variant="secondary" className="w-full">
                      Get in Touch
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 GlobalTrade Solutions. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}