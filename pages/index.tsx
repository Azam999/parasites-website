import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Intestisight</title>
                <meta name="description" content="Intestisight" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}></main>

            <footer className={styles.footer}>Footer</footer>
        </div>
    );
};

export default Home;
