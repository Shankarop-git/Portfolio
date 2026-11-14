/**
 * ============================================================================
 * STANDALONE 3D COMPUTER CANVAS COMPONENT
 * ============================================================================
 * 
 * HOW TO USE IN A NEW PROJECT:
 * 
 * 1. Install Dependencies:
 *    npm install three @react-three/fiber @react-three/drei
 *    npm install -D @types/three (if using TypeScript)
 * 
 * 2. Copy 3D Model Asset:
 *    Copy the entire "desktop_pc" folder from this project's "public/desktop_pc"
 *    into your new project's "public/desktop_pc" directory.
 *    (Files needed: scene.gltf, scene.bin, textures/, license.txt)
 * 
 * 3. Import & Use in your page/component:
 *    import ComputersCanvas from './ComputersCanvasStandalone';
 * 
 *    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
 *      <ComputersCanvas />
 *    </div>
 * ============================================================================
 */

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Html, useProgress } from "@react-three/drei";

// ==========================================
// 1. Fallback Loading Spinner / Percentage
// ==========================================
const CanvasLoader: React.FC = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            border: "4px solid rgba(255, 255, 255, 0.1)",
            borderTop: "4px solid #915EFF",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <p
          style={{
            fontSize: 14,
            color: "#f1f1f1",
            fontWeight: 800,
            marginTop: 20,
            letterSpacing: "1px",
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </div>
    </Html>
  );
};

// ==========================================
// 2. 3D Computer Model & Lighting
// ==========================================
interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  // Path assumes "desktop_pc" is in your "public/" folder
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Ambient / Hemisphere Lighting */}
      <hemisphereLight intensity={0.15} groundColor="black" />

      {/* Point Light for highlights */}
      <pointLight intensity={1} />

      {/* Spotlight for directional shadows */}
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      {/* 3D Model Scene */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// ==========================================
// 3. Canvas Container (Main Export)
// ==========================================
export const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // Screen size listener for mobile responsiveness
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
      style={{ background: "transparent", width: "100%", height: "100%" }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0);
      }}
    >
      {/* Loading Fallback */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Orbit Controls (Rotation enabled, zoom disabled) */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* 3D Model */}
        <Computers isMobile={isMobile} />
      </Suspense>

      {/* Preload GLTF Model */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
