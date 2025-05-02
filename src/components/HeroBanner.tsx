import React from 'react';
import './HeroBanner.css';

interface HeroBannerProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    buttonText?: string;
    buttonLink?: string;
    overlay?: boolean;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
    title,
    subtitle,
    backgroundImage,
    buttonText,
    buttonLink,
    overlay = true
}) => {
    return (
        <div
            className="hero-banner"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {overlay && <div className="hero-overlay"></div>}
            <div className="container hero-content">
                <h1 className="hero-title">{title}</h1>
                {subtitle && <p className="hero-subtitle">{subtitle}</p>}
                {buttonText && buttonLink && (
                    <a href={buttonLink} className="btn hero-btn">
                        {buttonText}
                    </a>
                )}
            </div>
        </div>
    );
};

export default HeroBanner; 