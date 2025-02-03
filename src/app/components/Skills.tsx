import CSSIcon from "@/public/assets/icons/css.png";
import HTMLIcon from "@/public/assets/icons/html.png";
import jQueryIcon from "@/public/assets/icons/jquery.png";
import JavaScriptIcon from "@/public/assets/icons/js.png";
import MongoDBIcon from "@/public/assets/icons/mongoDB.png";
import NextIcon from "@/public/assets/icons/nextJS.png";
import NodeIcon from "@/public/assets/icons/node.png";
import PostgreSQLIcon from "@/public/assets/icons/postgreSQL.png";
import ReactIcon from "@/public/assets/icons/react.png";
import SassIcon from "@/public/assets/icons/sass.png";
import SocketIOIcon from "@/public/assets/icons/socketIO.png";
import TailwindIcon from "@/public/assets/icons/tailwind.png";
import Image from "next/image";

export default function Skills() {
  const skills = [
    {
      name: "JavaScript",
      src: JavaScriptIcon,
    },
    {
      name: "HTML5",
      src: HTMLIcon,
    },
    {
      name: "CSS3",
      src: CSSIcon,
    },
    {
      name: "SASS",
      src: SassIcon,
    },
    {
      name: "Tailwind",
      src: TailwindIcon,
    },
    {
      name: "jQuery",
      src: jQueryIcon,
    },
    {
      name: "Node.js",
      src: NodeIcon,
    },
    {
      name: "React",
      src: ReactIcon,
    },
    {
      name: "NextJS",
      src: NextIcon,
    },
    {
      name: "PostgreSQL",
      src: PostgreSQLIcon,
    },
    {
      name: "MongoDB",
      src: MongoDBIcon,
    },
    {
      name: "Socket.IO",
      src: SocketIOIcon,
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
