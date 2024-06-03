"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, TablePagination } from '@mui/material';

const TransactionsPage = () => {
  const router = useRouter();
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/loginito69');
          return;
        }

        const res = await fetch(`https://goldback.onrender.com/admin/transaction?limit=${rowsPerPage}&page=${page + 1}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch transactions');
        }

        const data = await res.json();
        setTransactions(data.data.transactions);
        setTotalCount(data.data.totalCount);
      } catch (error) {
        console.error('Error fetching transactions:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [page, rowsPerPage, router]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteTransaction = async (transactionId) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/transaction/${transactionId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete transaction');
      }

      setTransactions(transactions.filter(transaction => transaction._id !== transactionId));
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

  return (
    <Box className="container" pt={8} px={4}>
      <Typography variant="h4" gutterBottom>Transactions</Typography>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User Email</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map(transaction => (
                <TableRow key={transaction._id}>
                  <TableCell>{transaction._id}</TableCell>
                  <TableCell>{transaction.userId.email}</TableCell>
                  <TableCell>{transaction.amount}</TableCell>
                  <TableCell>{transaction.currency}</TableCell>
                  <TableCell>{transaction.status}</TableCell>
                  <TableCell>{transaction.type}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell>{new Date(transaction.createdAt).toLocaleString()}</TableCell>
                  <TableCell>
                    {/* <Button variant="contained" color="primary" onClick={() => router.push(`/adminito69/transactions/${transaction._id}`)}>
                      View
                    </Button> */}
                    <Button variant="contained" color="secondary" onClick={() => handleDeleteTransaction(transaction._id)} style={{ marginLeft: '8px' }}>
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={totalCount}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[10]}
        />
      </Paper>
    </Box>
  );
};

export default TransactionsPage;
