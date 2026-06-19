import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Knot({ position = [0, 0, 0], scale = 1, color = "#ffffff", speed = 0.4 }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * 0.6;
    ref.current.rotation.y += delta * speed;
    const { mouse } = state;
    ref.current.position.x += (mouse.x * 0.6 + position[0] - ref.current.position.x) * 0.05;
    ref.current.position.y += (mouse.y * 0.4 + position[1] - ref.current.position.y) * 0.05;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshDistortMaterial
          color={color}
          metalness={1}
          roughness={0.15}
          distort={0.28}
          speed={1.4}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

function FloatingShard({ position, color, scale }) {
  const ref = useRef();
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.2;
    ref.current.rotation.z += delta * 0.15;
  });
  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.05}
        />
      </mesh>
    </Float>
  );
}

function Particles({ count = 180 }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2;
    }
    return arr;
  }, [count]);
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#ffffff" transparent opacity={0.45} sizeAttenuation />
    </points>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <color attach="background" args={["#050505"]} />
      <fog attach="fog" args={["#050505", 8, 18]} />
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 4, 5]} intensity={1.4} color="#ffffff" />
      <pointLight position={[-4, -2, -2]} intensity={2} color="#ec4899" />
      <pointLight position={[4, -2, 2]} intensity={1.6} color="#2563eb" />
      <Suspense fallback={null}>
        <Knot position={[0, 0, 0]} scale={1.1} color="#f5f5f5" />
        <FloatingShard position={[-3.4, 1.3, -1]} color="#ec4899" scale={0.35} />
        <FloatingShard position={[3.2, -1.5, -0.5]} color="#2563eb" scale={0.45} />
        <FloatingShard position={[2.6, 1.8, -2]} color="#f59e0b" scale={0.25} />
        <FloatingShard position={[-2.8, -1.6, -1.5]} color="#10b981" scale={0.3} />
        <Particles />
        <Environment preset="warehouse" />
      </Suspense>
    </Canvas>
  );
}
