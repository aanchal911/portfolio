import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (ref, y = 50, duration = 1) => {
  useEffect(() => {
    if (!ref.current) return;
    gsap.from(ref.current, {
      y: y,
      opacity: 0,
      duration: duration,
      ease: "power3.out",
      scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 20%" },
    });
  }, [ref, y, duration]);
};