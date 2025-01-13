import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      src: "/src/public/assets/icons/js.png",
    },
    {
      name: "HTML5",
      src: "/src/public/assets/icons/html.png",
    },
    {
      name: "CSS3",
      src: "/src/public/assets/icons/css.png",
    },
    {
      name: "React",
      src: "/src/public/assets/icons/react.png",
    },
    {
      name: "Node.js",
      src: "/src/public/assets/icons/node.png",
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
