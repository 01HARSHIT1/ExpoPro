import React from 'react';
import './FeaturedCard.css';

interface FeaturedCardProps {
    title: string;
    description: string;
    image: string;
    link?: string;
    linkText?: string;
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
    title,
    description,
    image,
    link,
    linkText = 'Read More'
}) => {
    return (
        <div className="featured-card">
            <div className="featured-card-image-container">
                <img src={image} alt={title} className="featured-card-image" />
            </div>
            <div className="featured-card-content">
                <h3 className="featured-card-title">{title}</h3>
                <p className="featured-card-description">{description}</p>
                {link && (
                    <a href={link} className="featured-card-link">
                        {linkText}
                    </a>
                )}
            </div>
        </div>
    );
};

export default FeaturedCard; 