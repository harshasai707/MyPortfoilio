import Image from "next/image"
import { notFound } from "next/navigation"
import { projects } from "../../data/projects"

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id.toString() === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-roboto mb-8 text-center">{project.title}</h1>
      <div className="mb-12">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={1200}
          height={600}
          className="w-full h-[60vh] object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold font-roboto mb-4">Project Description</h2>
          <p className="text-gray-300 mb-6">{project.fullDescription}</p>
        </div>
        <div>
          <h2 className="text-2xl font-bold font-roboto mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside text-gray-300">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

