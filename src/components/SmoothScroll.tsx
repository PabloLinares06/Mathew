"use client";

import { useEffect, ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProps {
  children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  // Handle hash scrolling on route change with multiple checks
  useEffect(() => {
    if (!lenisRef.current) return;

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          lenisRef.current?.scrollTo(target as HTMLElement, { 
            offset: 0, 
            duration: 1.8,
            immediate: false
          });
          return true;
        }
      }
      return false;
    };

    // If no hash, immediate scroll to top
    if (!window.location.hash) {
      lenisRef.current.scrollTo(0, { duration: 0, immediate: true });
    } else {
      // Periodic check because Next.js route change can be asynchronous with DOM updates
      let attempts = 0;
      const intervalId = setInterval(() => {
        const success = scrollToHash();
        attempts++;
        if (success || attempts > 10) {
          clearInterval(intervalId);
        }
      }, 150);

      return () => clearInterval(intervalId);
    }
  }, [pathname]);

  return <>{children}</>;
}
