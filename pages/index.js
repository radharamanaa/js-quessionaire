import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header";
import Main from "../components/Main-Hero/Main";
import { localStorageVar } from "../store/questions";
import styles from "../styles/Home.module.css";

let initialRun = true;

export default function Home() {
  return (
    <>
      <div className={`${styles.main} relative`}>
        <Main />
      </div>
    </>
  );
}
