export interface Author {
    name: string;
    image: string;
    id: string;
    role: string;
    bio?: string;
    social?: {
      twitter?: string;
      linkedin?: string;
    };
  }
  
  export interface SubCategory {
    id: string;
    label: string;
  }
  
  export interface Category {
    id: string;
    label: string;
    gradient: string;
    subCategories: SubCategory[];
  }
  
  export interface SEOMetadata {
    title: string;
    description: string;
    canonical: string;
  }
  
  export interface Post {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    category: string;
    subCategory?: string;
    readingTime: string;
    date: string;
    author: Author;
    image: string;
    featured?: boolean;
    views?: number;
    seo?: SEOMetadata;
  }
  
  export interface BlogPostContent {
    type: 'paragraph' | 'heading' | 'list' | 'quote' | 'code' | 'image' | 'table';
    content: string;
    metadata?: {
      level?: number; // For headings
      language?: string; // For code blocks
      ordered?: boolean; // For lists
      caption?: string; // For images
      citation?: string; // For quotes
      columns?: string[]; // For tables
    };
  }
  
  export interface BlogPost extends Post {
    content: BlogPostContent[];
    tableOfContents: {
      id: string;
      text: string;
      level: number;
    }[];
    relatedPosts: string[];
  }
  
  export interface AdditionalCategory {
    id: string;
    label: string;
    icon: React.ComponentType;
    gradient: string;
  }