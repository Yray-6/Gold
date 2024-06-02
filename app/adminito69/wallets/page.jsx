"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const WalletsPage = () => {
  const router = useRouter();
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const walletsPerPage = 10;

  const fetchWallets = async (page) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/wallet?limit=${walletsPerPage}&page=${page}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch wallets');
      }

      const data = await res.json();
      setWallets(data.data.wallets);
      setTotalCount(data.data.totalCount);
    } catch (error) {
      console.error('Error fetching wallets:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallets(currentPage);
  }, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage * walletsPerPage < totalCount) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (wallets.length === 0) return <p>No wallets found</p>;

  return (
    <div className="container pt-16 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">User Wallets</h1>
      <p className="mb-4">Total Wallets: {totalCount}</p>
      <div className="bg-white shadow rounded p-6 mb-8">
        {wallets.map(wallet => (
          <div key={wallet._id} className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Wallet ID: {wallet._id}</h2>
            <p><strong>Total Balance:</strong> {wallet.totalBalance}</p>
            <p><strong>Cash Balance:</strong> {wallet.cashBalance}</p>
            <p><strong>Gold Balance:</strong> {wallet.goldBalance}</p>
            <p><strong>Profits:</strong> {wallet.profits}</p>
            <p><strong>Total Withdrawal:</strong> {wallet.totalWithdrawal}</p>
            <p><strong>Created At:</strong> {new Date(wallet.createdAt).toLocaleString()}</p>
            <p><strong>Updated At:</strong> {new Date(wallet.updatedAt).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage * walletsPerPage >= totalCount}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WalletsPage;
