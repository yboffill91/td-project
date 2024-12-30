interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  quote: string;
  expertise: string[];
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'member1',
    name: 'Jorge R Sanchez',
    role: 'CEO & Founder',
    description:
      "With a unique journey from Cuba to digital entrepreneurship, Jorge brings a fresh perspective to digital marketing. His experience in software development and digital strategy has shaped TAMERDigital's innovative approach to business growth.",
    quote:
      'Success in digital marketing comes from understanding both technology and human behavior.',
    expertise: [
      'Digital Strategy',
      'Business Development',
      'Technical Leadership',
    ],
    image: '/assets/team/Jorge_R_Sanchez.jpg',
    socials: {
      facebook: '#',
      instagram: '#',
    },
  },
  {
    id: 'member2',
    name: 'Thais Same',
    role: 'Head of CEO & General Manager',
    description:
      "Leading our operational excellence, Thais brings strategic vision and organizational expertise to ensure seamless delivery of our digital solutions. Her leadership drives our team's efficiency and client success.",
    quote: 'Excellence is not just about what we do, but how we do it.',
    expertise: ['Operations Management', 'Team Leadership', 'Client Relations'],
    image: '/assets/team/Thais.jpeg',
    socials: {
      facebook: '#',
      instagram: '#',
    },
  },
  {
    id: 'member3',
    name: 'Juan Pablo Caballero',
    role: 'Digital Marketing Leader',
    description:
      'Spearheading our digital marketing initiatives, Juan Pablo combines creative strategy with data-driven insights to deliver exceptional results. His expertise in digital marketing drives measurable growth for our clients.',
    quote:
      'Digital marketing is about creating meaningful connections through data-driven strategies.',
    expertise: [
      'Digital Marketing',
      'Campaign Strategy',
      'Performance Analytics',
    ],
    image: '/assets/team/Juan_P_Caballero.jpg',
    socials: {
      facebook: '#',
      instagram: '#',
    },
  },
];
