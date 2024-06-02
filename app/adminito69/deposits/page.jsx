"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DepositsPage = () => {
  const [deposits, setDeposits] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
      setLoading(true);
      const limit = 10; // Adjust limit as needed
      const res = await fetch(`https://goldback.onrender.com/admin/deposit?limit=${limit}&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });
      const data = await res.json();
      setDeposits(data.data.deposits);
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
    if (page * deposits.length < totalCount) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container pt-44 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Deposits</h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full text-center bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">User</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Currency</th>
                <th className="py-2 px-4 border-b">Status</th>
             
                <th className="py-2 px-4 border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              {deposits.map((deposit) => (
                <tr key={deposit._id}>
                  <td className="py-2 px-4 border-b">{deposit.userId.firstName} {deposit.userId.lastName} ({deposit.userId.email})</td>
                  <td className="py-2 px-4 border-b">{deposit.amount}</td>
                  <td className="py-2 px-4 border-b">{deposit.currency}</td>
                  <td className="py-2 px-4 border-b">{deposit.status}</td>
            
                  <td className="py-2 px-4 border-b">
                    <Link href={`/adminito69/deposits/${deposit._id}`}className="text-blue-500 hover:underline">
                      View
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
          disabled={page * deposits.length >= totalCount}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DepositsPage;
