"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // corrected import

export default function Profile() {
  const [user, setUser] = useState(null);
  const [kycVerified, setKycVerified] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // initialize useRouter

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }
      
      try {
        const response = await fetch('https://goldback.onrender.com/auth/current-user', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (response.ok) {
          setUser(result.data);
          setKycVerified(result.data.kycVerified);
          setLoading(false); // Set loading to false after fetching user data
        } else {
          throw new Error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
        router.push('/login');
      }
    }
    
    fetchUser();
  }, [router]);

  return (
    <div>
      {!kycVerified && (
        <div className="flex justify-end mb-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push('/dashboard/kyc')} // Navigate to KYC verification page
          >
            Verify KYC
          </button>
        </div>
      )}
      <div className="px-4 sm:px-0">
        <h3 className="text-lg font-bold leading-7 text-blue-500">Profile</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Personal details and Information.
        </p>
      </div>
      {!loading && user && (
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            {/* Full Name */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {`${user.firstName} ${user.lastName}`}
              </dd>
            </div>
            {/* Email Address */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {user.email}
              </dd>
            </div>
            {/* Date of Birth */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Date of Birth</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {kycVerified ? user.dateOfBirth : 'KYC not verified'}
              </dd>
            </div>
            {/* Occupation */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Occupation</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {kycVerified ? user.occupation : 'KYC not verified'}
              </dd>
            </div>
            {/* City */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">City</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {kycVerified ? user.city : 'KYC not verified'}
              </dd>
            </div>
            {/* Address */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {kycVerified ? user.address : 'KYC not verified'}
              </dd>
            </div>
            {/* Zip Code */}
            <div className="px-4 py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">Zip Code</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {kycVerified ? user.zipCode : 'KYC not verified'}
              </dd>
            </div>
          </dl>
        </div>
      )}
    </div>
  );
}
