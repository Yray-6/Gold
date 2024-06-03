"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography, Paper, Button, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const CreateWalletPage = () => {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleCreateWallet = async (values, { setSubmitting }) => {
    setError(null);
    setSuccessMessage(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch('https://goldback.onrender.com/admin/admin-wallet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error('Failed to create wallet');
      }

      const data = await res.json();
      setSuccessMessage('Wallet created successfully');
    } catch (error) {
      console.error('Error creating wallet:', error);
      setError(error.message);
    } finally {
      setSubmitting(false);
    }
  };

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
      <Typography variant="h4" gutterBottom>Create New Wallet</Typography>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Formik
          initialValues={{
            network: '',
            address: '',
            coin: '',
          }}
          validationSchema={Yup.object({
            network: Yup.string().required('Network is required'),
            address: Yup.string().required('Address is required'),
            coin: Yup.string().required('Coin is required'),
          })}
          onSubmit={handleCreateWallet}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box mb={2}>
                <Field
                  name="network"
                  as={TextField}
                  label="Network"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="network" />}
                />
              </Box>
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
              <Box mb={2}>
                <Field
                  name="coin"
                  as={TextField}
                  label="Coin"
                  fullWidth
                  variant="outlined"
                  helperText={<ErrorMessage name="coin" />}
                />
              </Box>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Creating...' : 'Create Wallet'}
              </Button>
              {error && (
                <Typography variant="body1" color="error" mt={2}>
                  {error}
                </Typography>
              )}
              {successMessage && (
                <Typography variant="body1" color="success" mt={2}>
                  {successMessage}
                </Typography>
              )}
            </Form>
          )}
        </Formik>
      </Paper>
    </Box>
  );
};

export default CreateWalletPage;
