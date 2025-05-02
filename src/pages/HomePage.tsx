import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import SectionTitle from '../components/SectionTitle';
import FeaturedCard from '../components/FeaturedCard';
import { placeholderImages, featuredContent } from '../assets/dummy';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home-page">
            <HeroBanner
                title="Elevate Your Style"
                subtitle="Discover the latest trends, style tips, and fashion inspiration to express yourself through clothing."
                backgroundImage={placeholderImages.hero}
                buttonText="Explore Now"
                buttonLink="/trends"
            />

            <section className="section featured-sections">
                <div className="container">
                    <SectionTitle
                        title="Style Guide"
                        subtitle="Your ultimate guide to fashion and personal style that helps you look and feel your best."
                        centered={true}
                    />

                    <div className="grid grid-3">
                        {featuredContent.home.map(item => (
                            <FeaturedCard
                                key={item.id}
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Find Your Personal Style</h2>
                        <p className="cta-description">
                            Discover what works best for you with our expert guidance and build a wardrobe that makes you confident.
                        </p>
                        <Link to="/style-tips" className="btn">Get Started</Link>
                    </div>
                </div>
            </section>

            <section className="section blog-preview">
                <div className="container">
                    <SectionTitle
                        title="Latest from the Blog"
                        subtitle="Dive deeper into fashion topics with our latest articles and guides."
                        centered={true}
                    />

                    <div className="grid grid-3">
                        {featuredContent.blogPosts.map(post => (
                            <div className="blog-post-card" key={post.id}>
                                <div className="blog-post-image-container">
                                    <img src={post.image} alt={post.title} className="blog-post-image" />
                                </div>
                                <div className="blog-post-content">
                                    <span className="blog-post-date">{post.date}</span>
                                    <h3 className="blog-post-title">{post.title}</h3>
                                    <p className="blog-post-description">{post.description}</p>
                                    <Link to={post.link} className="blog-post-link">Read More</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="blog-view-all">
                        <Link to="/blog" className="btn btn-outline">View All Posts</Link>
                    </div>
                </div>
            </section>

            <section className="section newsletter-section">
                <div className="container">
                    <div className="newsletter-container">
                        <div className="newsletter-content">
                            <h2 className="newsletter-title">Get Style Updates</h2>
                            <p className="newsletter-description">
                                Subscribe to our newsletter for the latest fashion trends, style tips, and exclusive content.
                            </p>
                        </div>
                        <form className="newsletter-form-inline">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="newsletter-input-inline"
                                required
                            />
                            <button type="submit" className="btn newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage; 