import React, { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import BackgroundScene from '../scenes/BackgroundScene';

const ScrollContainer = () => {
    const scrollRef = useRef();
    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            // Logic to handle scroll events and update animations
        };

        const unsubscribe = scrollYProgress.onChange(handleScroll);
        return () => unsubscribe();
    }, [scrollYProgress]);

    return (
        <div ref={scrollRef} style={{ height: '100vh', overflow: 'hidden' }}>
            <Canvas>
                <BackgroundScene />
            </Canvas>
        </div>
    );
};

export default ScrollContainer;