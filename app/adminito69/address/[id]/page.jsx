"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Box, Typography, CircularProgress, Paper, Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const WalletDetailsPage = () => {
  const router = useRouter();
  const { id } = useParams(); // Use useParams hook to get the id parameter
  const [wallet, setWallet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateSuccess, setUpdateSuccess] = useState(null);

  useEffect(() => {
    const fetchWalletDetails = async () => {
      if (!id) return;

      setLoading(true);
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/loginito69');
          return;
        }

        const res = await fetch(`https://goldback.onrender.com/admin/admin-wallet/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch wallet details');
        }

        const data = await res.json();
        setWallet(data.data);
      } catch (error) {
        console.error('Error fetching wallet details:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWalletDetails();
  }, [id, router]);

  const handleUpdateWallet = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/populate-admin-wallet/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ address: values.address }),
      });

      if (!res.ok) {
        throw new Error('Failed to update wallet address');
      }

      const data = await res.json();
      setWallet(data.data);
      setUpdateSuccess('Wallet address updated successfully');
      router.push("/adminito69/address")
    } catch (error) {
      console.error('Error updating wallet address:', error);
      setError(error.message);
    } finally {
      setSubmitting(false);
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
    return null;
  }

  return (
    <Box className="container" pt={8} px={4}>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <Typography variant="h4" gutterBottom>Wallet Details</Typography>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Typography variant="h6"><strong>ID:</strong> {wallet._id}</Typography>
        <Typography variant="h6"><strong>Network:</strong> {wallet.network}</Typography>
        <Typography variant="h6"><strong>Address:</strong> {wallet.address}</Typography>
        <Typography variant="h6"><strong>Coin:</strong> {wallet.coin}</Typography>
      </Paper>
      <Typography variant="h5" gutterBottom>Update Wallet Address</Typography>
      <Formik
        initialValues={{ address: wallet.address }}
        validationSchema={Yup.object({
          address: Yup.string().required('Address is required'),
        })}
        onSubmit={handleUpdateWallet}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box mb={2}>
              <Field
                name="address"
                as={TextField}
                label="Wallet Address"
                fullWidth
                variant="outlined"
                helperText={<ErrorMessage name="address" />}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Updating...' : 'Update Address'}
            </Button>
            {updateSuccess && (
              <Typography variant="body1" color="success" mt={2}>
                {updateSuccess}
              </Typography>
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default WalletDetailsPage;
