import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "../components/Login";
import { useState, useEffect } from "react";
import { getProviders, getSession, useSession, signOut } from "next-auth/react";

export default function Home({ providers }) {
  const [githubRepos, setGithubRepos] = useState([]);

  const { data: session } = useSession();

  if (!session) return <Login providers={providers} />;

  console.log(session);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(process.env.NEXT_PUBLIC_GITHUB_REPO_URL);
      const data = await res.json();
      setGithubRepos(data);
    }
    fetchData();
  }, [setGithubRepos]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome {session.user.name}</title>
        <meta name="description" content="created by @realtouseef on GitHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="my-4 flex items-center justify-end max-w-2xl mx-auto ">
        <div
          className="flex items-center cursor-pointer transition-all duration-300 hover:bg-gray-100 py-3 px-10 rounded-full"
          onClick={signOut}
        >
          <img
            className="w-14 h-14 rounded-full"
            src={session.user.image}
            alt=""
          />
          <div className="ml-4">
            <h2 className="text-lg font-medium">{session.user.name}</h2>
            <p className="text-gray-500">{session.user.email}</p>
            <p className="text-gray-500 text-xs">click to logout</p>
          </div>
        </div>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Check out projects of{" "}
          <a
            href="https://github.com/realtouseef"
            target="_blank"
            rel="noopener noreferrer"
          >
            Touseef ibn Khaleel
          </a>
        </h1>

        <div className={styles.grid}>
          {githubRepos &&
            githubRepos.map(({ id, html_url, name, description }) => (
              <a key={id} href={html_url} className={styles.card}>
                <h2>{name} &rarr;</h2>
                <p>
                  {description ??
                    `Either this repo is forked or doesn't have a description`}
                </p>
              </a>
            ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const providers = await getProviders();
  return {
    props: {
      session,
      providers,
    },
  };
}
