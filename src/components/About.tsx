"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const text = "Exploro la intersección entre la lógica estructural y la creatividad visual. Mi enfoque en diseño crossmedia busca crear experiencias que no solo se vean bien, sino que funcionen con una precisión milimétrica, conectando marcas con audiencias en cada punto de contacto digital.";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <section id="about" ref={containerRef} className="py-32 px-6 md:px-24 bg-origen relative flex flex-col items-center justify-center min-h-[70vh]">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex flex-wrap gap-x-3 gap-y-3 justify-center text-center">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </div>
      </div>
    </section>
  );
}

interface WordProps {
  children: string;
  progress: any;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0.1, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className="font-lato text-3xl md:text-5xl lg:text-6xl text-presencia leading-tight"
    >
      {children}
    </motion.span>
  );
}
