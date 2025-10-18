import React from "react";
import Typed from "react-typed";
import Particles from "react-tsparticles";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center">
      <Particles
        options={{
          fpsLimit: 60,
          background: { color: "#0a0a0a" },
          particles: {
            number: { value: 250 },
            color: { value: ["#ffffff", "#ff4f81", "#4fd1ff"] },
            shape: { type: "circle" },
            opacity: { value: 0.8 },
            size: { value: { min: 1, max: 3 } },
            move: { enable: true, speed: 0.5, direction: "none", outMode: "out" },
            links: { enable: false },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
          },
        }}
      />
      <h1 className="text-6xl font-bold text-white mb-4 z-10">Aanchal 💖</h1>
      <Typed
        className="text-xl text-gray-300 z-10"
        strings={["Full-Stack Developer", "AI Explorer", "UI/UX Designer", "Cosmic Creator"]}
        typeSpeed={80}
        backSpeed={50}
        loop
      />
      <p className="mt-6 text-gray-400 z-10">Explore my cosmic universe 👇</p>
    </div>
  );
};

export default Hero;