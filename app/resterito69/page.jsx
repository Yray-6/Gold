"use client"

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import MessageModal from "../ui/dashboard/Message"; // Adjust the import path as needed

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();

  const handleCloseModal = () => setOpenModal(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: ""
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name is required"),
      lastName: Yup.string().required("Last Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required("Confirm Password is required"),
      country: Yup.string().required("Country is required")
    }),
    onSubmit: async (values) => {
      setLoading(true);
      setMessage("");
      try {
        const response = await fetch("https://goldback.onrender.com/admin/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });
        const result = await response.json();
        if (result.status === 'success') {
          localStorage.setItem('token', result.data.token);
          setMessage(result.message);
          setOpenModal(true);
          setTimeout(() => {
            router.push('/verify-email');
          }, 2000); // Adjust timeout as needed
        } else {
          setMessage(result.message || "Something went wrong. Please try again.");
          setOpenModal(true);
        }
      } catch (error) {
        setMessage("Failed to Sign up. Please check your credentials and try again.");
        setOpenModal(true);
      }
      setLoading(false);
    }
  });

  return (
    <div>
      <div className="grid lg:grid-cols-2">
        <div className="col-span-1 hero2 hidden lg:block min-h-full"></div>
        <div className="col-span-1">
          <div className="flex min-h-full flex-1 flex-col justify-center lg:mt-0 mt-6 px-3 pb-12 pt-24 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <Image
                className="mx-auto h-10 w-auto"
                src="/logo2.svg"
                alt="Your Company"
                width={1000}
                height={100}
              />
              <h2 className="mt-10 text-center lg:text-left text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Register with Us
              </h2>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-red-600">{formik.errors.firstName}</div>
                    ) : null}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-red-600">{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-600">{formik.errors.email}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                    Country
                  </label>
                  <div className="mt-2">
                    <input
                      id="country"
                      name="country"
                      type="text"
                      placeholder="Country"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.country}
                    />
                    {formik.touched.country && formik.errors.country ? (
                      <div className="text-red-600">{formik.errors.country}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-600">{formik.errors.password}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm Password"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.confirmPassword}
                    />
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                      <div className="text-red-600">{formik.errors.confirmPassword}</div>
                    ) : null}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gradf to-gradt py-3 px-7 text-base rounded font-semibold text-black"
                    disabled={loading}
                  >
                    {loading ? 'Signing up...' : 'Sign up'}
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                Already Registered?{" "}
                <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Login
                </Link>
              </p>

              {message && <MessageModal open={openModal} onClose={handleCloseModal} message={message} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
