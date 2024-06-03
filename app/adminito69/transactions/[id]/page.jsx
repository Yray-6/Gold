"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Box, Typography, CircularProgress, Paper, Button } from '@mui/material';

const IndividualTransactionPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactionDetails = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/loginito69');
          return;
        }

        const res = await fetch(`https://goldback.onrender.com/admin/transaction/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch transaction details');
        }

        const data = await res.json();
        setTransaction(data.data);
      } catch (error) {
        console.error('Error fetching transaction details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactionDetails();
  }, [id, router]);

  const handleDeleteTransaction = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/transaction/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete transaction');
      }

      router.push('/adminito69/transactions');
    } catch (error) {
      console.error('Error deleting transaction:', error);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
        <Typography variant="h6" ml={2}>Loading...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h4" color="error">{error}</Typography>
      </Box>
    );
  }

  if (!transaction) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h4">Transaction not found</Typography>
      </Box>
    );
  }

  return (
    <Box className="container" pt={8} px={4}>
      <Typography variant="h4" gutterBottom>Transaction Details</Typography>
      <Paper className="p-4">
        <Typography variant="body1"><strong>ID:</strong> {transaction._id}</Typography>
        <Typography variant="body1"><strong>User ID:</strong> {transaction.userId}</Typography>
        <Typography variant="body1"><strong>Amount:</strong> {transaction.amount} {transaction.currency}</Typography>
        <Typography variant="body1"><strong>Fee:</strong> {transaction.fee}</Typography>
        <Typography variant="body1"><strong>Description:</strong> {transaction.description}</Typography>
        <Typography variant="body1"><strong>Status:</strong> {transaction.status}</Typography>
        <Typography variant="body1"><strong>Type:</strong> {transaction.type}</Typography>
        <Typography variant="body1"><strong>Created At:</strong> {new Date(transaction.createdAt).toLocaleString()}</Typography>
        <Typography variant="body1"><strong>Updated At:</strong> {new Date(transaction.updatedAt).toLocaleString()}</Typography>
        <Button variant="contained" color="secondary" onClick={handleDeleteTransaction} style={{ marginTop: '16px' }}>
          Delete Transaction
        </Button>
      </Paper>
    </Box>
  );
};

export default IndividualTransactionPage;
