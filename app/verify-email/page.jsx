"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { API_URL } from "../config";

export default function VerifyEmailPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string().required("Verification code is required"),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setMessage("");
      try {
        const token = localStorage.getItem('token'); // Get the token from local storage
        const response = await fetch("https://goldback.onrender.com/auth/verify-email", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(values)
          })
          const result = await response.json()
        if (result.status === 'success') {
          setMessage("Email verified successfully!");
        } else {
          setMessage(result.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        setMessage("Failed to verify email. Please try again.");
      }
      setLoading(false);
    },
  });
  

  const handleResendCode = async () => {
    setLoading(true);
    setMessage("");
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await fetch("https://goldback.onrender.com/auth/verify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(values)
      })
      const result = await response.json()
      if (result.status === "success") {
        setMessage("Verification code sent successfully!");
      } else {
        setMessage(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Failed to resend verification code. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="col-span-1 hero1 hidden lg:block h-screen"></div>
        <div className="col-span-1">
          <div className="flex min-h-full flex-1 flex-col justify-center lg:mt-0 mt-20 px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image
                className="mx-auto h-10 w-auto"
                src="/logo2.svg"
                alt="Your Company"
                width={1000}
                height={100}
              />
              <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Verify Email Address
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="code"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Verification Code
                  </label>
                  <div className="mt-2">
                    <input
                      id="code"
                      name="code"
                      type="text"
                      autoComplete="verification-code"
                      placeholder="Verification Code"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.code}
                    />
                    {formik.touched.code && formik.errors.code ? (
                      <div className="text-red-600">{formik.errors.code}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gradf to-gradt py-3 px-7 text-base rounded font-semibold text-black"
                    disabled={loading}
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleResendCode}
                  className="w-full bg-gradient-to-r from-gradf to-gradt py-3 px-7 text-base rounded font-semibold text-black"
                  disabled={loading}
                >
                  {loading ? 'Resending...' : 'Resend Code'}
                </button>
              </div>

              {message && <div className="mt-4 text-center text-sm text-red-600">{message}</div>}

              <p className="mt-10 text-center text-sm text-gray-500">
                Not Registered?{" "}
                <Link
                  href="/register"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
