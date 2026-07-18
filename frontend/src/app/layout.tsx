import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoundVerse | Diario musical para tus emociones",
  description:
    "Un espacio personal para expresar emociones, guardar recuerdos y conectar mediante canciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-primary">
        <Navigation />
        <main className="min-h-screen px-6 py-10 pb-28 md:ml-64 md:px-10 md:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
