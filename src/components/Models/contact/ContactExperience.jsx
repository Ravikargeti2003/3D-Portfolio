// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";

// import {Computer} from "./Computer";
// // import Computer from "../components/Models/Computer";

// const ContactExperience = () => {
//   return (
//     <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
//       <ambientLight intensity={0.5} color="#fff4e6" />

//       <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

//       <directionalLight
//         position={[5, 9, 1]}
//         castShadow
//         intensity={2.5}
//         color="#ffd9b3"
//       />

//       <OrbitControls
//         enableZoom={false}
//         minPolarAngle={Math.PI / 5}
//         maxPolarAngle={Math.PI / 2}
//       />

//       <group scale={[1, 1, 1]}>
//         <mesh
//           receiveShadow
//           position={[0, -1.5, 0]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         >
//           <planeGeometry args={[30, 30]} />
//           <meshStandardMaterial color="#a46b2d" />
//         </mesh>
//       </group>

//       <group scale={0.03} position={[0, -1.49, -2]} castShadow>
//         <Computer />
//       </group>
//     </Canvas>
//   );
// };

// export default ContactExperience;



//optimized for lag
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";

// import Computer from "./Computer";

// const ContactExperience = () => {
//   return (
//     <Canvas 
//       shadows 
//       camera={{ position: [0, 3, 7], fov: 45 }}
//       performance={{ min: 0.5 }}
//       dpr={[1, 2]}
//       gl={{ antialias: false }}
      
//     >
//       {/* Reduce lighting intensity and remove one light */}
//       <ambientLight intensity={0.3} color="#fff4e6" />
      
//       <directionalLight 
//         position={[5, 5, 3]} 
//         intensity={1.5} 
//         color="#ffd9b3"
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//       />

//       <OrbitControls
//         enableZoom={false}
//         minPolarAngle={Math.PI / 5}
//         maxPolarAngle={Math.PI / 2}
//         enableDamping
//         dampingFactor={0.05}
//       />

//       <group scale={[1, 1, 1]}>
//         <mesh
//           receiveShadow
//           position={[0, -1.5, 0]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         >
//           <planeGeometry args={[30, 30]} />
//           <meshStandardMaterial color="#a46b2d" />
//         </mesh>
//       </group>

//       <Suspense fallback={null}>
//         <group scale={0.03} position={[0, -1.49, -2]} castShadow>
//           <Computer />
//         </group>
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ContactExperience;


//more optimisez for lag fix
// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";

// import Computer from "./Computer";

// const ContactExperience = () => {
//   return (
//     <Canvas 
//       shadows 
//       camera={{ position: [0, 3, 7], fov: 45 }}
//       performance={{ min: 0.5 }}
//       dpr={[0.5, 1.5]}
//       gl={{ 
//         antialias: false,
//         alpha: false,
//         powerPreference: "high-performance"
//       }}
//       frameloop="demand"
//       resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
//     >
//       {/* Reduce lighting intensity and remove one light */}
//       <ambientLight intensity={0.3} color="#fff4e6" />
      
//       <directionalLight 
//         position={[5, 5, 3]} 
//         intensity={1.5} 
//         color="#ffd9b3"
//         castShadow
//         shadow-mapSize-width={1024}
//         shadow-mapSize-height={1024}
//       />

//       <OrbitControls
//         enableZoom={false}
//         minPolarAngle={Math.PI / 5}
//         maxPolarAngle={Math.PI / 2}
//         enableDamping
//         dampingFactor={0.05}
//       />

//       <group scale={[1, 1, 1]}>
//         <mesh
//           receiveShadow
//           position={[0, -1.5, 0]}
//           rotation={[-Math.PI / 2, 0, 0]}
//         >
//           <planeGeometry args={[30, 30]} />
//           <meshStandardMaterial color="#a46b2d" />
//         </mesh>
//       </group>

//       <Suspense fallback={null}>
//         <group scale={0.03} position={[0, -1.49, -2]} castShadow>
//           <Computer />
//         </group>
//       </Suspense>
//     </Canvas>
//   );
// };

// export default ContactExperience;



//more optimized for lag 3
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas 
      shadows 
      camera={{ position: [0, 3, 7], fov: 45 }}
      performance={{ min: 0.5 }}
      dpr={[0.5, 1.5]}
      gl={{ 
        antialias: false,
        alpha: false,
        powerPreference: "high-performance"
      }}
      frameloop="demand"
      resize={{ scroll: false, debounce: { scroll: 50, resize: 0 } }}
    >
      {/* Minimal lighting for better performance */}
      <ambientLight intensity={0.4} color="#fff4e6" />
      
      <directionalLight 
        position={[5, 5, 3]} 
        intensity={1.2} 
        color="#ffd9b3"
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        shadow-camera-near={0.5}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />

      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
        enableDamping
        dampingFactor={0.05}
      />

      <group scale={[1, 1, 1]}>
        <mesh
          receiveShadow
          position={[0, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        >
          <planeGeometry args={[30, 30]} />
          <meshStandardMaterial color="#a46b2d" />
        </mesh>
      </group>

      <Suspense fallback={null}>
        <group scale={0.03} position={[0, -1.49, -2]} castShadow>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;