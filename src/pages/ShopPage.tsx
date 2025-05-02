import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { placeholderImages } from '../assets/dummy';

const ShopPage: React.FC = () => {
    return (
        <div className="shop-page">
            <HeroBanner
                title="Shop Our Favorites"
                subtitle="Curated fashion selections and recommendations for every style and occasion."
                backgroundImage={placeholderImages.wardrobe1}
            />
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Coming Soon</h2>
                <p>Our shop is being stocked with amazing products. Check back soon!</p>
            </div>
        </div>
    );
};

export default ShopPage; 