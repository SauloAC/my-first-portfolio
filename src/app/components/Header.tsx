import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="lg:fixed lg:w-1/3 lg:h-screen p-4 border border-primary rounded-lg text-center">
      <div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WWxszqUDsiFEvKsT0X3zdYTf9e6ouN.png"
          alt="Portfolio Logo"
          width={100}
          height={100}
          className="mx-auto mt-10"
          priority
        />
      </div>
      <h3 className="mt-4">Hi, my name is</h3>
      <h1 className="text-3xl font-bold">Saulo Costa</h1>
      <h2 className="text-xl">Full-Stack Developer</h2>

      <nav className="mt-8 space-y-4">
        <Link
          href="#home"
          className="block hover:opacity-70 transition-all duration-300 ease-in-out"
        >
          <div className="border border-primary rounded-md p-2 hover:bg-primary hover:text-white">
            <h2>Home</h2>
          </div>
        </Link>

        <Link
          href="#aboutMe"
          className="block hover:opacity-70 transition-all duration-300 ease-in-out"
        >
          <div className="border border-primary rounded-md p-2 hover:bg-primary hover:text-white">
            <h2>About Me</h2>
          </div>
        </Link>

        <Link
          href="#skills"
          className="block hover:opacity-70 transition-all duration-300 ease-in-out"
        >
          <div className="border border-primary rounded-md p-2 hover:bg-primary hover:text-white">
            <h2>Skills</h2>
          </div>
        </Link>

        <Link
          href="#workExperiences"
          className="block hover:opacity-70 transition-all duration-300 ease-in-out"
        >
          <div className="border border-primary rounded-md p-2 hover:bg-primary hover:text-white">
            <h2>Work Experiences</h2>
          </div>
        </Link>

        <Link
          href="#projects"
          className="block hover:opacity-70 transition-all duration-300 ease-in-out"
        >
          <div className="border border-primary rounded-md p-2 hover:bg-primary hover:text-white">
            <h2>Projects</h2>
          </div>
        </Link>

        <Link
          href="#contact"
          className="block hover:opacity-70 transition-all duration-300 ease-in-out"
        >
          <div className="border border-primary rounded-md p-2 hover:bg-primary hover:text-white">
            <h2>Contact</h2>
          </div>
        </Link>
      </nav>
    </header>
  );
}
