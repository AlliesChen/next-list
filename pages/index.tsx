import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next List | Home</title>
        <meta name="keywords" content="nexts" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum id
          impedit repudiandae, iure ab tempore? Quidem nulla quis voluptatem,
          quae eaque commodi nam magni perspiciatis laborum, explicabo,
          cupiditate culpa reiciendis!
        </p>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum id
          impedit repudiandae, iure ab tempore? Quidem nulla quis voluptatem,
          quae eaque commodi nam magni perspiciatis laborum, explicabo,
          cupiditate culpa reiciendis!
        </p>
        <Link href="/nexts">
          <a className={styles.btn}>See Next Listing</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
