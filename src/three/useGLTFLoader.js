import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

const useGLTFLoader = (url) => {
    const [model, setModel] = useState(null);
    const loader = new GLTFLoader();

    useEffect(() => {
        const loadModel = async () => {
            try {
                const loadedModel = await loader.loadAsync(url);
                setModel(loadedModel);
            } catch (error) {
                console.error('Error loading GLTF model:', error);
            }
        };

        loadModel();
    }, [url, loader]);

    return model;
};

export default useGLTFLoader;