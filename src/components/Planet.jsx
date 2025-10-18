import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Planet({ position, color, size, speed, onClick }) {
  const mesh = useRef();
  useFrame(({ clock }) => {
    mesh.current.rotation.y += speed;
    mesh.current.position.x = position[0] * Math.cos(clock.getElapsedTime() * speed);
    mesh.current.position.z = position[2] * Math.sin(clock.getElapsedTime() * speed);
  });

  return (
    <mesh ref={mesh} position={position} onClick={onClick}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

export default Planet;