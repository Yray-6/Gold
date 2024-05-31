import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import { format } from 'date-fns';
import Box from '@mui/material/Box';

export default function Orders2() {
  const [transactions, setTransactions] = React.useState(null);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await fetch('https://goldback.onrender.com/wallet/transactions', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          // Sort transactions by date in descending order
          const sortedTransactions = result.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setTransactions(sortedTransactions);
        }
      } catch (error) {
        console.error('Failed to fetch transactions', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [router]);

  const renderTransactions = () => {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (!transactions) {
      return <div>Loading...</div>;
    }

    const transactionsToShow = showAllTransactions ? transactions : transactions.slice(0, 6);

    if (transactionsToShow.length === 0) {
      return (
        <div className='py-20 text-center'>
          <div className='mb-8'>No Transactions Yet</div>
          <div>
            <Link href="/dashboard/deposit" className='text-[0.8rem] px-4 py-2 bg-black text-white rounded-xl'>
              Deposit Funds <PaidIcon />
            </Link>
          </div>
        </div>
      );
    }

    return (
      <Box sx={{ overflowX: 'auto' }}>
        <Table size="small">
          <TableHead>
            <TableRow>
           
              <TableCell>Type</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactionsToShow.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{`$${transaction.amount}`}</TableCell>
                <TableCell align="right">{transaction.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    );
  };

  return (
    <React.Fragment>
      <Title>Transactions</Title>
      {renderTransactions()}
      {!showAllTransactions && transactions && transactions.length > 6 && (
        <Link
          color="primary"
          href="#"
          onClick={() => setShowAllTransactions(true)}
          sx={{ mt: 3, display: 'block', textAlign: 'center' }}
        >
          See more Transactions
        </Link>
      )}
    </React.Fragment>
  );
}
