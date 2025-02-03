"use client"

import { useState } from "react"
import { Send, Mail, Phone, MapPin, Download } from "lucide-react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-roboto mb-12 text-center">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        <div>
          <h2 className="text-2xl font-bold font-roboto mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="text-purple-500" size={24} />
              <span>harshasai52439@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-purple-500" size={24} />
              <span>+91 8919982371</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-purple-500" size={24} />
              <span>Vijayawada, India</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-bold font-roboto mb-4">Connect with me</h3>
            <p className="text-gray-300 mb-4">
              Feel free to reach out for collaborations, project inquiries, or just to say hello! I'm always excited to
              connect with fellow designers and developers.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/Amaravarapu_Harsha_Sai_CV.pdf"
              download
              className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              <Download size={20} />
              <span>Download CV</span>
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none h-32"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

