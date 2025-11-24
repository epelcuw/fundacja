import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Studio 3D Background</h1>
            <nav>
                <ul>
                    <li><a href="#section1">Section 1</a></li>
                    <li><a href="#section2">Section 2</a></li>
                    <li><a href="#section3">Section 3</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;