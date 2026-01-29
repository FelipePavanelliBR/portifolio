import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF, Environment } from "@react-three/drei";
import * as THREE from "three";

function Model({ url }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    // Fix missing textures by applying a default material
    scene.traverse((child) => {
      if (child.isMesh) {
        // If material has missing textures, apply a basic material
        if (child.material) {
          child.material.side = THREE.DoubleSide;
          // Ensure material is valid even if textures fail to load
          if (!child.material.map) {
            child.material.color = new THREE.Color(0x808080); // Gray fallback
          }
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

function LoadingSpinner() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#646cff" wireframe />
    </mesh>
  );
}

function ErrorFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      color: 'rgba(248, 248, 248, 0.6)',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <div>
        <p>Failed to load 3D model</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
          Check console for details
        </p>
      </div>
    </div>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Model loading error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}

export default function Model3DViewer({ modelUrl, cameraPosition = [0, 2, 2] }) {
  return (
    <div className="model-viewer">
      <ErrorBoundary>
        <Canvas>
          <PerspectiveCamera makeDefault position={cameraPosition} />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />

          {/* 3D Model */}
          <Suspense fallback={<LoadingSpinner />}>
            <Model url={modelUrl} />
            <Environment preset="studio" />
          </Suspense>

          {/* Controls for rotation */}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            minDistance={2}
            maxDistance={10}
            autoRotate={false}
          />
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
