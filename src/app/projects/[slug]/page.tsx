"use client";

import { use } from "react";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRef } from "react";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <main ref={containerRef} className="bg-origen min-h-screen">
      {/* Hero Parallax */}
      <section className="relative h-[80vh] overflow-hidden">
        <motion.div
          style={{ y, scale }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-origen/60" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-20">
          <div className="max-w-4xl">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-detonante hover:text-presencia transition-colors mb-8 font-oswald uppercase tracking-widest text-sm pointer-events-auto">
              <ArrowLeft size={16} /> Ver Otros Proyectos
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-oswald text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-presencia"
            >
              {project.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="sticky top-24 space-y-12">
              <div>
                <h4 className="font-oswald text-silencio text-xs uppercase tracking-[0.3em] mb-4">// Detalles</h4>
                <div className="space-y-2">
                  <p className="font-lato text-sm text-presencia uppercase tracking-widest">{project.category}</p>
                  <p className="font-lato text-sm text-silencio">{project.year}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-oswald text-silencio text-xs uppercase tracking-[0.3em] mb-4">// Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="border border-silencio/30 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-silencio">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2">
            <p className="font-lato text-2xl md:text-3xl text-presencia leading-relaxed mb-12">
              {project.description}
            </p>

            {project.videoUrl && (
              <div className="mb-24 aspect-video w-full bg-black/20 rounded-lg overflow-hidden border border-silencio/10">
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
            
            <p className="font-lato text-lg text-silencio leading-relaxed">
              Explora este proyecto detalladamente. Cada pieza visual y estratégica ha sido diseñada con el objetivo de transmitir la esencia de la marca y conectar emocionalmente con su audiencia a través de narrativas inmersivas y diseño crossmedia de alta calidad.
            </p>
            
            <div className="mt-24 space-y-16 md:space-y-24">
              {project.gallery ? (
                project.gallery.map((img, idx) => (
                  <div key={idx} className="w-full bg-silencio/5 rounded-sm overflow-hidden border border-silencio/10">
                    <img src={img} alt={`Process ${idx + 1}`} className="w-full h-auto display-block" />
                  </div>
                ))
              ) : (
                <>
                  <div className="w-full bg-silencio/5 rounded-sm overflow-hidden border border-silencio/10">
                    <img src={project.image} alt="Process 1" className="w-full h-auto display-block" />
                  </div>
                  <div className="w-full bg-silencio/5 rounded-sm overflow-hidden border border-silencio/10">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600" alt="Process 2" className="w-full h-auto display-block" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <section className="py-24 border-t border-silencio/10 text-center">
        <Link href="/#projects" className="font-oswald text-4xl md:text-6xl uppercase text-presencia hover:text-detonante transition-colors">
          Explorar Más Proyectos
        </Link>
      </section>
    </main>
  );
}
