import type { BlogPost } from '.';

export const posts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-seo-ai-machine-learning',
    title: 'The Future of SEO: AI and Machine Learning',
    excerpt:
      'Discover how artificial intelligence is reshaping the landscape of search engine optimization.',
    category: 'seo',
    subCategory: 'seo-trends',
    readingTime: '5 min read',
    date: '2024-02-15',
    author: {
      id: '1',
      name: 'Sarah Chen',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      role: 'SEO Specialist',
      social: {
        twitter: 'https://twitter.com/sarahchen',
        linkedin: 'https://linkedin.com/in/sarahchen',
      },
    },
    image: '/src/assets/modulo1.png',
    featured: true,
    content: [
      {
        type: 'heading',
        content: 'Introduction to AI in SEO',
        metadata: { level: 2 },
      },
      {
        type: 'paragraph',
        content:
          'Artificial Intelligence is revolutionizing how we approach search engine optimization. From content creation to technical optimizations, AI tools are becoming indispensable for SEO professionals.',
      },
      {
        type: 'paragraph',
        content:
          'In this comprehensive guide, we will explore how AI and machine learning are transforming the SEO landscape and what it means for your digital strategy.',
      },
      {
        type: 'heading',
        content: 'Key Benefits of AI-Powered SEO',
        metadata: { level: 2 },
      },
      {
        type: 'list',
        content:
          'Automated keyword research\nContent optimization in real-time\nPredictive analytics for ranking\nPersonalized user experience',
        metadata: { ordered: false },
      },
      {
        type: 'quote',
        content:
          'AI is not just changing SEO; its redefining how we think about search intent and content creation.',
        metadata: { citation: 'John Mueller, Google Search Advocate' },
      },
      {
        type: 'heading',
        content: 'Implementation Strategies',
        metadata: { level: 2 },
      },
      {
        type: 'code',
        content: `{
  "ai_tools": {
    "content_optimization": true,
    "keyword_research": true,
    "technical_seo": true
  }
}`,
        metadata: { language: 'json' },
      },
    ],
    tableOfContents: [
      {
        id: 'introduction-to-ai-in-seo',
        text: 'Introduction to AI in SEO',
        level: 2,
      },
      {
        id: 'key-benefits-of-ai-powered-seo',
        text: 'Key Benefits of AI-Powered SEO',
        level: 2,
      },
      {
        id: 'implementation-strategies',
        text: 'Implementation Strategies',
        level: 2,
      },
    ],
    relatedPosts: ['2', '3'],
    seo: {
      title: 'The Future of SEO: AI and Machine Learning | TAMERDigital',
      description:
        'Explore how AI and machine learning are transforming SEO strategies. Learn about the latest trends and stay ahead of the competition.',
      canonical:
        'https://tamerdigital.com/blog/future-of-seo-ai-machine-learning',
    },
  },
  {
    id: '2',
    slug: 'digital-marketing-trends-2024',
    title: 'Digital Marketing Trends for 2024',
    excerpt:
      'Stay ahead of the curve with these emerging digital marketing strategies and trends.',
    category: 'marketing',
    subCategory: 'digital-marketing-strategies',
    readingTime: '7 min read',
    date: '2024-02-10',
    author: {
      id: '2',
      name: 'Mike Reynolds',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike',
      role: 'Marketing Director',
    },
    image: '/src/assets/modulo3.png',
    content: [],
    tableOfContents: [],
    relatedPosts: ['1', '3'],
    seo: {
      title: 'Digital Marketing Trends for 2024 | TAMERDigital',
      description:
        'Discover the top digital marketing trends that will shape 2024. Expert insights to help you plan your marketing strategy.',
      canonical: 'https://tamerdigital.com/blog/digital-marketing-trends-2024',
    },
  },
];
