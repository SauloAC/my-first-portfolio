import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="text-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/workInProgress-WtHo3WIFeQ206QI76V3tgMi7dUR2tN.gif"
          alt="Work in Progress"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
    </section>
  );
}
