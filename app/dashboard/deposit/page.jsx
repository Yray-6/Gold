"use client";

import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import QRCode from "qrcode.react";

export default function DepositPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);
  const router = useRouter();

  // Check if token exists in local storage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      amount: "",
      currency: "btc",
    },
    validationSchema: Yup.object({
      amount: Yup.number()
        .positive("Amount must be positive")
        .required("Amount is required"),
    }),
    onSubmit: async (values) => {
      if (!showConfirmation) {
        setShowConfirmation(true);
        return;
      }
      setLoading(true);
      setMessage("");
      try {
        const response = await axios.post(
          "https://goldback.onrender.com/wallet/deposit",
          values,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const result = response.data;
        if (result.status === "success") {
          setMessage(
            result.message || "Deposit received and is currently processed"
          );
          router.push("/dashboard");
        } else {
          setMessage(
            result.message || "Something went wrong. Please try again."
          );
        }
      } catch (error) {
        setMessage("Failed to deposit funds. Please try again.");
      }
      setLoading(false);
      setShowConfirmation(false);
    },
  });

  return (
    <div className="flex lg:items-center justify-center min-h-screen ">
      <div className=" w-full py-6 lg:px-12 bg-white ">
        <h2 className="lg:text-2xl text-xl mt-10 font-bold text-blue-500 lg:text-center mb-4">
          Deposit Funds
        </h2>
        <p className="mb-2 font-medium lg:text-center text-sm lg:text-base text-gold">Add Cash to your wallet to Invest in Gold</p>
        <ul className="pl-5 text-xs mb-5 list-disc">
          <li>Enter Amount</li>
          <li>Add Network</li>
          <li>Click Deposit and follow the Instructions</li>
        </ul>
        <form onSubmit={formik.handleSubmit} className=" text-center">
          <div className="mb-4">
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-left text-gray-700"
            >
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
              className={`mt-1 block w-full border-b p-1 lg:p-2  focus:outline-none  ${
                formik.touched.amount && formik.errors.amount
                  ? "border-red-500"
                  : ""
              }`}
            />
            {formik.touched.amount && formik.errors.amount ? (
              <p className="mt-2 text-sm text-red-500">
                {formik.errors.amount}
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              htmlFor="currency"
              className="block text-sm font-medium text-left text-gray-700"
            >
              Network
            </label>
            <select
              id="currency"
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full p-1 lg:p-2 border-b"
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
            className="lg:w-52 w-full bg-gradient-to-r from-gradf to-gradt py-2 lg:py-3 mt-6 lg:mt-2 lg:px-4 text-white rounded-md font-semibold hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? "Processing..." : "Deposit"}
          </button>
          {message && <p className="mt-4 text-sm text-red-500">{message}</p>}
        </form>
        {showConfirmation && (
          <div className="fixed lg:w-full w-[84%] lg:ml-0  ml-[16%] inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75">
            <div className="bg-white lg:p-6 p-2 rounded-lg shadow-md">
              <p className="text-lg mb-4 font-bold">
                Deposit of ${formik.values.amount}
              </p>
              <p className="text-sm lg:text-base">Send exact Amount to Wallet Address</p>
              <p className="text-blue-500 font-bold text-sm lg:text-base">Check Transaction to confirm status of Payment</p>
              <div className="flex flex-col justify-center">

                <div className="flex justify-center py-7">
                  <QRCode value="yfwdyg873783gduyd"/>
                </div>
                

                <p className="text-gray-500 text-xs mb-3 lg:mb-7">scan the QR code Above to get wallet address</p>
                
                <div className="mb-4">
            <label htmlFor="walletAddress" className="block text-xs lg:text-sm font-medium text-gray-700">
              Wallet Address
            </label>
            <div className="w-full p-2 text-xs lg:text-sm border-b border-black">
              56257382fywrd6wfd7
              </div>
          </div>
          <div className="mb-4">
            <label htmlFor="walletAddress" className="block text-xs lg:text-sm font-medium text-gray-700">
              Network
            </label>
            <div className="w-full p-2 border-b text-xs lg:text-sm border-black">
              BTC
              </div>
          </div>
          <button
                  onClick={formik.handleSubmit}
                  className="bg-black hover:bg-slate-900 mb-4 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                >
                  Deposit
                </button>
                <button
                  onClick={() => setShowConfirmation(false)}
                  className=" bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
                >
                  Cancel
                </button>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
