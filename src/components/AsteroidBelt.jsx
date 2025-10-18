import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const AsteroidBelt = ({ parentPosition, count = 50, radius = 4 }) => {
  const group = useRef();
  
  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.y += 0.002;
    }
  });

  const asteroids = [];
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const x = parentPosition[0] + radius * Math.cos(angle + Math.random());
    const z = parentPosition[2] + radius * Math.sin(angle + Math.random());
    const y = parentPosition[1] + (Math.random() - 0.5) * 0.5;
    asteroids.push(
      <mesh key={i} position={[x, y, z]}>
        <sphereGeometry args={[0.05 + Math.random() * 0.05, 8, 8]} />
        <meshStandardMaterial color="#aaaaaa" emissive="#444444" emissiveIntensity={0.2} />
      </mesh>
    );
  }

  return <group ref={group}>{asteroids}</group>;
};

export default AsteroidBelt;