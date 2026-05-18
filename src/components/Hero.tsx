"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

class Particle {
  x: number;
  y: number;
  width: number;
  height: number;
  baseHeight: number;
  baseX: number;
  baseY: number;
  density: number;
  phase: number;
  oscillationSpeed: number;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = Math.random() * 2 + 2; // Fixed width bars like the logo
    this.baseHeight = Math.random() * 30 + 10; // Initial random height
    this.height = this.baseHeight;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 10;
    this.phase = Math.random() * Math.PI * 2; // Random starting point for oscillation
    this.oscillationSpeed = Math.random() * 0.05 + 0.02; // Speed of the "up and down"
  }

  draw() {
    this.ctx.fillStyle = "#e21c22"; // Detonante (Logo Red)
    // Vertical centering of the bar relative to its Y position
    this.ctx.fillRect(this.x, this.y - this.height / 2, this.width, this.height);
  }

  update(mouse: { x: number | null; y: number | null; radius: number }) {
    // 1. Autonomous Equalizer Movement
    this.phase += this.oscillationSpeed;
    this.height = this.baseHeight + Math.sin(this.phase) * (this.baseHeight * 0.8);

    // 2. Mouse Interaction
    if (mouse.x !== null && mouse.y !== null) {
      let dx = mouse.x - this.x;
      let dy = mouse.y - this.y;
      let distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < mouse.radius) {
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let force = (mouse.radius - distance) / mouse.radius;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        this.x -= directionX;
        this.y -= directionY;
      } else {
        // Return to base position
        if (this.x !== this.baseX) {
          let dx = this.x - this.baseX;
          this.x -= dx / 15;
        }
        if (this.y !== this.baseY) {
          let dy = this.y - this.baseY;
          this.y -= dy / 15;
        }
      }
    }
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
    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 150,
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      particlesArray = [];
      // Reduced number of particles for a "not too saturated" look
      let numberOfParticles = (window.innerWidth * window.innerHeight) / 15000;
      
      for (let i = 0; i < numberOfParticles; i++) {
        let x = Math.random() * window.innerWidth;
        let y = Math.random() * window.innerHeight;
        particlesArray.push(new Particle(x, y, canvas, ctx));
      }
    };

    const connect = () => {
      // We remove the connections to make it look exactly like isolated equalizer bars
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw interaction ring (subtle)
      if (mouse.x !== null && mouse.y !== null) {
        ctx.strokeStyle = "rgba(226, 28, 34, 0.15)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].draw();
        particlesArray[i].update(mouse);
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
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-origen flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40"
      />
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
          className="flex flex-col items-center"
        >
          <div className="w-32 h-32 md:w-48 md:h-48 mb-10 filter drop-shadow-[0_0_20px_rgba(226,28,34,0.3)]">
            <img src="/logo-r.png" alt="R Logo" className="w-full h-full object-contain" />
          </div>
          
          <h1 className="font-oswald text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter text-presencia leading-[0.8] mb-8">
            JOSEPH <br /> 
            <span className="text-flujo italic font-blackrush normal-case drop-shadow-[0_0_15px_rgba(242,140,38,0.3)]">
              Mathew Ramirez
            </span>
          </h1>
          <p className="font-lato text-silencio text-xs md:text-sm uppercase tracking-[0.6em]">
            Diseño Crossmedia
          </p>
        </motion.div>
      </div>
    </section>
  );
}
