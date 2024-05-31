import React from 'react';

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center  z-50">
      <div className="text-center">
        <svg
          className="animate-spin h-10 w-10 text-gold mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8H4z"
          ></path>
        </svg>
        <p className="text-gold text-lg">Loading...</p>
      </div>
    </div>
  );
}
