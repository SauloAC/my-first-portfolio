import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="py-10">
      <div className="text-center">
        <Image
          src="/src/public/assets/icons/image.png"
          alt="Saulo Costa"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
      <h2 className="text-3xl font-bold text-center mt-8"></h2>
      <h3 className="mt-4 text-lg text-justify">
        I&apos;m a full-stack developer student, and my journey in web
        development has been defined by a fervent passion for crafting visually
        stunning and seamlessly functional websites. Driven by an insatiable
        thirst for knowledge, I approach each project as an opportunity to
        expand my skill set and tackle new challenges head-on.
        <br />
        <br />
        Here you can see a little demonstration of what I&apos;m capable of
        doing.
      </h3>
    </section>
  );
}
