import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

const Moon = ({ parentPosition, radius, speed, color, name }) => {
  const mesh = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed;
    mesh.current.position.x = parentPosition[0] + radius * Math.cos(t);
    mesh.current.position.z = parentPosition[2] + radius * Math.sin(t);
    mesh.current.position.y = parentPosition[1];
  });

  return (
    <mesh
      ref={mesh}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => alert(`Skill: ${name}`)}
    >
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial
        color={hovered ? "#ff4f81" : color}
        emissive={hovered ? "#ff4f81" : color}
        emissiveIntensity={hovered ? 1 : 0.5}
      />
    </mesh>
  );
};

export default Moon;