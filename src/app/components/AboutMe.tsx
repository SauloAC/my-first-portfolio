import ProfileImage from "@/public/assets/images/me.jpeg";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="text-center mb-8">
        <Image
          src={ProfileImage}
          alt="Saulo Costa - Full Stack Developer"
          width={400}
          height={400}
          className="rounded-2xl mx-auto"
          priority
        />
      </div>
      <h3 className="text-lg text-justify space-y-4">
        <p>
          Welcome to my portfolio! I&apos;m excited to share my journey with
          you.
        </p>
        <p>
          With a background in customer service and a passion for technology,
          I&apos;ve transitioned into the dynamic world of web development. My
          journey has been fueled by a commitment to crafting exceptional user
          experiences through clean, functional, and visually appealing
          websites.
        </p>
        <p>
          Armed with JavaScript, TypeScript, Next.js, Tailwind CSS, and MongoDB,
          I love turning ideas into interactive web applications. From
          developing weather apps with real-time API integration to building
          dynamic dashboards for businesses, every project pushes me to refine
          my skills and tackle new challenges.
        </p>
        <p>
          What sets me apart is the combination of technical expertise and a
          user-centric mindset shaped by my customer service experience. I
          understand the importance of intuitive design and strive to create
          digital solutions that resonate with and delight users.
        </p>
        <p>
          Explore my portfolio to see how I blend creativity with code.
          Let&apos;s collaborate to bring your digital vision to life!
        </p>
      </h3>
    </section>
  );
}
