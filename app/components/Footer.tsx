import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">© 2023 Amaravarapu Harsha Sai. All rights reserved.</p>
        <div className="flex space-x-6">
          <Link href="https://github.com" className="text-gray-400 hover:text-purple-500 transition-colors">
            <Github size={24} />
          </Link>
          <Link href="https://linkedin.com" className="text-gray-400 hover:text-purple-500 transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="https://twitter.com" className="text-gray-400 hover:text-purple-500 transition-colors">
            <Twitter size={24} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

