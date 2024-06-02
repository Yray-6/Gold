"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const WithdrawalsPage = () => {
  const router = useRouter();
  const [withdrawals, setWithdrawals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchWithdrawals = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/login');
          return;
        }

        const res = await fetch(`https://goldback.onrender.com/admin/withdrawal?limit=${itemsPerPage}&page=${currentPage}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch withdrawals');
        }

        const data = await res.json();
        setWithdrawals(data.data.withdrawals);
        setTotalPages(Math.ceil(data.data.totalCount / itemsPerPage));
      } catch (error) {
        console.error('Error fetching withdrawals:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWithdrawals();
  }, [currentPage, router]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (withdrawals.length === 0) return <p>No withdrawals found</p>;

  return (
    <div className="container pt-16 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Withdrawals</h1>
      <div className="bg-white shadow rounded p-6 mb-8">
        <table className="min-w-full text-center bg-white">
          <thead>
            <tr>
              <th className="py-2">User</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Currency</th>
              <th className="py-2">Status</th>
              <th className="py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map((withdrawal) => (
              <tr key={withdrawal._id}>
                <td className="py-2">{withdrawal.userId.email}</td>
                <td className="py-2">{withdrawal.amount}</td>
                <td className="py-2">{withdrawal.currency}</td>
                <td className="py-2">{withdrawal.status}</td>
                <td className="py-2">
                  <button
                    onClick={() => router.push(`/adminito69/withdrawals/${withdrawal._id}`)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                  >
                    View Withdrawal
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-6">
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-l hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-r hover:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WithdrawalsPage;
