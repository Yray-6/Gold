"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

export default function WithdrawPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  // Check if token exists in local storage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      amount: "",
      walletAddress: "",
      currency: "btc",
    },
    validationSchema: Yup.object({
      amount: Yup.number().positive("Amount must be positive").required("Amount is required"),
      walletAddress: Yup.string().required("Wallet address is required"),
    }),
    onSubmit: async (values) => {
      if (!showConfirmation) {
        setShowConfirmation(true);
        return;
      }
      setLoading(true);
      setMessage("");
      try {
        const response = await fetch("https://goldback.onrender.com/wallet/withdraw", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          body: JSON.stringify(values),
        });
        const result = await response.json();
        if (result.status === 'success') {
          setMessage(result.message||"Withdrawal request received and is currently processed");
          
        } else {
          setMessage(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setMessage("Failed to withdraw funds. Please try again.");
      }
      setLoading(false);
      setShowConfirmation(false);
    },
  });

  return (
    <div className="flex lg:items-center justify-center min-h-screen">
      <div className=" w-full bg-white mt-9 lg:mt-0 py-6 lg:px-10">
        <h2 className="lg:text-2xl text-xl font-bold  lg:text-center mb-4">
          Withdraw
        </h2>
        <p className="mb-2 font-medium text-xs lg:text-base text-gold">Withdraw Funds to your wallet</p>
        <ul className="pl-5 text-xs lg:text-xs gap-3 mb-5 list-disc">
          <li>Enter Amount</li>
          <li>Add Network</li>
          <li>Add Your Wallet Address</li>
        </ul>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
              Amount($)
            </label>
            <input
              id="amount"
              name="amount"
              type="number"
              min="0"
              step="any"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full border-b p-1 lg:p-2 text-sm lg:text-base focus:outline-none  ${
                formik.touched.amount && formik.errors.amount ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <p className="mt-2 text-sm text-red-500">{formik.errors.amount}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block text-sm font-medium text-gray-700">
              Wallet Address
            </label>
            <input
              id="walletAddress"
              name="walletAddress"
              type="text"
              value={formik.values.walletAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`mt-1 block w-full border-b p-1 lg:p-2 text-sm lg:text-base focus:outline-none  ${
                formik.touched.walletAddress && formik.errors.walletAddress ? 'border-red-500' : ''
              }`}
            />
            {formik.touched.walletAddress && formik.errors.walletAddress ? (
              <p className="mt-2 text-sm text-red-500">{formik.errors.walletAddress}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
              Network
            </label>
            <select
              id="currency"
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full border-b p-1 lg:p-2 text-sm lg:text-base focus:outline-none "
            >
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setShowConfirmation(true)}
            disabled={loading}
            className="w-full lg:w-52 bg-gradient-to-r from-gradf to-gradt lg:py-3 py-2 px-4 mt-10 lg:mt-4 text-white rounded-md font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? "Processing..." : "Withdraw"}
          </button>
          {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
        </form>
        {showConfirmation && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg mb-4">
                Are you sure you want to withdraw {formik.values.amount} to {formik.values.walletAddress}?
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="mr-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={formik.handleSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Yes, Withdraw
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
