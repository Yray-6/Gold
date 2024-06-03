"use client";

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const UserDetail = () => {
  const router = useRouter();
  const { id } = useParams(); // Use useParams hook to get the id parameter
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUserData = async () => {
        setLoading(true);
        try {
          const token = localStorage.getItem('token');
          if (!token) {
            router.push('/login');
            return;
          }

          const res = await fetch(`https://goldback.onrender.com/admin/user/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!res.ok) {
            throw new Error('Failed to fetch user data');
          }

          const data = await res.json();
          setUser(data.data);
        } catch (error) {
          console.error('Error fetching user data:', error);
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchUserData();
    }
  }, [id, router]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to delete user');
      }

      alert('User deleted successfully');
      router.push('/adminito69'); // Redirect to the users list page after deletion
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('Error deleting user');
    }
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/loginito69');
        return;
      }

      const res = await fetch(`https://goldback.onrender.com/admin/user`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error('Failed to update user');
      }

      alert('User updated successfully');
      router.push('/adminito69')
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Error updating user');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="container pt-16 mx-auto p-4">
            <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
      >
        Back
      </Button>
      <h1 className="text-3xl font-bold mb-6">User Details</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <div className="bg-white shadow rounded p-6">
          <p><strong>Name:</strong> {user.user.firstName} {user.user.lastName}</p>
          <p><strong>Email:</strong> {user.user.email}</p>
          <p><strong>Country:</strong> {user.user.country}</p>
          <p><strong>Email Verified:</strong> {user.user.emailVerified ? 'Yes' : 'No'}</p>
          <p><strong>KYC Verified:</strong> {user.user.kycVerified ? 'Yes' : 'No'}</p>
          <p><strong>Account Type:</strong> {user.user.type}</p>
          <p><strong>Referral Code:</strong> {user.user.refCode}</p>
          <p><strong>Created At:</strong> {new Date(user.user.createdAt).toLocaleString()}</p>
          <p><strong>Updated At:</strong> {new Date(user.user.updatedAt).toLocaleString()}</p>
        </div>
      </div>
     
      <button 
        onClick={handleDelete}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Delete User
      </button>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Update User Information</h2>
      <div className="bg-white shadow rounded p-6">
        <Formik
          initialValues={{
            firstName: user.user.firstName,
            lastName: user.user.lastName,
            country: user.user.country,
            emailVerified: user.user.emailVerified,
            kycVerified: user.user.kycVerified,
            type: user.user.type,
            userId: user.user._id
          }}
     
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700">First Name</label>
                <Field
                  type="text"
                  name="firstName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
                <ErrorMessage name="firstName" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last Name</label>
                <Field
                  type="text"
                  name="lastName"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
                <ErrorMessage name="lastName" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Country</label>
                <Field
                  type="text"
                  name="country"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
                <ErrorMessage name="country" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Verified</label>
                <Field
                  type="checkbox"
                  name="emailVerified"
                  className="mt-1"
                />
                <ErrorMessage name="emailVerified" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">KYC Verified</label>
                <Field
                  type="checkbox"
                  name="kycVerified"
                  className="mt-1"
                />
                <ErrorMessage name="kycVerified" component="div" className="text-red-500" />
              </div>
              <div className="mb-4">
  <label className="block text-gray-700">Account Type</label>
  <Field
    as="select"
    name="type"
    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
  >
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </Field>
  <ErrorMessage name="type" component="div" className="text-red-500" />
</div>

              <div className="mb-4">
                <label className="block text-gray-700">User ID</label>
                <Field
                  type="text"
                  name="userId"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                />
                <ErrorMessage name="type" component="div" className="text-red-500" />
              </div>
            
              <button 
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                {isSubmitting ? 'Updating...' : 'Update User'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default UserDetail;
