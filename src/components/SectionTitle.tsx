import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    subtitle,
    centered = false
}) => {
    return (
        <div className={`section-title ${centered ? 'centered' : ''}`}>
            <h2 className="section-title-heading">{title}</h2>
            {subtitle && <p className="section-title-subtitle">{subtitle}</p>}
            <div className="section-title-divider"></div>
        </div>
    );
};

export default SectionTitle; 