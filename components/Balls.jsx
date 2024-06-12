"use client";
import * as THREE from "three";
import { useRef, useReducer, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { BallCollider, CuboidCollider, Physics, RigidBody } from "@react-three/rapier";

const accents = ["#DCFC62", "#F24B2A", "#ff4060", "#ffcc00"];

const shuffle = (accent = 0) => [
  { color: "#444", size: 0.9 },
  { color: "#444", size: 0.75 },
  { color: "#444", size: 0.75 },
  { color: "white", size: 1 },
  { color: "white", size: 1.5 },
  { color: accents[accent], size: 1.4, accent: true },
  { color: accents[accent], size: 1, accent: true },
  { color: accents[accent], size: 1, accent: true },
];

export function Balls(props) {
  const [accent, click] = useReducer((state) => ++state % accents.length, 0);
  const [jiggle, setJiggle] = useState(true);
  const handleClick = () => {
    click();
    setJiggle((state) => !state);
  };
  const connectors = useMemo(() => shuffle(accent), [accent]);
  return (
    <Canvas
      onClick={handleClick}
      // shadows
      dpr={[1, 1.5]}
      gl={{ antialias: false }}
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 20 }}
      {...props}
    >
      {/* <color attach="background" args={["#141622"]} /> */}
      <ambientLight intensity={0.4} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <Physics /* debug */ gravity={[0, 0, 0]}>
        <Pointer />
        {
          connectors.map((props, i) => <Connector key={i} index={i} size={props.size} {...props} jiggle={jiggle} />) /* prettier-ignore */
        }
      </Physics>
      <OrbitControls />
      {/* <EffectComposer disableNormalPass multisampling={8}> */}
      {/*   <N8AO distanceFalloff={1} aoRadius={1} intensity={4} /> */}
      {/* </EffectComposer> */}
      <Environment preset="city" />
    </Canvas>
  );
}

function Connector({
  position,
  children,
  vec = new THREE.Vector3(),
  scale,
  size = 1,
  r = THREE.MathUtils.randFloatSpread,
  accent,
  jiggle,
  ...props
}) {
  const jiggleTorqueScale = 10;
  useEffect(() => {
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(-15));

    api.current?.applyTorqueImpulse({
      x: Math.random() * jiggleTorqueScale,
      y: Math.random() * jiggleTorqueScale,
      z: Math.random() * jiggleTorqueScale,
    });
  }, [jiggle]);

  const api = useRef();
  const pos = useMemo(() => position || [r(10), r(10), r(10)], []);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2));
  });
  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[size, 32, 32]} />
      {children ? children : <Model size={size} {...props} />}
      {accent && <pointLight intensity={40} distance={2.5} color={props.color} />}
    </RigidBody>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef();
  useFrame(({ mouse, viewport }) => {
    ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0));
  });
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <CuboidCollider args={[0.1, 0.1, 10]} />
    </RigidBody>
  );
}

function Model({ children, index, size, roughness = 0, ...props }) {
  const { nodes, materials } = useGLTF("/models/tennis_ball.glb");
  return (
    <>
      <group>
        <mesh geometry={nodes.defaultMaterial.geometry} material={materials.lambert3} />
        <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.lambert1} />
      </group>
    </>
  );
}
