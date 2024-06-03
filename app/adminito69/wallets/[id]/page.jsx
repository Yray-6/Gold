"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Box, Typography, CircularProgress, Paper, Button, TextField, Alert } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const IndividualWalletPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [formValues, setFormValues] = useState({
    totalBalance: '',
    cashBalance: '',
    goldBalance: '',
    profits: '',
    totalWithdrawal: ''
  });

  const fetchWalletDetails = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/wallet/${id}`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch wallet details');
      }

      const data = await res.json();
      setWallet(data.data);
      setFormValues({
        totalBalance: data.data.totalBalance,
        cashBalance: data.data.cashBalance,
        goldBalance: data.data.goldBalance,
        profits: data.data.profits,
        totalWithdrawal: data.data.totalWithdrawal
      });
    } catch (error) {
      console.error('Error fetching wallet details:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchWalletDetails();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUpdating(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/wallet/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formValues),
      });

      if (!res.ok) {
        throw new Error('Failed to update wallet');
      }

      const updatedWallet = await res.json();
      setWallet(updatedWallet.data);
      setSuccessMessage('Wallet updated successfully!');
    } catch (error) {
      console.error('Error updating wallet:', error);
      setError(error.message);
    } finally {
      setUpdating(false);
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

  if (!wallet) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h4">Wallet not found</Typography>
      </Box>
    );
  }

  return (
    <Box className="container" pt={8} px={4}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <Paper className="bg-white shadow rounded p-6 mb-8">
        <Typography variant="h4" gutterBottom>Wallet Details</Typography>
        <Typography variant="body1"><strong>Wallet ID:</strong> {wallet._id}</Typography>
        <Typography variant="body1"><strong>Total Balance:</strong> {wallet.totalBalance}</Typography>
        <Typography variant="body1"><strong>Cash Balance:</strong> {wallet.cashBalance}</Typography>
        <Typography variant="body1"><strong>Gold Balance:</strong> {wallet.goldBalance}</Typography>
        <Typography variant="body1"><strong>Profits:</strong> {wallet.profits}</Typography>
        <Typography variant="body1"><strong>Total Withdrawal:</strong> {wallet.totalWithdrawal}</Typography>
      </Paper>
      <Paper className="bg-white shadow rounded p-6">
        <Typography variant="h5" gutterBottom>Update Wallet</Typography>
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        <form onSubmit={handleSubmit}>
          <TextField
            label="Total Balance"
            name="totalBalance"
            value={formValues.totalBalance}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Cash Balance"
            name="cashBalance"
            value={formValues.cashBalance}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Gold Balance"
            name="goldBalance"
            value={formValues.goldBalance}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Profits"
            name="profits"
            value={formValues.profits}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Total Withdrawal"
            name="totalWithdrawal"
            value={formValues.totalWithdrawal}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} disabled={updating}>
            {updating ? 'Updating...' : 'Update Wallet'}
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default IndividualWalletPage;
