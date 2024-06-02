"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const DepositDetail = () => {
  const router = useRouter();
  const { id } = useParams(); // Use useParams hook to get the id parameter
  const [deposit, setDeposit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchDepositData = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            router.push('/loginito69');
            return;
          }

          const res = await fetch(`https://goldback.onrender.com/admin/deposit/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!res.ok) {
            throw new Error('Failed to fetch deposit data');
          }

          const data = await res.json();
          setDeposit(data.data);
        } catch (error) {
          console.error('Error fetching deposit data:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchDepositData();
    }
  }, [id, router]);

  const validationSchema = Yup.object().shape({
    amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
    currency: Yup.string().required('Currency is required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/deposit`, {
        method: 'POST', // Assuming POST for update
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error('Failed to update deposit');
      }

      alert('Deposit updated successfully');
      // Optionally, you could refetch the deposit data here to update the UI
      const updatedDeposit = await res.json();
      setDeposit(updatedDeposit.data);
    } catch (error) {
      console.error('Error updating deposit:', error);
      alert('Error updating deposit');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/deposit/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete deposit');
      }

      alert('Deposit deleted successfully');
      router.push('/adminito69/deposits'); // Redirect to deposits list or another page
    } catch (error) {
      console.error('Error deleting deposit:', error);
      alert('Error deleting deposit');
    }
  };

  const handleApprove = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/deposit/verify/${id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'approved' }),
      });

      if (!res.ok) {
        throw new Error('Failed to approve deposit');
      }

      alert('Deposit approved successfully');
      // Optionally, you could refetch the deposit data here to update the UI
      router.push("/adminito69/deposits")
      const updatedDeposit = await res.json();
      setDeposit(updatedDeposit.data);
    } catch (error) {
      console.error('Error approving deposit:', error);
      alert('Error approving deposit');
    }
  };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!deposit) return <p>Deposit not found</p>;


  return (
    <div className="container pt-16 mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Deposit Details</h1>
      <div className="bg-white shadow rounded p-6 mb-8">
        <p><strong>Amount:</strong> {deposit.amount} {deposit.currency}</p>
        <p><strong>Status:</strong> {deposit.status}</p>
        <p><strong>Transaction ID:</strong> {deposit.transactionId}</p>
        <p><strong>Created At:</strong> {new Date(deposit.createdAt).toLocaleString()}</p>
        <p><strong>Updated At:</strong> {new Date(deposit.updatedAt).toLocaleString()}</p>
      </div>


      <h2 className="text-2xl font-semibold mt-8 mb-4">Update Deposit Information</h2>
      <div className="bg-white shadow rounded p-6">
        <Formik
          initialValues={{
            amount: deposit.amount,
            currency: deposit.currency,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700">Amount</label>
                <Field
                  type="number"
                  name="amount"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
                <ErrorMessage name="amount" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Currency</label>
                <Field
                  type="text"
                  name="currency"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
                <ErrorMessage name="currency" component="div" className="text-red-500" />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {isSubmitting ? 'Updating...' : 'Update Deposit'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="mt-4">
        <button 
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Delete Deposit
        </button>
      </div>
      <div className="mt-4">
        <button 
          onClick={handleApprove}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Approve Deposit
        </button>
      </div>
    </div>
  );
};

export default DepositDetail;
