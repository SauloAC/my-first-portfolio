import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saulo Costa | Full-Stack Developer",
  description: "Portfolio of Saulo Costa, Full-Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-secondary text-primary">{children}</body>
    </html>
  );
}
