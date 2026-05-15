import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import ScrollReset from "@/components/ScrollReset";
import Navbar from "@/components/Navbar";

const oswald = localFont({
  src: "../fonts/Oswald-Bold.ttf",
  variable: "--font-oswald",
});

const blackrush = localFont({
  src: "../fonts/Blackrush.ttf",
  variable: "--font-blackrush",
});

const lato = localFont({
  src: [
    {
      path: "../fonts/Lato-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Lato-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Joseph Mathew Ramirez | Ritmo Audiovisual",
  description: "Portafolio Cinematográfico - Diseño Crossmedia & Estrategia Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body
        className={`${oswald.variable} ${blackrush.variable} ${lato.variable} font-lato min-h-full flex flex-col bg-origen text-presencia overflow-x-hidden`}
      >
        <SmoothScroll>
          <ScrollReset />
          <Navbar />
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
