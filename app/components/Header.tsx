"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold font-clash-display text-purple-500">
          HS
        </Link>
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-lg hover:text-purple-500 transition-colors ${
                pathname === item.path ? "text-purple-500" : "text-gray-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-gray-300 hover:text-purple-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`block px-6 py-2 text-lg hover:bg-gray-700 transition-colors ${
                pathname === item.path ? "text-purple-500" : "text-gray-300"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

