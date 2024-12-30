import { Separator, ShimmerButton } from '@/components/ui';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { useSignUpServices } from '@/features/auth/services';

export const AuthButtons = () => {
  const { handleFacebookSignIn, handleGoogleSignIn } = useSignUpServices();
  return (
    <>
      <div className='flex items-center justify-center gap-2'>
        <ShimmerButton variant='secondary' onClick={handleFacebookSignIn}>
          <FaFacebook />
        </ShimmerButton>
        <ShimmerButton onClick={handleGoogleSignIn}>
          <div className='flex items-center gap-2'>
            <FaGoogle />
            Sign In with Google
          </div>
        </ShimmerButton>
      </div>
      <div>
        <p className='w-full text-center p-4 font-thin text-foreground/70'>
          Or you can use
        </p>
        <Separator className='mb-12' />
      </div>
    </>
  );
};
