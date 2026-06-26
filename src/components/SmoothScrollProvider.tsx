import Lenis from "lenis";
import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useRef } from "react";

type SmoothScrollContextValue = {
  scrollTo: (target: string | number) => void;
};

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => undefined,
});

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    lenisRef.current = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const value = useMemo<SmoothScrollContextValue>(
    () => ({
      scrollTo: (target) => {
        const lenis = lenisRef.current;
        if (lenis) {
          lenis.scrollTo(target, { offset: -96 });
          return;
        }

        if (typeof target === "string") {
          document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: target, behavior: "smooth" });
        }
      },
    }),
    [],
  );

  return <SmoothScrollContext.Provider value={value}>{children}</SmoothScrollContext.Provider>;
}

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}
