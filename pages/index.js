import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import Link from "next/link";

export default function Home() {
  const [githubRepos, setGithubRepos] = useState([]);
  const { user, logout } = useAuth();
  const router = useRouter();

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
        <title>Welcome</title>
        <meta name="description" content="created by @realtouseef on GitHub" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="my-4 flex items-center justify-end max-w-2xl mx-auto ">
        {user ? (
          <a
            className="btn-gray"
            onClick={() => {
              logout(), router.push("/login");
            }}
          >
            Logout
          </a>
        ) : (
          <div className="flex items-center space-x-4">
            <Link href="/login">
              <a className="btn-gray">Login</a>
            </Link>{" "}
            <Link href="/signup">
              <a className="btn-gray">Signup</a>
            </Link>
          </div>
        )}
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
