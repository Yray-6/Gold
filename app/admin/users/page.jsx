// pages/admin/users.js

"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const limit = 1;
      const res = await fetch(`https://goldback.onrender.com/admin/user?limit=${limit}&page=${page}`);
      const data = await res.json();
      setUsers(data.data.users);
      setTotalCount(data.data.totalCount);
      setLoading(false);
    };

    fetchData();
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  
  const handleNextPage = () => {
    if (page * users.length < totalCount) {
      setPage(page + 1);
    }
  };


  return (
    <div className="container pt-44 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ul className="space-y-4">
          {users.map((user) => (
            <li key={user._id} className="bg-white shadow rounded p-4">
              <Link href={`/admin/user/${user._id}`}>
                <a className="text-blue-500 hover:underline">
                  {user.firstName} {user.lastName} - {user.email}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={page <= 1}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={page * users.length >= totalCount}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
