import React from 'react';
import { useSectionObserver } from '../hooks/useSectionObserver';
import './Section.css';

const Section = ({ children, id }) => {
    const { ref } = useSectionObserver(id);

    return (
        <section ref={ref} className="section">
            {children}
        </section>
    );
};

export default Section;