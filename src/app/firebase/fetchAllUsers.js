'use client';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './index.js';

export async function getAllUsers() {
  try {
    const usersCollectionRef = collection(db, 'users');

    const querySnapshot = await getDocs(usersCollectionRef);

    const users = [];
    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      users.push({
        id: doc.id,
        ...userData,
        createdAt: userData.createdAt
          ? userData.createdAt.toDate().toLocaleString()
          : 'No date information',
      });
    });

    return users;
  } catch (error) {
    console.error('Error while fetching users:', error);
    return [];
  }
}

getAllUsers().then((users) => {
  console.log('All Users:', users);
});
