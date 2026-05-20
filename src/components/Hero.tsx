"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

class Particle {
  x: number;
  y: number;
  width: number;
  height: number;
  baseHeight: number;
  phase: number;
  oscillationSpeed: number;
  ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.ctx = ctx;
    this.width = Math.random() * 2 + 2; // Fixed width bars like the logo
    this.baseHeight = Math.random() * 30 + 10; // Initial random height
    this.height = this.baseHeight;
    this.phase = Math.random() * Math.PI * 2; // Random starting point for oscillation
    this.oscillationSpeed = Math.random() * 0.05 + 0.02; // Speed of the "up and down"
  }

  draw() {
    this.ctx.fillStyle = "#e21c22"; // Detonante (Logo Red)
    // Vertical centering of the bar relative to its Y position
    this.ctx.fillRect(this.x, this.y - this.height / 2, this.width, this.height);
  }

  update() {
    // Autonomous Equalizer Movement ONLY (No mouse interaction for a sober look)
    this.phase += this.oscillationSpeed;
    this.height = this.baseHeight + Math.sin(this.phase) * (this.baseHeight * 0.8);
  }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      particlesArray = [];
      // Balanced number of particles for a sober look
      let numberOfParticles = (window.innerWidth * window.innerHeight) / 18000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        particlesArray.push(new Particle(x, y, ctx));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update();
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-origen flex items-center justify-center py-8 md:py-12">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40"
      />
      <div className="relative z-10 text-center px-4 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-center gap-0"
        >
          <div className="w-full max-w-[280px] md:max-w-[500px] lg:max-w-[680px] overflow-hidden max-h-[210px] md:max-h-[375px] lg:max-h-[510px] filter drop-shadow-[0_0_50px_rgba(226,28,34,0.4)]">
            <img 
              src="/logo-final.png" 
              alt="Ritmo Audiovisual" 
              className="w-full h-auto object-contain" 
            />
          </div>
          
          <div className="space-y-3">
            <h1 className="font-oswald text-5xl md:text-8xl lg:text-[10rem] uppercase tracking-tighter text-presencia leading-none">
              <span className="text-flujo italic font-blackrush normal-case drop-shadow-[0_0_20px_rgba(242,140,38,0.4)] block">
                Mathew Ramirez
              </span>
            </h1>
            <p className="font-lato text-silencio text-sm md:text-base uppercase tracking-[0.8em]">
              Diseño Crossmedia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
