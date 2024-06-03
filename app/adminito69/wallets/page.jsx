"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Button, Box, Typography } from '@mui/material';

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

  if (wallets.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <Typography variant="h4">No wallets found</Typography>
      </Box>
    );
  }

  return (
    <Box className="container" pt={8} px={4}>
      <Typography variant="h3" gutterBottom>User Wallets</Typography>
      <Typography variant="body1" mb={2}>Total Wallets: {totalCount}</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Wallet ID</strong></TableCell>
              <TableCell><strong>Total Balance</strong></TableCell>
              <TableCell><strong>Cash Balance</strong></TableCell>
              <TableCell><strong>Gold Balance</strong></TableCell>
              <TableCell><strong>Profits</strong></TableCell>
              <TableCell><strong>Total Withdrawal</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {wallets.map((wallet) => (
              <TableRow key={wallet._id}>
                <TableCell>{wallet._id}</TableCell>
                <TableCell>{wallet.totalBalance}</TableCell>
                <TableCell>{wallet.cashBalance}</TableCell>
                <TableCell>{wallet.goldBalance}</TableCell>
                <TableCell>{wallet.profits}</TableCell>
                <TableCell>{wallet.totalWithdrawal}</TableCell>
                <TableCell>
                  <Link href={`/adminito69/wallets/${wallet._id}`} passHref>
                    <Button variant="contained" color="primary">
                      View
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          variant="contained"
          color="primary"
        >
          Previous
        </Button>
        <Button
          onClick={handleNextPage}
          disabled={currentPage * walletsPerPage >= totalCount}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default WalletsPage;
