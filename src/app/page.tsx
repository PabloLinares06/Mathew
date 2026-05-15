import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <Hero />
      <About />
      <Experience />
      
      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-origen border-t border-silencio/10">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <h2 className="font-oswald text-detonante text-sm uppercase tracking-widest">
            // Portafolio
          </h2>
          <h3 className="font-oswald text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-presencia">
            Proyectos <span className="italic font-blackrush normal-case text-flujo">Destacados</span>
          </h3>
          <p className="font-lato text-silencio max-w-sm text-xs md:text-sm uppercase tracking-widest mt-4">
            Explorando el diseño desde una perspectiva <br className="hidden md:block" /> lógica y disruptiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      
      <footer className="py-24 px-6 md:px-12 lg:px-24 bg-origen border-t border-silencio/10 flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-8">
          <div className="w-32 h-32">
            <img src="/logo.png" alt="Ritmo Audiovisual Logo" className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" />
          </div>
          <div className="font-oswald text-5xl md:text-8xl lg:text-9xl uppercase tracking-tighter select-none text-center leading-[0.8] flex flex-col items-center">
            <span className="text-presencia opacity-5">JOSEPH</span>
            <span className="text-detonante opacity-60 drop-shadow-[0_0_15px_rgba(226,28,34,0.2)]">MATHEW</span>
            <span className="text-flujo opacity-40">RAMIREZ</span>
          </div>
        </div>
        
        <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-8 border-t border-silencio/5 pt-12">
          {/* Left: Brand */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="font-oswald text-xl uppercase tracking-tighter text-presencia">
              Ritmo <span className="text-detonante text-sm">Audiovisual</span>
            </div>
          </div>
          
          {/* Center: Social Links - MATHEMATICALLY CENTERED */}
          <div className="flex justify-center gap-10 order-1 md:order-2">
            {[
              { label: "Instagram", url: "#" },
              { label: "LinkedIn", url: "#" },
              { label: "Behance", url: "#" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.url} 
                className="font-lato text-[10px] uppercase tracking-[0.3em] text-silencio hover:text-detonante transition-all duration-300 relative group"
              >
                {social.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-detonante transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          {/* Right: Copyright */}
          <div className="flex justify-center md:justify-end order-3">
            <div className="font-lato text-[9px] uppercase tracking-widest text-silencio/40 text-center md:text-right">
              © 2026 Joseph Mathew Ramirez. <br className="md:hidden" /> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
