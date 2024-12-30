import { bouncy } from 'ldrs';

export const Loader = () => {
  bouncy.register();
  return (
    <main className='flex flex-col items-center justify-center h-screen w-screen bg-background gap-2'>
      <l-bouncy size={100} speed={1} color={'hsl(17 91% 60%)'} />

      <div className='h-1 w-96 bg-gradient-to-r from-transparent from-30% via-secondary-orange to-transparent to-70% animate-ping' />

      <h2 className='gradient-orange text-2xl font-bold'>Loading</h2>
    </main>
  );
};
