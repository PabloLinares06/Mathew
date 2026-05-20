export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  videoUrl?: string;
  gallery?: string[];
}

export const projects: Project[] = [
  {
    slug: "marca-personal",
    title: "Marca Personal",
    description: "Una marca que transforma ideas en experiencias visuales a través del ritmo, el movimiento y la narrativa audiovisual. Cada elemento fue diseñado para transmitir energía, identidad y una conexión auténtica con la cultura visual actual. Este proyecto reúne piezas clave de la identidad de Ritmo Audiovisual, mostrando cómo el diseño, la producción audiovisual y la creatividad digital se conectan para construir una marca moderna, dinámica y con una esencia cinematográfica.",
    category: "Branding & Identidad",
    year: "2026",
    image: "/projects/marca-personal.png",
    tags: ["Logo", "Branding", "Estrategia"],
    gallery: ["/projects/marca-1.jpg", "/projects/marca-2.jpg", "/projects/marca-3.jpg", "/projects/marca-4.jpg"]
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
