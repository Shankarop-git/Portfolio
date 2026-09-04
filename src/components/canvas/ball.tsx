import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ErrorBoundary } from "../ErrorBoundary";

import CanvasLoader from "../loader";

type BallProps = {
  imgUrl: string;
};

// Ball
const Ball = ({ imgUrl }: BallProps) => {
  // use texture from drei
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Lights */}
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* Mesh */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

type BallCanvasProps = {
  icon: string;
};

const BallFallback = ({ icon }: { icon: string }) => (
  <div className="w-24 h-24 rounded-full flex justify-center items-center bg-[#151030] border-2 border-[#804dee] p-4 shadow-card hover:scale-110 transition-all duration-300">
    <img src={icon} alt="tech icon fallback" className="w-14 h-14 object-contain" />
  </div>
);

// Ball Canvas
const BallCanvas = ({ icon }: BallCanvasProps) => {
  return (
    <ErrorBoundary fallback={<BallFallback icon={icon} />}>
      <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
        {/* Show canvas loader on fallback */}
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} />
          <Ball imgUrl={icon} />
        </Suspense>

        {/* Preload all */}
        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

export default BallCanvas;
