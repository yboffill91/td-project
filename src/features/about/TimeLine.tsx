import { journeySteps } from '@/features/about/constants';

export const TimeLine = () => {
  return (
    <div className='relative space-y-16'>
      {journeySteps.map(
        (
          { title, year, description, icon: IconComponent, color, accent },
          index
        ) => (
          <div key={title + year} className='relative group'>
            <div
              className={`relative z-10 mx-auto max-w-5xl rounded-xl p-6 sm:p-8 bg-background/50 backdrop-blur-sm  transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${accent}`}
            >
              {/* year badge */}
              <div
                className={`absolute -top-4 left-8 px-4 py-1.5 rounded-full bg-gradient-to-br ${color}`}
              >
                <span className='text-primary-foreground font-semibold'>
                  {year}
                </span>
              </div>

              {/* content */}
              <div className='flex gap-4 sm:gap-6 items-start pt-4'>
                <span className={`p-2.5 rounded-lg bg-gradient-to-br ${color}`}>
                  <IconComponent className='size-8 text-primary-foreground' />
                </span>
                <div className='flex1'>
                  <h3 className='text-xl font-semibold text-secondary-foreground'>
                    {title}
                  </h3>
                  <p className='text-lg text-foreground/70 mb-4'>
                    {description}
                  </p>
                </div>
              </div>
              {index !== journeySteps.length - 1 && (
                <div
                  className={`absolute left-1/2 bottom-0 w-px h-16 bg-gradient-to-b from-primary/20 to-transparent transform translate-y-full bg-opacity-10`}
                />
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
};
