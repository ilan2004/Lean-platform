import React from 'react';
import Fab from "../FAB/Fab";
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="back-to-questions">
                <span className="cursor-pointer">{arrowSvg()}</span>
                <span className="back-text">Back to Questions</span>
            </div>

            <div className="questions-container">
                <div className="question-box bg-gray-500">
                    <div>
                        {/* Content here */}
                    </div>
                </div>
                <div className="question-box bg-gray-600">
                    <div>
                        {/* Content here */}
                    </div>
                </div>
            </div>

            <Fab />
        </div>
    )
}

export default Hero;

function arrowSvg() {
    return (
        <svg width="33" height="36" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.878681 20.8787C-0.292892 22.0502 -0.292893 23.9497 0.878681 25.1213L19.9706 44.2132C21.1421 45.3848 23.0416 45.3848 24.2132 44.2132C25.3848 43.0416 25.3848 41.1421 24.2132 39.9706L7.24264 23L24.2132 6.02944C25.3848 4.85786 25.3848 2.95837 24.2132 1.78679C23.0416 0.615221 21.1421 0.615221 19.9706 1.78679L0.878681 20.8787ZM43 20L3 20L3 26L43 26L43 20Z" fill="#F8F8F8" />
        </svg>
    )
}
