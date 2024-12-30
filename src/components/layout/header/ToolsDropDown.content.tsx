import { FaToolbox } from 'react-icons/fa';
import { tools } from '@/components/layout/header/utils';
import { ShimmerButton } from '@/components/ui';

export const ToolsDropDownContent = () => {
  return (
    <>
      <header className='lg:w-1/3 w-full lg:h-full h-auto p-4 flex flex-col items-center justify-center rounded-lg'>
        <span className='icons-hero-holder'>
          <FaToolbox className='text-foreground size-8' />
        </span>
        <h4 className='text-center text-xl mt-2 mb-4 text-foreground text-balance'>
          Elevate Your Business with Our Cutting-Edge Digital Tools!
        </h4>
        <p className='text-sm text-pretty'>
          In today’s fast-paced digital landscape, having the right tools at
          your disposal can make all the difference. Our suite of innovative
          solutions is designed to empower your business, enhance your online
          presence, and drive growth.
        </p>
      </header>
      <ul className='lg:w-2/3 w-full bg-background p-4 grid lg:grid-cols-2 grid-cols-1 gap-2 rounded-lg '>
        {tools.map(({ icon: IconElment, name, status }) => (
          <li key={name} className='flex items-center gap-2 mb-4'>
            <ShimmerButton
              variant={'secondary'}
              className={`w-full justify-start px-0 gap-4 hover:bg-card border-0 hover:border-0 hover:shadow-none hover:trans bg-transparent
                          ${
                            status === 'live'
                              ? 'text-foreground'
                              : 'text-foreground/30 pointer-events-none'
                          }
                        
                        `}
            >
              <span
                className={`
                  ${
                    status === 'live'
                      ? 'icons-hero-holder'
                      : 'icons-hero-holder-desabled'
                  }
                `}
              >
                <IconElment className='icons-hero size-2' />
              </span>
              <span className='font-medium'>{name}</span>
              <div className='flex items-center justify-center '>
                <span
                  className={` text-xs font-semibold rounded-full ${
                    status === 'live'
                      ? 'text-secondary-green bg-secondary-green/10 px-2'
                      : 'text-secondary-orange bg-secondary-orange/10 px-1'
                  }`}
                >
                  {status}
                </span>
              </div>
            </ShimmerButton>
          </li>
        ))}
      </ul>
    </>
  );
};
