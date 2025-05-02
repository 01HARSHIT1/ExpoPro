import React from 'react';
import HeroBanner from '../components/HeroBanner';
import SectionTitle from '../components/SectionTitle';
import FeaturedCard from '../components/FeaturedCard';
import { placeholderImages, featuredContent } from '../assets/dummy';
import './TrendsPage.css';

const TrendsPage: React.FC = () => {
    return (
        <div className="trends-page">
            <HeroBanner
                title="Fashion Trends"
                subtitle="Stay ahead of the curve with the latest styles and must-have items for every season."
                backgroundImage={placeholderImages.trends2}
            />

            <section className="section seasonal-trends">
                <div className="container">
                    <SectionTitle
                        title="Seasonal Trends"
                        subtitle="Discover what's hot right now and what to look forward to in the upcoming seasons."
                        centered={true}
                    />

                    <div className="grid grid-3">
                        {featuredContent.trends.map(trend => (
                            <FeaturedCard
                                key={trend.id}
                                title={trend.title}
                                description={trend.description}
                                image={trend.image}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="section trend-report">
                <div className="container">
                    <div className="trend-report-content">
                        <div className="trend-report-image">
                            <img src={placeholderImages.trends3} alt="Fashion Week Highlights" />
                        </div>
                        <div className="trend-report-text">
                            <h2 className="trend-report-title">Fashion Week Highlights</h2>
                            <p className="trend-report-description">
                                The runways of New York, London, Milan, and Paris set the tone for what's to come in fashion.
                                This season, we're seeing a return to bold colors, statement accessories, and silhouettes that
                                combine comfort with style.
                            </p>
                            <p className="trend-report-description">
                                Designers are embracing sustainability more than ever, with upcycled materials and ethical
                                production methods taking center stage. Meanwhile, nostalgic references from the 90s and early
                                2000s continue to influence contemporary designs.
                            </p>
                            <a href="#" className="btn">Read Full Report</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section trend-categories">
                <div className="container">
                    <SectionTitle
                        title="Trend Categories"
                        subtitle="Explore specific trend directions across different style categories."
                    />

                    <div className="trend-category-tabs">
                        <div className="tab-buttons">
                            <button className="tab-button active">Apparel</button>
                            <button className="tab-button">Accessories</button>
                            <button className="tab-button">Footwear</button>
                            <button className="tab-button">Colors</button>
                        </div>

                        <div className="tab-content active">
                            <div className="grid grid-2">
                                <div className="trend-category-item">
                                    <img src={placeholderImages.trends1} alt="Oversized Silhouettes" />
                                    <h3>Oversized Silhouettes</h3>
                                    <p>Comfort meets style with relaxed fits and voluminous proportions in tops, jackets, and pants.</p>
                                </div>
                                <div className="trend-category-item">
                                    <img src={placeholderImages.lookbook1} alt="Cutouts & Layering" />
                                    <h3>Cutouts & Layering</h3>
                                    <p>Strategic cutouts and creative layering techniques add dimension and visual interest to outfits.</p>
                                </div>
                                <div className="trend-category-item">
                                    <img src={placeholderImages.lookbook2} alt="Statement Sleeves" />
                                    <h3>Statement Sleeves</h3>
                                    <p>Puffed, ruffled, or balloon sleeves make a comeback, adding drama to otherwise simple pieces.</p>
                                </div>
                                <div className="trend-category-item">
                                    <img src={placeholderImages.trends3} alt="Sustainable Fabrics" />
                                    <h3>Sustainable Fabrics</h3>
                                    <p>Eco-friendly materials from organic cotton to recycled polyester are becoming industry standards.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section celebrity-style">
                <div className="container">
                    <SectionTitle
                        title="Celebrity & Influencer Style"
                        subtitle="Get inspired by the trendsetters making waves in the fashion world."
                        centered={true}
                    />

                    <div className="celebrity-style-grid">
                        <div className="celebrity-style-card large">
                            <img src={placeholderImages.trends2} alt="Celebrity Style" />
                            <div className="celebrity-style-overlay">
                                <h3>Red Carpet Moments</h3>
                                <p>Award season's most memorable looks and how to incorporate elements into your wardrobe.</p>
                            </div>
                        </div>
                        <div className="celebrity-style-card">
                            <img src={placeholderImages.styleTips1} alt="Influencer Trends" />
                            <div className="celebrity-style-overlay">
                                <h3>Instagram Inspiration</h3>
                                <p>Top fashion influencers and their signature styles.</p>
                            </div>
                        </div>
                        <div className="celebrity-style-card">
                            <img src={placeholderImages.styleTips2} alt="Street Style" />
                            <div className="celebrity-style-overlay">
                                <h3>Street Style Stars</h3>
                                <p>Candid fashion moments from stylish celebrities off the red carpet.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TrendsPage; 