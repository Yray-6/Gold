"use client";

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';

const KycForm = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      occupation: '',
      dateOfBirth: '',
      zipCode: '',
      address: '',
      city: '',
      sourceOfIncome: '',
    },
    validationSchema: Yup.object({
      occupation: Yup.string().required('Required'),
      dateOfBirth: Yup.date().required('Required'),
      zipCode: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      sourceOfIncome: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      const response = await fetch('https://goldback.onrender.com/auth/kyc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data.status === 'success') {
        alert('Your details have been received and you will be verified shortly.');
        router.push('/dashboard');
      } else {
        alert('Something went wrong, please try again.');
      }
    },
  });

  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={formik.handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">KYC Form</h2>
        <div className="mb-4">
          <label htmlFor="occupation" className="block text-gray-700">Occupation</label>
          <input
            id="occupation"
            name="occupation"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.occupation}
            className={`w-full p-2 border rounded mt-1 ${formik.touched.occupation && formik.errors.occupation ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formik.touched.occupation && formik.errors.occupation ? (
            <div className="text-red-500 text-sm">{formik.errors.occupation}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700">Date of Birth</label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dateOfBirth}
            className={`w-full p-2 border rounded mt-1 ${formik.touched.dateOfBirth && formik.errors.dateOfBirth ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth ? (
            <div className="text-red-500 text-sm">{formik.errors.dateOfBirth}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="zipCode" className="block text-gray-700">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zipCode}
            className={`w-full p-2 border rounded mt-1 ${formik.touched.zipCode && formik.errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formik.touched.zipCode && formik.errors.zipCode ? (
            <div className="text-red-500 text-sm">{formik.errors.zipCode}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-gray-700">Address</label>
          <input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address}
            className={`w-full p-2 border rounded mt-1 ${formik.touched.address && formik.errors.address ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formik.touched.address && formik.errors.address ? (
            <div className="text-red-500 text-sm">{formik.errors.address}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-gray-700">City</label>
          <input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
            className={`w-full p-2 border rounded mt-1 ${formik.touched.city && formik.errors.city ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formik.touched.city && formik.errors.city ? (
            <div className="text-red-500 text-sm">{formik.errors.city}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="sourceOfIncome" className="block text-gray-700">Source of Income</label>
          <input
            id="sourceOfIncome"
            name="sourceOfIncome"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.sourceOfIncome}
            className={`w-full p-2 border rounded mt-1 ${formik.touched.sourceOfIncome && formik.errors.sourceOfIncome ? 'border-red-500' : 'border-gray-300'}`}
          />
          {formik.touched.sourceOfIncome && formik.errors.sourceOfIncome ? (
            <div className="text-red-500 text-sm">{formik.errors.sourceOfIncome}</div>
          ) : null}
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default KycForm;
