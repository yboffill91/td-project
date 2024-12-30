import React from 'react';

export const BackgroundEffect = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary-purple/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2' />
      <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-secondary-orange/10 to-secondary-pastel/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2' />
    </div>
  );
};
