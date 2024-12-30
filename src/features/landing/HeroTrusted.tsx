import Image from 'next/image';

export const HeroTrusted = () => {
  return (
    <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center lg:justify-start'>
      <div className='flex -space-x-2'>
        {[1, 2, 3, 4].map((i) => (
          <Image
            key={i}
            src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Felix${i}`}
            alt={`Client ${i}`}
            className='w-8 sm:w-10 h-8 sm:h-10 rounded-full border-2 border-white dark:border-gray-900'
            width={100}
            height={100}
          />
        ))}
      </div>
      <div className='flex items-center space-x-1'>
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 sm:h-5 w-4 sm:w-5 text-yellow-400'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
          </svg>
        ))}
        <span className='text-sm sm:text-base text-gray-600 dark:text-gray-300 ml-2'>
          5.0 (200+ verified reviews)
        </span>
      </div>
    </div>
  );
};
