"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from '@mui/material';

const AdminWalletsPage = () => {
  const router = useRouter();
  const [wallets, setWallets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAdminWallets = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/loginito69');
          return;
        }

        const res = await fetch('https://goldback.onrender.com/admin/admin-wallet', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch admin wallets');
        }

        const data = await res.json();
        setWallets(data.data);
      } catch (error) {
        console.error('Error fetching admin wallets:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdminWallets();
  }, [router]);

  const handleViewWallet = (id) => {
    router.push(`/adminito69/address/${id}`);
  };

  const handleDeleteWallet = async (id) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/admin-wallet/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete wallet');
      }

      // Remove the deleted wallet from the state
      setWallets(wallets.filter(wallet => wallet._id !== id));
    } catch (error) {
      console.error('Error deleting wallet:', error);
      setError(error.message);
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

  return (
    <Box className="container" pt={8} px={4}>
      <Typography variant="h4" gutterBottom>Admin Wallets</Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Network</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Coin</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wallets.map(wallet => (
                <TableRow key={wallet._id}>
                  <TableCell>{wallet._id}</TableCell>
                  <TableCell>{wallet.network}</TableCell>
                  <TableCell>{wallet.address}</TableCell>
                  <TableCell>{wallet.coin}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleViewWallet(wallet._id)}
                      sx={{ mr: 1 }}
                    >
                      Get Individual Wallet
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleDeleteWallet(wallet._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default AdminWalletsPage;
