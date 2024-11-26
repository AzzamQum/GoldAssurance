"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Shield,
  TruckIcon,
  DollarSign,
  Package,
  Anchor,
  Menu,
} from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import SendMoneySection from "@/components/sendMoneyComponent";

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["services", "features", "send-money", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link className="flex items-center justify-center space-x-2" href="/">
            <img className="w-auto h-12" src="/assets/logo.png" alt="" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            {["services", "features", "send-money", "contact"].map(
              (section) => (
                <button
                  key={section}
                  className={`text-sm font-medium hover:text-primary transition-colors ${
                    activeSection === section ? "text-primary" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </nav>
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <Button
              className="md:hidden"
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-800 border-b"
          >
            {["services", "features", "send-money", "contact"].map(
              (section) => (
                <button
                  key={section}
                  className={`block w-full text-left px-4 py-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-700 ${
                    activeSection === section ? "text-primary" : ""
                  }`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              )
            )}
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-48 overflow-hidden">
          <motion.div className="absolute inset-0 z-0" style={{ opacity }}>
            <Image
              src="/assets/1.png"
              alt="Global Trade Background"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>
          <div className="container mx-auto relative z-10 px-4 md:px-6">
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
                  Streamline your cross-border transactions, secure your
                  shipments, and expand your global reach with our comprehensive
                  services.
                </p>
              </motion.div>
              <motion.div
                className="space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <SignedOut>
                  <SignInButton>
                    <Button
                      size="lg"
                      className="text-black bg-secondary hover:bg-secondary/90"
                    >
                      Get Started
                    </Button>
                  </SignInButton>
                </SignedOut>
                <SignedIn>
                  <Button
                    size="lg"
                    className="text-black bg-secondary hover:bg-secondary/90"
                    onClick={() => scrollToSection("send-money")}
                  >
                    Send Money
                  </Button>
                </SignedIn>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <motion.section
          id="services"
          className="w-full py-20 md:py-32"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "Cross-Border Payments",
                  description:
                    "Secure and efficient international transactions",
                },
                {
                  icon: Shield,
                  title: "Escrow Holdings",
                  description: "Safe and reliable fund management",
                },
                {
                  icon: TruckIcon,
                  title: "Freight Insurance",
                  description: "Comprehensive coverage for your shipments",
                },
                {
                  icon: Package,
                  title: "Import/Export of Heavy Machinery",
                  description: "Specialized logistics for industrial equipment",
                },
                {
                  icon: Anchor,
                  title: "Bulk Commodity Insurance",
                  description: "Tailored protection for large-scale goods",
                },
                {
                  icon: Globe,
                  title: "Purchasing Services",
                  description: "Expert assistance in global procurement",
                },
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
                      <p className="text-gray-500 dark:text-gray-400">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="w-full py-20 md:py-32 bg-gray-50 dark:bg-gray-800"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Comprehensive Solutions</h3>
                <ul className="space-y-2">
                  {[
                    "End-to-end global trade services",
                    "Secure financial transactions",
                    "Tailored insurance solutions",
                    "Expert logistics management",
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
                  src="/assets/1.png"
                  alt="Global Trade Solutions"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* Send Money Section */}
        <SendMoneySection />

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="w-full py-20 md:py-32 bg-primary text-primary-foreground"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Go Global?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 md:text-xl">
                  Contact us today to learn how we can streamline your
                  international trade operations.
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
                    <Button
                      type="submit"
                      variant="secondary"
                      className="w-full"
                    >
                      Get in Touch
                    </Button>
                  </motion.div>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 GlobalTrade Solutions. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="/terms"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm hover:underline underline-offset-4"
              href="/policy"
            >
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
