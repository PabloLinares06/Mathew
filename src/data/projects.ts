export interface Project {
  slug: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  tags: string[];
  videoUrl?: string;
  localVideo?: string;
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
    gallery: ["/projects/marca-1.jpg", "/projects/marca-3.jpg", "/projects/marca-4.jpg", "/projects/marca-2.jpg"]
  },
  {
    slug: "documental-cinematografico",
    title: "Documental “Foráneos”",
    description: "Proyecto documental centrado en las historias de estudiantes que deben dejar sus pueblos para buscar nuevas oportunidades educativas. A través de una narrativa visual cercana y humana, el documental explora temas como la identidad, el desarraigo y la adaptación, mostrando cómo el cambio transforma la vida y la manera de ver el mundo.",
    category: "Producción Audiovisual",
    year: "2025",
    image: "/projects/documental.png",
    videoUrl: "https://www.youtube.com/embed/-5R4mixYBn4",
    tags: ["Audiovisual", "Dirección", "Montaje"],
    gallery: ["/projects/doc-1.jpg", "/projects/doc-2.jpg"]
  },
  {
    slug: "modelado-3d",
    title: "Recreación 3D de “Salón Prado”",
    description: "Proyecto de modelado y visualización arquitectónica desarrollado en Blender, enfocado en la recreación digital de la casa real de Salón Prado. A través del diseño 3D, la iluminación y la composición visual, busqué representar la esencia del espacio con una estética detallada y una visión cinematográfica.",
    category: "Diseño 3D",
    year: "2025",
    image: "/projects/modelado.jpg",
    tags: ["3D", "Blender", "Render"],
    localVideo: "/projects/modelado-render.mp4",
    gallery: ["/projects/modelado-1.png", "/projects/modelado-2.png", "/projects/modelado-3.png", "/projects/modelado-4.png"]
  },
];
