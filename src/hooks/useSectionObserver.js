import { useEffect, useRef } from 'react';

const useSectionObserver = (callback) => {
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    callback(entry.target);
                }
            });
        }, {
            threshold: 0.5 // Adjust this value based on when you want the callback to trigger
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [callback]);

    return sectionRef;
};

export default useSectionObserver;