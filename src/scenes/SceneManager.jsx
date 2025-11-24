import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTFLoader } from '../three/useGLTFLoader';
import { useScrollSync } from '../three/useScrollSync';

const SceneManager = () => {
    const { scene } = useGLTFLoader('/models/corn.glb');
    const scrollRef = useRef();

    useScrollSync(scrollRef);

    useEffect(() => {
        if (scene) {
            // Set up scene properties or animations here
        }
    }, [scene]);

    return (
        <div ref={scrollRef} style={{ height: '100vh', overflowY: 'scroll' }}>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                {scene && <primitive object={scene} />}
            </Canvas>
            {/* Additional sections can be added here */}
        </div>
    );
};

export default SceneManager;