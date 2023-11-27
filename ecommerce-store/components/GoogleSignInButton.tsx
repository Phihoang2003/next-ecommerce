import { FC, ReactNode } from 'react';
import { signIn } from 'next-auth/react';
import Button from './ui/button';

interface GoogleSignInButtonProps {
  children: ReactNode;
}
const GoogleSignInButton: FC<GoogleSignInButtonProps> = ({ children }) => {
  const loginWithGoogle = () => signIn("google",{
    callbackUrl:"http://localhost:3000/"
  })

  return (
    <Button onClick={loginWithGoogle} className='w-full'>
      {children}
    </Button>
  );
};

export default GoogleSignInButton;
