import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Judit Ramo Solé | Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 4+ years of experience building SaaS applications. Specialized in React, TypeScript and Java Spring.",
  openGraph: {
    title: "Judit Ramo Solé | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer with 4+ years of experience building SaaS applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
