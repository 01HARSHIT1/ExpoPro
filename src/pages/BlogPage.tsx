import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { placeholderImages } from '../assets/dummy';

const BlogPage: React.FC = () => {
    return (
        <div className="blog-page">
            <HeroBanner
                title="Fashion Blog"
                subtitle="Detailed articles, style inspiration, and fashion insights."
                backgroundImage={placeholderImages.trends1}
            />
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Coming Soon</h2>
                <p>Our blog content is being curated and will be available shortly.</p>
            </div>
        </div>
    );
};

export default BlogPage; 