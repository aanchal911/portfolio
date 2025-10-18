import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Aurora = () => {
  const mesh = useRef();
  const material = useRef();

  useFrame(({ clock }) => {
    if (material.current) {
      material.current.uniforms.time.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, -20]}>
      <planeGeometry args={[50, 30, 128, 128]} />
      <shaderMaterial
        ref={material}
        uniforms={{
          time: { value: 0 },
          resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        }}
        vertexShader={`
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
          }
        `}
        fragmentShader={`
          uniform float time;
          varying vec2 vUv;
          void main() {
            float y = vUv.y + sin(vUv.x*10.0 + time)*0.1;
            vec3 color = vec3(0.0, 0.3 + y*0.7, 0.6 + y*0.4);
            gl_FragColor = vec4(color, 0.3);
          }
        `}
        transparent
      />
    </mesh>
  );
};

export default Aurora;