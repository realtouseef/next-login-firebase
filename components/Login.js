import Head from "next/head";
import { signIn } from "next-auth/react";

const Login = ({ providers }) => {
  return (
    <div>
      <Head>
        <title>Login here</title>
      </Head>
      <center>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <a
              href="#_"
              className="relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
              onClick={() => signIn(provider.id, { callback: "/" })}
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-green-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
              <span className="relative"> Sign in with {provider.name}</span>
            </a>
          </div>
        ))}
      </center>
    </div>
  );
};

export default Login;
