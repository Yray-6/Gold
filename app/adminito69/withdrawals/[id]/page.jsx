"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

const IndividualWithdrawalPage = () => {
  const router = useRouter();
  const { id } = useParams(); // Use useParams hook to get the id parameter
  const [withdrawal, setWithdrawal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchWithdrawalDetails = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            router.push('/loginito69');
            return;
          }

          const res = await fetch(`https://goldback.onrender.com/admin/withdrawal/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!res.ok) {
            throw new Error('Failed to fetch withdrawal details');
          }

          const data = await res.json();
          setWithdrawal(data.data);
        } catch (error) {
          console.error('Error fetching withdrawal details:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchWithdrawalDetails();
    }
  }, [id, router]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!withdrawal) return <p>Withdrawal not found</p>;

  return (
    <div className="container pt-16 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Withdrawal Details</h1>
      <div className="bg-white shadow rounded p-6 mb-8">
        <p><strong>Amount:</strong> {withdrawal.amount} {withdrawal.currency}</p>
        <p><strong>Status:</strong> {withdrawal.status}</p>
        <p><strong>Transaction ID:</strong> {withdrawal.transactionId}</p>
        <p><strong>Wallet Address:</strong> {withdrawal.walletAddress}</p>
        <p><strong>Created At:</strong> {new Date(withdrawal.createdAt).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(withdrawal.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};

export default IndividualWithdrawalPage;
