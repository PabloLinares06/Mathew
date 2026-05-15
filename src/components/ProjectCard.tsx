"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group relative block w-full aspect-[4/5] overflow-hidden bg-silencio/5">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className="w-full h-full"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
        />
      </motion.div>
      
      <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-origen via-transparent to-transparent">
        <span className="font-oswald text-detonante text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          {project.category}
        </span>
        <h3 className="font-oswald text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter text-presencia leading-none">
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
