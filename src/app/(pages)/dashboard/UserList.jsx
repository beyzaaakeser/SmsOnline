'use client';
import React, { useEffect, useState, useMemo } from 'react';
import { getAllUsers } from '@/app/firebase/fetchAllUsers';
import Loading from '@/app/loading';
import { PiUsersFill } from 'react-icons/pi';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

 
  const colors = [
    'bg-red-400',
    'bg-blue-400',
    'bg-teal-400 ',
    'bg-slate-400',
    'bg-gray-400',
    'bg-green-400',
    'bg-yellow-400',
    'bg-purple-400',
    'bg-pink-400',
  ];

  return (
    <div className="min-h-screen container">
      <div>
        <div className="my-10 select-none">
          <div className="flex items-center gap-6 max-w-[250px] p-8 border border-orange-500 rounded-xl">
            <div>
              <PiUsersFill className="text-orange-500 text-2xl lg:text-5xl" />
            </div>
            <div className="flex flex-col justify-center mx-auto items-center">
              <p className="text-sm">Total Users</p>
              <p className="font-semibold text-xl">{users.length}</p>
            </div>
          </div>
        </div>

        {users.length > 0 ? (
          <div className="flex flex-col gap-4">
            {users.map((user) => {
             
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];

              return (
                <div
                  key={user.id}
                  className="border border-orange-500 rounded-xl p-4"
                >
                  <div className="flex items-center">
                    <div className="w-20 flex items-center justify-center select-none uppercase font-semibold text-xl">
                      <div
                        className={`size-12 flex items-center justify-center ${randomColor} text-white rounded-full cursor-pointer`}
                      >
                        {user.email.slice(0, 1).toUpperCase()}
                      </div>
                    </div>
                    <div className="flex flex-col w-72">
                      <p className="text-sm text-gray-500">Email</p>
                      <p>{user.email}</p>
                    </div>
                    <div className="flex flex-col w-44">
                      <p className="text-sm text-gray-500">User Role</p>
                      <p>{user.role}</p>
                    </div>
                    <div className="flex flex-col w-52">
                      <p className="text-sm text-gray-500">Create Date</p>
                      <p>{user.createdAt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <p>No users found.</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
