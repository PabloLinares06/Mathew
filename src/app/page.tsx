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
      <section id="projects" className="py-32 px-6 md:px-12 lg:px-24 bg-origen border-t border-silencio/10 overflow-hidden">
        <div className="flex flex-col items-center text-center mb-24 relative">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <h2 className="font-oswald text-5xl md:text-8xl lg:text-[10rem] uppercase tracking-tighter text-presencia leading-none">
              Proyectos
            </h2>
            <h3 className="text-5xl md:text-8xl lg:text-[10rem] text-flujo leading-none font-blackrush normal-case drop-shadow-[0_0_30px_rgba(233,80,33,0.5)]">
              Destacados
            </h3>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
      
      <footer className="py-48 px-6 md:px-12 lg:px-24 bg-origen border-t border-silencio/10 flex flex-col items-center gap-24">
        <div className="flex flex-col items-center gap-12">
          <div className="w-64 h-64 md:w-80 md:h-80">
            <img src="/logo-liso.png" alt="Ritmo Audiovisual Logo" className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(226,28,34,0.3)] hover:scale-110 transition-all duration-700" />
          </div>
        </div>
        
        <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-3 items-center gap-12 md:gap-8 border-t border-silencio/5 pt-16">
          {/* Left: Empty for balance */}
          <div className="hidden md:block order-2 md:order-1" />
          
          {/* Center: Social Links - MATHEMATICALLY CENTERED */}
          <div className="flex justify-center gap-12 order-1 md:order-2">
            {[
              { label: "Instagram", url: "#" },
              { label: "LinkedIn", url: "#" },
              { label: "Behance", url: "#" }
            ].map((social) => (
              <a 
                key={social.label}
                href={social.url} 
                className="font-lato text-xs uppercase tracking-[0.4em] text-silencio hover:text-detonante transition-all duration-300 relative group"
              >
                {social.label}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-detonante transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
          
          {/* Right: Copyright */}
          <div className="flex justify-center md:justify-end order-3">
            <div className="font-lato text-[10px] uppercase tracking-widest text-silencio/40 text-center md:text-right">
              © 2026 Joseph Mathew Ramirez. <br className="md:hidden" /> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
