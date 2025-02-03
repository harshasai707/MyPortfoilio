import Image from "next/image"

const skills = [
  { name: "Core", icon: "/icons/core.svg" },
  { name: "Figma", icon: "/public/220px-Figma-logo.svg.webp" },
  { name: "Unity", icon: "/public/220px-Unity_2021.svg.webp" },
  { name: "GameMaker", icon: "/public/220px-GameMaker_Logo.webp" },
  { name: "Blender", icon: "/public/220px-Blender_logo_no_text.svg.webp" },
]

export default function About() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-bold font-roboto mb-12 text-center">About Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/placeholder.svg"
            alt="Amaravarapu Harsha Sai"
            width={400}
            height={400}
            className="rounded-full mx-auto"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold font-roboto mb-4">Who I Am</h2>
          <p className="text-gray-300 mb-6">
            I'm Amaravarapu Harsha Sai, a passionate Game Designer and UI/UX Designer with a knack for creating
            immersive digital experiences. My journey in the world of design has been driven by a desire to blend
            creativity with functionality, resulting in engaging and user-centric products.
          </p>
          <h2 className="text-3xl font-bold font-roboto mb-4">What I Do</h2>
          <p className="text-gray-300">
            I specialize in crafting intuitive game mechanics, designing captivating user interfaces, and ensuring
            seamless user experiences. My goal is to create digital worlds that not only look stunning but also provide
            meaningful and enjoyable interactions for users.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold font-roboto mb-8 text-center">Skills & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center">
              <div className="bg-gray-800 p-4 rounded-full mb-4">
                <Image
                  src={skill.icon || "/placeholder.svg"}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="w-16 h-16"
                />
              </div>
              <span className="text-lg font-semibold text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

