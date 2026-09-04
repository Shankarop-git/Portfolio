import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

import CanvasLoader from "../loader";

// Earth
const Earth = () => {
  // import earth scene
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthFallback = () => (
  <div className="w-full h-full flex justify-center items-center" style={{ minHeight: "300px" }}>
    <div 
      className="w-48 h-48 rounded-full opacity-30 blur-2xl animate-pulse" 
      style={{
        background: "radial-gradient(circle, rgba(0,206,168,0.4) 0%, rgba(145,94,255,0.1) 70%, transparent 100%)"
      }}
    />
  </div>
);

// Earth Canvas
const EarthCanvas = () => {
  return (
    <ErrorBoundary fallback={<EarthFallback />}>
      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      >
        {/* Suspense show Canvas Loader on fallback */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />

          {/* Earth */}
          <Earth />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default EarthCanvas;
