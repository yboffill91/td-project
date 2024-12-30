export interface Comment {
  id: string;
  isPinned?: boolean;
  author: {
    id: string;
    name: string;
    image: string;
  };
  content: string;
  date: string;
  likes: number;
  replies?: Comment[];
}

export const ArrOfComments: Comment[] = [
  {
    id: '1',
    isPinned: true,
    author: {
      id: 'john123',
      name: 'John Smith',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
    },
    content:
      'Great article! The insights about AI in SEO are particularly interesting. Looking forward to implementing some of these strategies.',
    date: '2024-02-15T10:30:00Z',
    likes: 5,
    replies: [
      {
        id: '2',
        author: {
          id: 'sarah456',
          name: 'Sarah Chen',
          image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        },
        content:
          'Totally agree! The AI tools mentioned have been game-changers for our SEO strategy.',
        date: '2024-02-15T11:15:00Z',
        likes: 2,
      },
    ],
  },
];
