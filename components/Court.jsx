"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { Model } from "@/components/Tennis_court";

const Court = () => {
  return (
    <Canvas>
      <Environment preset="city" />
      <OrbitControls/>
      <Center>
        <Model />
      </Center>
    </Canvas>
  );
};

export default Court;
