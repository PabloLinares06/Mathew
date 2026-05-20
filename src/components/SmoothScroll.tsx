"use client";

import { useEffect, ReactNode } from "react";
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

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    // Make lenis available globally for manual triggers if needed
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

  // Handle hash scrolling on route change
  useEffect(() => {
    const lenis = (window as any).lenis;
    if (!lenis) return;

    const handleHashScroll = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          // Small timeout to allow Next.js to finish route rendering
          setTimeout(() => {
            lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 1.5 });
          }, 100);
        }
      } else {
        // If no hash, scroll to top on route change
        lenis.scrollTo(0, { duration: 0, immediate: true });
      }
    };

    handleHashScroll();
  }, [pathname]);

  return <>{children}</>;
}
