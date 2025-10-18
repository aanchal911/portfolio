import React from "react";
import Particles from "react-tsparticles";

const Meteors = () => {
  return (
    <Particles
      options={{
        particles: {
          number: { value: 20 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          move: { enable: true, speed: 12, direction: "top-right", straight: true, outMode: "out" },
          size: { value: { min: 1, max: 2 } },
          opacity: { value: 0.9 },
        },
      }}
    />
  );
};

export default Meteors;