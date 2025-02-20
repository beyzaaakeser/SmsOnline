'use client';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '.';

export const listenToAuthChanges = (setUser, setUserData) => {
  return onAuthStateChanged(auth, async (user) => {
    if (user) {
      setUser(user); 

      try {
        const userData = await fetchUserData(user.uid);
        setUserData(userData);
      } catch (error) {
        console.error("Kullanıcı verisi alınırken hata oluştu:", error);
        setUserData(null);
      }
    } else {
      setUser(null);
      setUserData(null);
    }
  });
};


export const fetchUserData = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    return userDoc.exists() ? userDoc.data() : null;
  } catch (error) {
    console.error('Error fetching user data:', error);
    return null;
  }
};


export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Error signing out:', error);
  }
};
