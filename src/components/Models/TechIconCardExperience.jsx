// import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useEffect } from "react";
// import * as THREE from "three";

// const TechIconCardExperience = ({ model }) => {
//   const scene = useGLTF(model.modelPath);

//   useEffect(() => {
//     if (model.name === "Interactive Developer") {
//       scene.scene.traverse((child) => {
//         if (child.isMesh) {
//           if (child.name === "Object_5") {
//             child.material = new THREE.MeshStandardMaterial({ color: "white" });
//           }
//         }
//       });
//     }
//   }, [scene]);

//   return (
//     <Canvas>
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[5, 5, 5]} intensity={1} />
//       <spotLight
//         position={[10, 15, 10]}
//         angle={0.3}
//         penumbra={1}
//         intensity={2}
//       />
//       <Environment preset="city" />

//       {/* 
//         The Float component from @react-three/drei is used to 
//         create a simple animation of the model floating in space.
//         The rotationIntensity and floatIntensity props control the
//         speed of the rotation and float animations respectively.

//         The group component is used to scale and rotate the model.
//         The rotation is set to the value of the model.rotation property,
//         which is an array of three values representing the rotation in
//         degrees around the x, y and z axes respectively.

//         The primitive component is used to render the 3D model.
//         The object prop is set to the scene object returned by the
//         useGLTF hook, which is an instance of THREE.Group. The
//         THREE.Group object contains all the objects (meshes, lights, etc)
//         that make up the 3D model.
//       */}
//       <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
//         <group scale={model.scale} rotation={model.rotation}>
//           <primitive object={scene.scene} />
//         </group>
//       </Float>

//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// };

// export default TechIconCardExperience;



//more skills add
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model, lowPerformance, disableInteraction }) => {
  const scene = useGLTF(model.modelPath);

  // Optimize scene and materials
  const optimizedScene = useMemo(() => {
    scene.scene.traverse((child) => {
      if (child.isMesh) {
        // Special material for Interactive Developer
        if (model.name === "Interactive Developer" && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
        
        // Performance optimizations
        child.castShadow = false;
        child.receiveShadow = false;
        child.frustumCulled = true;
        child.matrixAutoUpdate = false;
        
        // Optimize materials
        if (child.material) {
          child.material.needsUpdate = false;
        }
      }
    });
    return scene.scene;
  }, [scene, model.name]);

  return (
    <Canvas
      dpr={lowPerformance ? [0.4, 0.8] : [0.6, 1.2]}
      performance={{ min: 0.5 }}
      gl={{ 
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
        stencil: false
      }}
      camera={{ position: [0, 0, 5], fov: 45 }}
      frameloop="demand"
    >
      {/* Optimized lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <spotLight
        position={[10, 15, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5} // Reduced from 2
      />
      
      <Environment preset="city" />

      <Float 
        speed={lowPerformance ? 3 : 5.5} 
        rotationIntensity={lowPerformance ? 0.3 : 0.5} 
        floatIntensity={lowPerformance ? 0.5 : 0.9}
      >
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={optimizedScene} />
        </group>
      </Float>

      <OrbitControls 
        enableZoom={false} 
        enabled={!disableInteraction}
        enablePan={false}
        enableDamping={false}
      />
    </Canvas>
  );
};

export default TechIconCardExperience;