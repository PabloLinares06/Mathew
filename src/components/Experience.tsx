"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { 
    title: "Producción Audiovisual.", 
    description: "Transformo ideas en piezas visuales con una estética cinematográfica y una narrativa que conecta con las personas.",
    color: "var(--color-detonante)" 
  },
  { 
    title: "Diseño Gráfico y Branding.", 
    description: "Diseño identidades visuales y piezas gráficas que reflejan la esencia de cada marca de forma auténtica y creativa.",
    color: "var(--color-flujo)" 
  },
  { 
    title: "Creación de Contenido Digital.", 
    description: "Creo contenido dinámico para redes sociales, combinando creatividad y estrategia para generar impacto y conectar con la audiencia.",
    color: "var(--color-claridad)" 
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-300vw",
          ease: "none",
          duration: 1,
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
          },
        }
      );
      return () => {
        pin.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="experience" className="overflow-hidden">
      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className="h-screen w-[400vw] flex flex-row relative bg-origen md:bg-transparent"
        >
          <div className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-12">
            <h2 className="font-oswald text-8xl md:text-[15rem] uppercase text-silencio opacity-20 select-none text-center">
              EXPERIENCIA
            </h2>
          </div>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="h-screen w-screen flex-shrink-0 flex items-center justify-center border-l border-silencio/10 p-6 md:p-24 text-center"
            >
              <div className="max-w-4xl flex flex-col items-center text-center">
                <span className="font-oswald text-detonante text-2xl md:text-3xl mb-8 block opacity-80 tracking-widest">
                  0{index + 1}
                </span>
                <h3
                  className="font-oswald text-6xl md:text-9xl uppercase tracking-tighter mb-20 md:mb-32 leading-none"
                  style={{ color: skill.color }}
                >
                  {skill.title.replace(".", "")}
                </h3>
                <p className="font-lato text-silencio text-lg md:text-2xl max-w-xl mx-auto">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile view spacing fallback (though Lenis handles smooth scrolling, we need to ensure the pinned height doesn't break mobile layout) */}
      <style jsx>{`
        @media (max-width: 767px) {
          div {
            width: 100% !important;
            height: auto !important;
            flex-direction: column !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
}
