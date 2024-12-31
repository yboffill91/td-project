import { HeaderBadge } from '@/components/ui';
import { values } from '@/features/about/constants';
import { Gem } from 'lucide-react';

export const Values = () => {
  return (
    <section className='pt-0 pb-20'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <div className='max-w-3xl mx-auto text-center mb-12 sm:mb-24'>
          <HeaderBadge
            icon={Gem}
            heading='Our Foundation'
            variant='secondaryOrange'
          />
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6'>
            <span className='text-foreground'>Built on</span>
            <span className='gradient-orange'> Strong Values</span>
          </h2>
          <p className='text-lg sm:text-xl text-foreground/70'>
            More than principles, these are the cornerstones of our approach to
            digital excellence
          </p>
        </div>

        {/* Values Grid */}
        <div className='space-y-32'>
          {values.map((value) => (
            <div key={value.title} className='relative'>
              <div
                className={`flex flex-col items-center text-center md:text-left gap-12 md:gap-16 ${
                  value.align === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Icon Container */}
                <div className='w-full md:w-1/3 flex justify-center'>
                  <div
                    className={`relative group p-8 rounded-2xl transform transition-transform duration-500 hover:scale-105 ${value.accent}`}
                  >
                    <div
                      className={`w-24 h-24 bg-gradient-to-br ${value.color} rounded-xl p-4`}
                    >
                      <value.Icon className='w-full h-full text-[#030712' />
                    </div>
                    <div
                      className={`absolute inset-0 rounded-2xl blur-xl opacity-50 transition-opacity duration-500 group-hover:opacity-100 ${value.accent}`}
                    ></div>
                  </div>
                </div>

                {/* Content */}
                <div className='w-full md:w-2/3 space-y-6 flex flex-col items-center md:items-start'>
                  <div className='space-y-2'>
                    <h3 className='text-3xl font-bold text-foreground'>
                      {value.title}
                    </h3>
                    <p
                      className={`text-lg font-medium bg-gradient-to-br ${value.color} bg-clip-text text-transparent`}
                    >
                      {value.subtitle}
                    </p>
                  </div>
                  <p className='text-xl text-foreground/70 leading-relaxed'>
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
