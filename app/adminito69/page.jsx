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
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }
      setLoading(true);
      const limit = 10;
      const res = await fetch(`https://goldback.onrender.com/admin/user?limit=${limit}&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
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
    if (page * 10 < totalCount) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container pt-44 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Email</th>
                <th className="py-2 px-4 border-b">Country</th>
                <th className="py-2 px-4 border-b">Email Verified</th>
                <th className="py-2 px-4 border-b">KYC Verified</th>
                <th className="py-2 px-4 border-b">Account Type</th>
                <th className="py-2 px-4 border-b">Created At</th>
                <th className="py-2 px-4 border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <td className="py-2 px-4 border-b">{user.firstName} {user.lastName}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">{user.country}</td>
                  <td className="py-2 px-4 border-b">{user.emailVerified ? 'Yes' : 'No'}</td>
                  <td className="py-2 px-4 border-b">{user.kycVerified ? 'Yes' : 'No'}</td>
                  <td className="py-2 px-4 border-b">{user.type}</td>
                  <td className="py-2 px-4 border-b">{new Date(user.createdAt).toLocaleString()}</td>
                  <td className="py-2 px-4 border-b">
                    <Link href={`/adminito69/${user._id}`} className="text-blue-500 hover:underline">
                      VIEW
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
          disabled={page * 10 >= totalCount}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
