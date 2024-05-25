import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <div className="grid lg:grid-cols-2 ">
        <div className="col-span-1 hidden lg:block hero4 h-screen"></div>
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
                Forgot Password
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Please Input Your Email Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email"
                      required
                      className="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

              

                <div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gradf to-gradt py-3 px-7 text-base rounded font-semibold text-black"
                  >
                    Forgot Password
                  </button>
                </div>
              </form>

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
