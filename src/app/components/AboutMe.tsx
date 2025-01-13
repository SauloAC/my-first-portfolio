import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="text-center mb-8">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me-F5sfXpEno4Ol0e9MIO56TsV1GbhCPv.jpeg"
          alt="Saulo Costa - Full Stack Developer"
          width={400}
          height={400}
          className="rounded-2xl mx-auto"
          priority
        />
      </div>
      <h3 className="text-lg text-justify space-y-4">
        <p>
          Welcome to my portfolio! I&apos;m thrilled to share my journey with
          you.
        </p>
        <p>
          Originally coming from a background in customer service, I&apos;ve
          transitioned into the dynamic world of web development, where my
          passion for crafting exceptional user experiences has truly
          flourished. Armed with JavaScript, HTML, and CSS, I&apos;m dedicated
          to building websites that not only look stunning but also function
          seamlessly.
        </p>
        <p>
          Every project is an opportunity for me to push boundaries and refine
          my skills. From conceptualization to execution, I&apos;m committed to
          delivering results that exceed expectations. I thrive on challenges
          and constantly seek out new opportunities to grow and innovate.
        </p>
        <p>
          Beyond the code, I bring a unique perspective shaped by my customer
          service experience. Understanding the importance of user-centric
          design, I strive to create digital solutions that resonate with and
          delight users.
        </p>
        <p>
          I invite you to explore my portfolio and discover the projects that
          showcase my expertise and passion for web development. Let&apos;s
          collaborate to bring your digital vision to life!
        </p>
      </h3>
    </section>
  );
}
