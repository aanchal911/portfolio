import React from "react";
import Particles from "react-tsparticles";

const InteractiveParticles = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 200 },
          color: { value: ["#ff4f81", "#4fd1ff", "#ffffff"] },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
          move: { enable: true, speed: 0.3 },
          opacity: { value: 0.7 },
        },
        interactivity: {
          events: { 
            onHover: { enable: true, mode: "repulse" }, 
            onClick: { enable: true, mode: "push" } 
          },
        },
      }}
    />
  );
};

export default InteractiveParticles;