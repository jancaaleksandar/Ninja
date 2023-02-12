import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="Ninja" />
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        architecto incidunt dolor maiores deserunt quas voluptate autem vitae
        illo accusantium ratione dolores magni et expedita, nesciunt eos
        voluptas molestias iste!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        architecto incidunt dolor maiores deserunt quas voluptate autem vitae
        illo accusantium ratione dolores magni et expedita, nesciunt eos
        voluptas molestias iste!
      </p>
      <Link href={"/ninjas"}>
        <p className={styles.btn}>See Ninja Listing</p>
      </Link>
    </div>
    </>
  );
}
