import Head from "next/head";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email", email, "password", password);

  return (
    <>
      <Head>
        <title>Sign up with your Email</title>
      </Head>
      <form className="max-w-2xl mx-auto grid place-content-center h-screen">
        <span className="mb-10 text-xl font-medium tracking-wide">
          Create your account using Email
        </span>
        <div className="bg-gray-100 py-16 px-6 rounded-xl">
          <div className="form-group mb-6">
            <label
              onChange={(e) => setEmail(e.target.value)}
              htmlFor="email"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Email address
            </label>
            <input
              type="email"
              className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="block mt-1 text-xs text-gray-600">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group mb-6">
            <label
              onChange={(e) => setPassword(e.target.value)}
              htmlFor="password"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg duration-150 ease-in-out"
          >
            Create your account
          </button>
        </div>
      </form>
    </>
  );
}
