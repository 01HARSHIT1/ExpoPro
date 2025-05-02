import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { placeholderImages } from '../assets/dummy';

const LookbookPage: React.FC = () => {
    return (
        <div className="lookbook-page">
            <HeroBanner
                title="Seasonal Lookbook"
                subtitle="Visual inspiration and outfit ideas for the current season."
                backgroundImage={placeholderImages.lookbook1}
            />
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Coming Soon</h2>
                <p>Our seasonal lookbook is being photographed and will be available soon.</p>
            </div>
        </div>
    );
};

export default LookbookPage; 