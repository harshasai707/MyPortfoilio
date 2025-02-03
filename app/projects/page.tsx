import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-roboto mb-12 text-center">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105 h-full"
          >
            <Link href={`/projects/${project.id}`}>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-t-xl"
              />
            </Link>
            <div className="p-6">
              <h2 className="text-2xl font-bold font-roboto mb-2 group-hover:text-purple-500 transition-colors">
                {project.title}
              </h2>
              <p className="text-gray-400 mb-4">{project.shortDescription}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/projects/${project.id}`}
                  className="text-purple-500 hover:text-purple-400 transition-colors"
                >
                  Learn More
                </Link>
                {project.onlineLink && (
                  <a
                    href={project.onlineLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-500 hover:text-purple-400 transition-colors inline-flex items-center"
                  >
                    <span className="mr-2">View Project</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

