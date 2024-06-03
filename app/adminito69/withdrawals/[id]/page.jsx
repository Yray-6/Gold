"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { CircularProgress, Box, Button, Typography, Paper, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const IndividualWithdrawalPage = () => {
  const router = useRouter();
  const { id } = useParams();
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

  const approveWithdrawal = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/withdrawal/approve/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'approved' }),
      });

      if (!res.ok) {
        throw new Error('Failed to approve withdrawal');
      }

      const data = await res.json();
      alert(data.message);
      setWithdrawal({ ...withdrawal, status: 'approved' });
    } catch (error) {
      console.error('Error approving withdrawal:', error);
      alert('Error approving withdrawal');
    }
  };

  const deleteWithdrawal = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/withdrawal/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete withdrawal');
      }

      const data = await res.json();
      alert(data.message);
      router.push('/adminito69/withdrawals'); // Redirect to the withdrawals list page
    } catch (error) {
      console.error('Error deleting withdrawal:', error);
      alert('Error deleting withdrawal');
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
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" minHeight="100vh" color="error.main">
        <ErrorOutlineIcon style={{ fontSize: 60 }} />
        <Typography variant="h4">{error}</Typography>
      </Box>
    );
  }

  if (!withdrawal) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h4">Withdrawal not found</Typography>
      </Box>
    );
  }

  return (
    <Box className="container" pt={8} px={4}>
      <Paper elevation={3} style={{ padding: 24 }}>
        <Typography variant="h4" gutterBottom>Withdrawal Details</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Amount:</strong> {withdrawal.amount} {withdrawal.currency}</Typography>
            <Typography variant="body1"><strong>Status:</strong> {withdrawal.status}</Typography>
            <Typography variant="body1"><strong>Transaction ID:</strong> {withdrawal.transactionId}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1"><strong>Wallet Address:</strong> {withdrawal.walletAddress}</Typography>
            <Typography variant="body1"><strong>Created At:</strong> {new Date(withdrawal.createdAt).toLocaleString()}</Typography>
            <Typography variant="body1"><strong>Updated At:</strong> {new Date(withdrawal.updatedAt).toLocaleString()}</Typography>
          </Grid>
        </Grid>
        <Box mt={4} display="flex" justifyContent="space-between">
          {withdrawal.status !== 'approved' && (
            <Button
              onClick={approveWithdrawal}
              variant="contained"
              color="primary"
              startIcon={<CheckCircleOutlineIcon />}
            >
              Approve Withdrawal
            </Button>
          )}
          <Button
            onClick={deleteWithdrawal}
            variant="contained"
            color="secondary"
            startIcon={<DeleteOutlineIcon />}
          >
            Delete Withdrawal
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default IndividualWithdrawalPage;
