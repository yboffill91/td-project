import { HeaderBadge } from '@/components/ui';
import { visionPoints } from '@/features/about/constants';
import { Search } from 'lucide-react';
export const Vision = () => {
  return (
    <section className='py-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='max-w-3xl mx-auto text-center mb-24'>
          <HeaderBadge icon={Search} heading='Looking Forward' />
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='text-gray-900 dark:text-white'>Shaping the</span>
            <span className='block gradient-text pb-4'>Digital Future</span>
          </h2>
          <p className='text-xl text-gray-600 dark:text-gray-400'>
            Our commitment to excellence drives us to push boundaries and create
            innovative solutions
          </p>
        </div>

        {/* Vision Grid */}
        <div className='grid md:grid-cols-2 gap-8 container bg-gradient-to-b from-primary/10 to-background p-8 rounded-lg'>
          {visionPoints.map(({ icon: Icon, title, description }) => (
            <div
              key={title + description[5]}
              className='relative group bg-card backdrop-blur-sm rounded-xl p-6 hover:shadow-lg transition-all duration-300'
            >
              <div className='flex items-center gap-4'>
                <div className='p-2 bg-gradient-to-br from-blue-300 via-primary to-secondary-blue rounded-lg'>
                  <Icon className='size-8 text-primary-foreground' />
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>{title}</h3>
                  <p className='text-foreground/70'>{description}</p>
                </div>
              </div>
              <div className='absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
