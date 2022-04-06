import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/router";

const Login = () => {
  const { login } = useAuth();
  const [data, setData] = useState({ email: " ", password: " " });
  const router = useRouter();

  async function handleSubmitData(e) {
    e.preventDefault();

    try {
      await login(data.email, data.password);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="">
      <Head>
        <title>Login here</title>
      </Head>
      <>
        <form
          onSubmit={handleSubmitData}
          className="max-w-2xl mx-auto grid place-content-center h-screen"
        >
          <span className="mb-10 text-xl font-medium tracking-wide">
            Login to your account
          </span>
          <div className="bg-gray-100 py-16 px-6 rounded-xl">
            <div className="form-group mb-6">
              <label
                htmlFor="email"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Email address
              </label>
              <input
                onChange={(e) => setData({ ...data, email: e.target.value })}
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mb-6">
              <label
                htmlFor="password"
                className="form-label inline-block mb-2 text-gray-700"
              >
                Password
              </label>
              <input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normaltext-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
          <span className="my-8 text-center text-black">or</span>
          <Link href="/signup">
            <a className="bg-blue-500 px-6 py-3 hover:bg-blue-600 font-medium text-white rounded-md text-xl">
              Create your account with email
            </a>
          </Link>
        </form>
      </>
    </div>
  );
};

export default Login;
