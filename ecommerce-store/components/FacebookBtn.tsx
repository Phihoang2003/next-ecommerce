import { FC, ReactNode } from 'react';

import { signIn } from 'next-auth/react';
import Button from './ui/button';

interface Facebook {
  children: ReactNode;
}
const FacebookBtn: FC<Facebook> = ({ children }) => {
  const loginWithFacebook = () => signIn("facebook",{
    callbackUrl:"http://localhost:3000/admin"
  })
  

  return (
    <Button onClick={loginWithFacebook} className='w-full mt-3'>
      {children}
    </Button>
  );
};

export default FacebookBtn;
