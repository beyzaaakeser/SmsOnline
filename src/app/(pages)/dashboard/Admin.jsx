'use client';
import { listenToAuthChanges } from '@/app/firebase/fetchUserData';
import Loading from '@/app/loading';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isRedirecting, setIsRedirecting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const unSub = listenToAuthChanges(
      (user) => {
        setUser(user);

        if (user) {
          setIsLoading(true); // Kullanıcı var ama userData'yı henüz çekmedik
        } else {
          setUserData(null);
          setIsLoading(false);
        }
      },
      (data) => {
        setUserData(data);
        setIsLoading(false); // userData çekildikten sonra yükleme bitiyor
      }
    );

    return () => {
      if (typeof unSub === 'function') {
        unSub();
      }
    };
  }, []);

  useEffect(() => {
    if (!isLoading && (!userData || userData.role !== 'ADMIN')) {
      setIsRedirecting(true);
      router.replace('/');
    }
  }, [isLoading, userData, router]);

  if (isLoading || isRedirecting) {
    return <Loading/>;
  }

  /*   if (!userData || userData.role !== 'ADMIN') {
    router.replace('/');
    return null;
  }
 */
/*   console.log(user);
  console.log(userData); */
  return null;
};

export default Admin;
