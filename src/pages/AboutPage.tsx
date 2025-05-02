import React from 'react';
import HeroBanner from '../components/HeroBanner';
import SectionTitle from '../components/SectionTitle';
import { FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';
import { placeholderImages, aboutContent } from '../assets/dummy';
import './AboutPage.css';

const AboutPage: React.FC = () => {
    return (
        <div className="about-page">
            <HeroBanner
                title="About StyleGuide"
                subtitle="Learn about our mission, our team, and our approach to fashion and personal style."
                backgroundImage={placeholderImages.lookbook2}
            />

            <section className="section about-mission">
                <div className="container">
                    <div className="mission-content">
                        <div className="mission-text">
                            <SectionTitle
                                title="Our Mission"
                                subtitle="We believe fashion should be accessible, personal, and empowering."
                            />
                            <p className="mission-description">
                                {aboutContent.mission}
                            </p>
                            <div className="mission-values">
                                <div className="mission-value">
                                    <h3>Inclusivity</h3>
                                    <p>Fashion is for everyone, regardless of age, size, gender, or background.</p>
                                </div>
                                <div className="mission-value">
                                    <h3>Sustainability</h3>
                                    <p>We advocate for mindful consumption and environmentally responsible choices.</p>
                                </div>
                                <div className="mission-value">
                                    <h3>Authenticity</h3>
                                    <p>True style comes from expressing your unique personality and preferences.</p>
                                </div>
                            </div>
                        </div>
                        <div className="mission-image">
                            <img src={placeholderImages.styleTips2} alt="Our Mission" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="section about-team">
                <div className="container">
                    <SectionTitle
                        title="Meet Our Team"
                        subtitle="The fashion enthusiasts and experts behind StyleGuide."
                        centered={true}
                    />

                    <div className="team-grid">
                        {aboutContent.team.map((member, index) => (
                            <div className="team-member" key={index}>
                                <div className="team-member-photo">
                                    <img src={member.image} alt={member.name} />
                                </div>
                                <div className="team-member-info">
                                    <h3>{member.name}</h3>
                                    <span className="team-member-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-info">
                            <SectionTitle
                                title="Get In Touch"
                                subtitle="We'd love to hear from you! Reach out with questions, feedback, or collaboration ideas."
                            />
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <h3>Email</h3>
                                    <p>hello@styleguide.com</p>
                                </div>
                                <div className="contact-method">
                                    <h3>Follow Us</h3>
                                    <div className="social-links">
                                        <a href="https://instagram.com" className="social-link" aria-label="Instagram">
                                            <FaInstagram /> @styleGuide
                                        </a>
                                        <a href="https://pinterest.com" className="social-link" aria-label="Pinterest">
                                            <FaPinterest /> @styleGuide
                                        </a>
                                        <a href="https://twitter.com" className="social-link" aria-label="Twitter">
                                            <FaTwitter /> @styleGuide
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form-container">
                            <form className="contact-form">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" id="subject" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea id="message" rows={5} required></textarea>
                                </div>
                                <button type="submit" className="btn">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage; 