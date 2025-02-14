'use client';
import React, { useEffect, useState } from 'react';
import { getAllUsers } from '@/app/firebase/fetchAllUsers';
import Loading from '@/app/loading';
import { PiUsersFill } from 'react-icons/pi';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(users);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers();
        setUsers(usersData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="min-h-screen container">
      <div>
        <div className="my-10">
          <div className="flex items-center gap-6 max-w-[250px] p-8 border border-orange-500 rounded-xl">
            <div>
              <PiUsersFill className="text-orange-500 text-2xl lg:text-5xl" />
            </div>
            <div className="flex flex-col justify-center mx-auto items-center">
              <p className="text-sm">Total Users</p>
              <p className='font-semibold text-xl'> {users.length}</p>
            </div>
          </div>
        </div>
        
        {users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <strong>ID:</strong> {user.id} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Role:</strong> {user.role} <br />
                <strong>Create Date:</strong> {user.createdAt} <br />
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
