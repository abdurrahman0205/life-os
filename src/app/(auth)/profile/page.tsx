'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';

const UserProfile = () => {
  const {data: session} = useSession()
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className=''>{`Welcome ${session?.user?.name} to LifeOS. This is your profile page. Please wait for more update on the function of the webapp. Sorry for the trouble.`}</div>
    </div>
  );
};

export default UserProfile;