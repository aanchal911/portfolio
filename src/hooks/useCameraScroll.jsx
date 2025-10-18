import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useCameraScroll = (cameraRef) => {
  useEffect(() => {
    if (!cameraRef.current) return;

    gsap.to(cameraRef.current.position, {
      z: 5,
      scrollTrigger: {
        trigger: ".solar-section",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, [cameraRef]);
};