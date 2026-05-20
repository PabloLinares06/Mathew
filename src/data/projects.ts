export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "marca-personal",
    title: "Marca Personal",
    description: "Desarrollo de la identidad visual 'Ritmo Audiovisual'. Un proceso creativo que integra la lógica del diseño con la fluidez del movimiento audiovisual.",
    category: "Branding & Identidad",
    year: "2026",
    image: "/projects/marca-personal.png",
    tags: ["Logo", "Branding", "Estrategia"],
  },
  {
    slug: "documental-cinematografico",
    title: "Documental Cinematográfico",
    description: "Una pieza audiovisual que explora narrativas profundas y estéticas cinematográficas para conectar con la audiencia a un nivel emocional.",
    category: "Producción Audiovisual",
    year: "2025",
    image: "/projects/documental.png",
    videoUrl: "https://www.youtube.com/embed/-5R4mixYBn4",
    tags: ["Audiovisual", "Dirección", "Montaje"],
  },
  {
    slug: "modelado-3d",
    title: "Modelado 3D",
    description: "Exploración de formas y estructuras mediante el modelado tridimensional, enfocado en el detalle y la precisión técnica.",
    category: "Diseño 3D",
    year: "2025",
    image: "/projects/modelado.jpg",
    tags: ["3D", "Modelado", "Render"],
  },
];
