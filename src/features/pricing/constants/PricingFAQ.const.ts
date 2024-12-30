interface FAQ {
  question: string;
  answer: string;
  category: 'billing' | 'features' | 'support' | 'general';
}

export const faqs: FAQ[] = [
  {
    question: "What's included in each plan?",
    answer:
      'Each plan includes a different set of features tailored to specific business needs. The Starter plan covers essential SEO and digital marketing tools, while Growth and Enterprise plans offer more advanced features and personalized support.',
    category: 'features',
  },
  {
    question: 'Can I switch plans later?',
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. When you upgrade, you'll get immediate access to additional features. If you downgrade, the changes will take effect at the start of your next billing cycle.",
    category: 'billing',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied with our services within the first 30 days, we'll provide a full refund, no questions asked.",
    category: 'billing',
  },
  {
    question: 'What kind of support do you provide?',
    answer:
      'All plans include email support. Growth and Enterprise plans also include priority support with faster response times and dedicated account managers. Enterprise clients get 24/7 phone support.',
    category: 'support',
  },
  {
    question: 'How long are your contracts?',
    answer:
      'We offer flexible month-to-month contracts with no long-term commitment required. You can also choose annual billing to save 10% on your subscription.',
    category: 'general',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards (Visa, MasterCard, American Express) and PayPal. Enterprise clients can also pay via bank transfer.',
    category: 'billing',
  },
];

interface Category {
  id: string;
  name: string;
}

export const categories: Category[] = [
  { id: 'all', name: 'All Questions' },
  { id: 'billing', name: 'Billing' },
  { id: 'features', name: 'Features' },
  { id: 'support', name: 'Support' },
  { id: 'general', name: 'General' },
];
