import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./Planet";
import Moon from "./Moon";
import Aurora from "./Aurora";
import Meteors from "./Meteors";
import AsteroidBelt from "./AsteroidBelt";
import ProjectModal from "./ProjectModal";

const projects = [
  { name: "Cosmic E-Commerce", description: "Full-stack e-commerce platform with AI recommendations", github: "https://github.com", live: "https://example.com" },
  { name: "Galaxy Chat App", description: "Real-time chat application with cosmic themes", github: "https://github.com", live: "https://example.com" },
  { name: "Stellar Dashboard", description: "Analytics dashboard with beautiful data visualizations", github: "https://github.com", live: "https://example.com" },
];

const SolarSystem = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const handlePlanetClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  return (
    <div className="solar-section h-screen relative">
      <Canvas camera={{ position: [0, 5, 25], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={2} />
        <Stars radius={150} depth={100} count={7000} factor={4} fade />
        <Aurora />
        <Meteors />
        <Planet position={[5, 0, 0]} color="#ff4f81" size={1.2} speed={0.01} onClick={() => handlePlanetClick(projects[0])} />
        <Moon parentPosition={[5, 0, 0]} radius={2} speed={1} color="#ffffff" name="React" />
        <AsteroidBelt parentPosition={[5, 0, 0]} count={50} radius={2.8} />
        <Planet position={[8, 0, 0]} color="#4fd1ff" size={1.5} speed={0.008} onClick={() => handlePlanetClick(projects[1])} />
        <Moon parentPosition={[8, 0, 0]} radius={2.5} speed={0.8} color="#ffcc4f" name="Node.js" />
        <AsteroidBelt parentPosition={[8, 0, 0]} count={60} radius={3.2} />
        <Planet position={[11, 0, 0]} color="#ffcc4f" size={1} speed={0.006} onClick={() => handlePlanetClick(projects[2])} />
        <Moon parentPosition={[11, 0, 0]} radius={1.8} speed={1.2} color="#ff4f81" name="AI" />
        <AsteroidBelt parentPosition={[11, 0, 0]} count={40} radius={2.5} />
        <OrbitControls enableZoom={true} />
      </Canvas>
      <ProjectModal show={showModal} setShow={setShowModal} project={selectedProject} />
    </div>
  );
};

export default SolarSystem;