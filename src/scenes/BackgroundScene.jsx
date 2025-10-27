import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useGLTFLoader } from '../three/useGLTFLoader';
import { useScrollSync } from '../three/useScrollSync';

const BackgroundScene = () => {
    const modelRef = useRef();
    const { nodes } = useGLTFLoader('/models/corn.glb');
    const scrollY = useScrollSync();

    useEffect(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y = scrollY * Math.PI; // Adjust rotation based on scroll
        }
    }, [scrollY]);

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <mesh ref={modelRef} geometry={nodes.Corn.geometry} scale={0.5}>
                <meshStandardMaterial color="orange" />
            </mesh>
            <OrbitControls />
        </Canvas>
    );
};

export default BackgroundScene;