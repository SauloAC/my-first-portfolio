import PortfolioIconImage from "@/public/assets/icons/image.png";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home" className="py-10">
      <div className="text-center">
        <Image
          src={PortfolioIconImage}
          alt="Saulo Costa"
          width={400}
          height={400}
          className="mx-auto"
        />
      </div>
      <h2 className="text-3xl font-bold text-center mt-8"></h2>
      <h3 className="mt-4 text-lg text-justify">
        I&apos;m a full-stack developer with a passion for creating visually
        stunning, seamlessly functional websites. Driven by curiosity and a
        constant desire to learn, I approach every project as an opportunity to
        grow and solve new challenges.
        <br />
        <br />
        Here you can see a little demonstration of what I can do.
      </h3>
    </section>
  );
}
