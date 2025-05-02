// Placeholder image URLs - replace with actual URLs in a real project
export const placeholderImages = {
    hero: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    trends1: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    trends2: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b',
    trends3: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    styleTips1: 'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93',
    styleTips2: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e',
    wardrobe1: 'https://images.unsplash.com/photo-1520591799316-6b30425429aa',
    wardrobe2: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105',
    lookbook1: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    lookbook2: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
};

export const featuredContent = {
    // Featured sections for Home page
    home: [
        {
            id: 1,
            title: 'Summer Fashion Trends 2023',
            description: 'Explore the hottest styles and must-have items for this summer season.',
            image: placeholderImages.trends1,
            link: '/trends'
        },
        {
            id: 2,
            title: 'Dress for Your Body Type',
            description: 'Learn how to highlight your best features with our expert styling tips.',
            image: placeholderImages.styleTips1,
            link: '/style-tips'
        },
        {
            id: 3,
            title: 'Essential Wardrobe Staples',
            description: 'Build a versatile wardrobe with these timeless pieces that never go out of style.',
            image: placeholderImages.wardrobe1,
            link: '/wardrobe-essentials'
        }
    ],

    // Latest blog posts
    blogPosts: [
        {
            id: 1,
            title: 'How to Mix and Match Patterns Like a Pro',
            description: 'Breaking down the art of pattern mixing for bold and sophisticated outfits.',
            image: placeholderImages.styleTips2,
            date: 'June 15, 2023',
            link: '/blog/mix-match-patterns'
        },
        {
            id: 2,
            title: 'The Return of 90s Fashion: What\'s Hot Now',
            description: 'See how 90s trends are making a major comeback in today\'s fashion scene.',
            image: placeholderImages.trends2,
            date: 'June 10, 2023',
            link: '/blog/90s-fashion-comeback'
        },
        {
            id: 3,
            title: 'Sustainable Fashion: Brands Making a Difference',
            description: 'Discover eco-friendly fashion brands that are changing the industry for the better.',
            image: placeholderImages.wardrobe2,
            date: 'June 5, 2023',
            link: '/blog/sustainable-fashion'
        }
    ],

    // Seasonal trends
    trends: [
        {
            id: 1,
            title: 'Spring/Summer 2023',
            description: 'Bright colors, flowing fabrics, and statement accessories define this season\'s look.',
            image: placeholderImages.trends1
        },
        {
            id: 2,
            title: 'Fall/Winter 2023',
            description: 'Cozy layers, rich textures, and earthy tones take center stage this fall and winter.',
            image: placeholderImages.trends2
        },
        {
            id: 3,
            title: 'Street Style Trends',
            description: 'From fashion week to everyday inspiration, see what fashionistas are wearing now.',
            image: placeholderImages.trends3
        }
    ],

    // Style tips
    styleTips: [
        {
            id: 1,
            title: 'Dress for Your Body Shape',
            description: 'Find the most flattering styles for your unique body type.',
            image: placeholderImages.styleTips1
        },
        {
            id: 2,
            title: 'Color Coordination Guide',
            description: 'Learn which colors work best together and how to create harmonious outfits.',
            image: placeholderImages.styleTips2
        },
        {
            id: 3,
            title: 'Accessorizing 101',
            description: 'The right accessories can transform any outfit from basic to extraordinary.',
            image: placeholderImages.trends3
        }
    ],

    // Wardrobe essentials
    wardrobe: [
        {
            id: 1,
            title: 'The Perfect White Shirt',
            description: 'A crisp white button-down is versatile enough for any occasion.',
            image: placeholderImages.wardrobe1
        },
        {
            id: 2,
            title: 'Denim That Lasts',
            description: 'Invest in quality jeans that will serve you for years to come.',
            image: placeholderImages.wardrobe2
        },
        {
            id: 3,
            title: 'Timeless Outerwear',
            description: 'From classic trench coats to leather jackets, these pieces never go out of style.',
            image: placeholderImages.lookbook1
        }
    ]
};

export const aboutContent = {
    mission: "StyleGuide is dedicated to helping everyone develop their personal style with confidence. We believe fashion should be accessible, fun, and a form of self-expression that empowers you to look and feel your best.",

    team: [
        {
            name: "Alex Morgan",
            role: "Fashion Editor",
            bio: "With over 10 years of experience in fashion journalism, Alex brings expert knowledge and a keen eye for emerging trends.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
        },
        {
            name: "Jordan Taylor",
            role: "Stylist",
            bio: "Jordan has worked with celebrities and everyday clients alike, crafting personalized looks that enhance individual style.",
            image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
        },
        {
            name: "Morgan Lee",
            role: "Content Creator",
            bio: "A fashion influencer turned content creator, Morgan specializes in accessible style for all budgets and occasions.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
        }
    ]
}; 