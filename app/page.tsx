import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ExternalLink } from "lucide-react"
import { projects } from "./data/projects"

const skills = ["Core", "UI/UX Design", "Unity", "GameMaker", "Blender"]

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-24 space-y-32">
      <section className="w-full max-w-6xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold font-roboto mb-4 animate-fade-in text-center">
          Amaravarapu Harsha Sai
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-8 animate-fade-in-delay text-center">
          Designing Worlds, Crafting Experiences
        </p>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center space-x-2 animate-fade-in-delay-2"
          >
            <span>Explore My Work</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-4xl font-bold font-roboto mb-12 text-center">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center">
            <Image
              src="/placeholder.svg"
              alt="Amaravarapu Harsha Sai"
              width={400}
              height={400}
              className="rounded-full"
            />
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm Amaravarapu Harsha Sai, a passionate Game Designer and UI/UX Designer with a knack for creating
              immersive digital experiences. My journey in the world of design has been driven by a desire to blend
              creativity with functionality, resulting in engaging and user-centric products.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in crafting intuitive game mechanics, designing captivating user interfaces, and ensuring
              seamless user experiences. My goal is to create digital worlds that not only look stunning but also
              provide meaningful and enjoyable interactions for users.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-4xl font-bold font-roboto mb-12 text-center">Skills & Tools</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill) => (
            <span key={skill} className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-4xl font-bold font-roboto mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {projects.slice(0, 2).map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden transition-transform hover:scale-105 h-full"
            >
              <Link href={`/projects/${project.id}`}>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              </Link>
              <div className="p-8">
                <h3 className="text-2xl font-bold font-roboto mb-4">{project.title}</h3>
                <p className="text-gray-400 text-lg mb-4">{project.shortDescription}</p>
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
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center space-x-2"
          >
            <span>View More Projects</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <section className="w-full max-w-6xl text-center">
        <h2 className="text-4xl font-bold font-roboto mb-8">Get in Touch</h2>
        <p className="text-gray-300 text-xl mb-8">
          Interested in working together or have any questions? Feel free to reach out!
        </p>
        <Link
          href="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-colors inline-flex items-center space-x-3 text-xl"
        >
          <span>Contact Me</span>
          <ArrowRight size={24} />
        </Link>
      </section>
    </div>
  )
}

