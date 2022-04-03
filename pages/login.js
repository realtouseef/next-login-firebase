import Head from "next/head";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Login = ({ providers }) => {
  return (
    <div className="flex items-center flex-col mb-10 justify-center h-screen ">
      <Head>
        <title>Login here</title>
      </Head>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <a
            className="bg-pink-500 px-6 py-3 hover:bg-pink-600 font-medium text-white rounded-md text-xl cursor-pointer"
            onClick={() => signIn(provider.id, { callback: "/" })}
          >
            <span> Create your account with {provider.name}</span>
          </a>
        </div>
      ))}
      <span className="my-8 text-black">or</span>
      <Link href="/signup">
        <a className="bg-blue-500 px-6 py-3 hover:bg-blue-600 font-medium text-white rounded-md text-xl">
          Create your account with email
        </a>
      </Link>
    </div>
  );
};

export default Login;
