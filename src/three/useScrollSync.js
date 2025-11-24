import { useEffect, useRef } from 'react';

const useScrollSync = (callback) => {
    const scrollRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const scrollY = window.scrollY;
                callback(scrollY);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [callback]);

    return scrollRef;
};

export default useScrollSync;