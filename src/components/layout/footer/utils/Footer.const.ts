import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from 'react-icons/fa';

export const footerLinks = {
  tools: [  
    { label: 'Web Cost Calculator', href: '/tools/web-cost-calculator' },
    { label: 'SEO Scout', href: '/tools/seo-scout' },
    { label: 'Website Builder', href: '/tools/website-builder' },
    { label: 'GMB Manager', href: '/tools/gmb-manager' },
    { label: 'AI Chat Connect', href: '/tools/ai-chat' },
    { label: 'Content Writer', href: '/tools/content-writer' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  services: [
    { label: 'SEO Services', href: '/services/seo' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Content Creation', href: '/services/content' },
    { label: 'Local SEO', href: '/services/local-seo' },
    { label: 'Social Media', href: '/services/social-media' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'Sitemap', href: '/sitemap.xml' },
  ],
};

export const socialLinks = [
  {
    icon: FaFacebook,
    href: '#',
    label: 'Facebook',
  },
  {
    icon: FaWhatsapp,
    href: '#',
    label: 'WhatsApp',
  },
  {
    icon: FaTwitter,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: FaTiktok,
    href: '#',
    label: 'TikTok',
  },
  {
    icon: FaInstagram,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: FaLinkedin,
    href: '#',
    label: 'LinkedIn',
  },
  {
    icon: FaYoutube,
    href: '#',
    label: 'YouTube',
  },
];
