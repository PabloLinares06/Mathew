export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: "nexus-branding",
    title: "Nexus Branding",
    description: "Una identidad visual disruptiva para una startup de inteligencia artificial, enfocada en la fluidez de datos y la conexión humana.",
    category: "Branding Inmersivo",
    year: "2024",
    image: "https://images.unsplash.com/photo-1635339001026-6114ad11a1ed?auto=format&fit=crop&q=80&w=1600",
    tags: ["Logo", "Motion", "UI Kit"],
  },
  {
    slug: "motion-abstract",
    title: "Motion Abstract",
    description: "Serie de experimentos visuales explorando la física de partículas y la resonancia acústica aplicada al diseño crossmedia.",
    category: "Motion Graphics",
    year: "2023",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600",
    tags: ["GSAP", "After Effects", "Particles"],
  },
  {
    slug: "core-interface",
    title: "Core Interface",
    description: "Rediseño completo de un sistema de control lógico para infraestructuras industriales, priorizando la ergonomía cognitiva.",
    category: "UX / UI Design",
    year: "2025",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1600",
    tags: ["App", "Figma", "Research"],
  },
];
