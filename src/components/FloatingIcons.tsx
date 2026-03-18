import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, Octahedron, Torus } from "@react-three/drei";
import * as THREE from "three";

const AnimatedShape = ({ 
  position, 
  color, 
  speed = 1,
  distort = 0.3,
  type = "icosahedron"
}: { 
  position: [number, number, number]; 
  color: string; 
  speed?: number;
  distort?: number;
  type?: "icosahedron" | "octahedron" | "torus";
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 * speed;
    }
  });

  const ShapeComponent = type === "octahedron" ? Octahedron : type === "torus" ? Torus : Icosahedron;

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <ShapeComponent ref={meshRef} args={type === "torus" ? [0.5, 0.2, 16, 32] : [0.8, 1]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </ShapeComponent>
    </Float>
  );
};

const FloatingIcons = () => {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#ff2222" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00e5e5" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#ff4444"
        />
        
        <Suspense fallback={null}>
          {/* <AnimatedShape position={[-4, 2, 0]} color="#22d3d3" speed={0.5} type="icosahedron" />
          <AnimatedShape position={[4, -1, -2]} color="#8b5cf6" speed={0.7} distort={0.4} type="octahedron" />
          <AnimatedShape position={[3, 3, -1]} color="#06b6d4" speed={0.3} distort={0.2} type="torus" />
          <AnimatedShape position={[-3, -2, 1]} color="#a855f7" speed={0.6} type="icosahedron" /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default FloatingIcons;
