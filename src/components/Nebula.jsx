import React from "react";
import Particles from "react-tsparticles";

const Nebula = () => {
  return (
    <Particles
      options={{
        fpsLimit: 60,
        background: { color: "#0a0a0a" },
        particles: {
          number: { value: 150 },
          color: { value: ["#ff4f81", "#4fd1ff", "#ffcc4f"] },
          shape: { type: "circle" },
          opacity: { value: 0.7, random: true },
          size: { value: { min: 2, max: 6 } },
          move: { enable: true, speed: 0.3, direction: "none", outMode: "bounce" },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "repulse" } },
        },
      }}
    />
  );
};

export default Nebula;