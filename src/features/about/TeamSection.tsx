'use client';

import { Users2 } from 'lucide-react';
import { useState } from 'react';
import { teamMembers } from '@/features/about/constants';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import { HeaderBadge } from '@/components/ui';

export const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('member1');

  return (
    <section className='py-24 mb-12'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='max-w-3xl mx-auto text-center mb-12 sm:mb-24'>
          <HeaderBadge
            variant='secondary'
            heading='Meet Our Team'
            icon={Users2}
          />
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6'>
            <span className='text-foreground'>The People Behind</span>
            <span className='block gradient-green'>Our Success</span>
          </h2>
          <p className='text-lg sm:text-xl text-foreground/70'>
            A team of passionate experts dedicated to transforming digital
            landscapes
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className='flex justify-center mb-8 sm:mb-16'>
          <div className='inline-flex flex-col sm:flex-row rounded-xl p-1 bg-card w-full sm:w-auto'>
            {teamMembers.map((member) => (
              <button
                key={member.id}
                onClick={() => setActiveTab(member.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === member.id
                    ? 'bg-white dark:bg-gray-800 text-secondary-green shadow-sm'
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {member.name}
              </button>
            ))}
          </div>
        </div>

        {/* Team Member Content */}
        <div className='relative min-h-[600px]'>
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: activeTab === member.id ? 1 : 0,
                y: activeTab === member.id ? 0 : 20,
              }}
              transition={{ duration: 0.3 }}
              className={`absolute inset-0 ${
                activeTab === member.id
                  ? 'pointer-events-auto'
                  : 'pointer-events-none'
              }`}
            >
              <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center'>
                {/* Image Section */}
                <div className='w-full lg:w-1/2'>
                  <div className='relative group'>
                    <div className='relative z-10 rounded-2xl overflow-hidden'>
                      <Image
                        src={member.image}
                        alt={member.name}
                        className='w-full h-auto transform transition-transform duration-500 group-hover:scale-105'
                        width={1000}
                        height={750}
                      />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary-violet/10 rounded-2xl blur-2xl -z-10 group-hover:blur-3xl transition-all duration-500'></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className='w-full lg:w-1/2 space-y-6 sm:space-y-8 text-center lg:text-left'>
                  <div>
                    <h3 className='text-2xl sm:text-3xl font-bold text-foreground mb-2'>
                      {member.name}
                    </h3>
                    <p className='text-lg sm:text-xl font-medium gradient-green mb-3 sm:mb-4'>
                      {member.role}
                    </p>
                    <p className='text-base sm:text-lg text-foreground/70'>
                      {member.description}
                    </p>
                  </div>

                  <blockquote className='border-l-4 border-secondary-green pl-6 py-2 my-8 italic text-lg text-foreground/70'>
                    &quot;{member.quote}&quot;
                  </blockquote>

                  <div className='space-y-4'>
                    <h4 className='text-lg font-semibold text-foreground'>
                      Expertise
                    </h4>
                    <div className='flex flex-wrap gap-2'>
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className='px-4 py-2 bg-secondary-green/10 text-secondary-green rounded-full text-sm'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex gap-4 pt-4 '>
                    {member.socials.facebook && (
                      <a
                        href={member.socials.facebook}
                        className='text-foreground/50 hover:text-secondary-green transition-colors'
                      >
                        <FaFacebook className='w-6 h-6' />
                      </a>
                    )}
                    {member.socials.instagram && (
                      <a
                        href={member.socials.instagram}
                        className='text-foreground/50 hover:text-secondary-green transition-colors'
                      >
                        <FaInstagram className='w-6 h-6' />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
