import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/js-OSb2JySUQ8jmQnWlPVckNajcRsptdY.png",
    },
    {
      name: "HTML5",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/html-GSagSUHBUC7351jETiOepuiNyxsnq8.png",
    },
    {
      name: "CSS3",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/css-RZH4JjLRNNxcbmZpQPQpMbBxEveRgH.png",
    },
    {
      name: "React",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/react-Gh8sF9r3godRNbonixjP5cU2j0MruS.png",
    },
    {
      name: "Node.js",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/node-PNyvtKdT1gDj86r6CYLwMisYB4UVxm.png",
    },
  ];

  return (
    <section id="skills" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <h3 className="text-xl text-center mb-8">
        You can see here a preview of my skills
      </h3>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill) => (
          <button
            key={skill.name}
            className="p-4 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg"
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={80}
              height={80}
              className="mx-auto"
            />
            <p className="mt-2 text-center">{skill.name}</p>
          </button>
        ))}
      </div>
    </section>
  );
}
