import type { Metadata } from "next";
import Header from "./components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saulo de Andrade Costa | Full-Stack Developer",
  description: "Portfolio of Saulo de Andrade Costa, Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <title>{String(metadata.title) ?? ""}</title>
        <meta name="description" content={metadata.description ?? ""} />
      </head>

      <body className="bg-secondary text-primary">
        <Header />
        <div className="lg:ml-[20%] p-10">{children}</div>
      </body>
    </html>
  );
}
