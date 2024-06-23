import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"
import pfp from "../../assets/image.png"
import settings from "../../assets/settings.png"
import leftchevron from "../../assets/leftchevron.svg"
import magnifier from "../../assets/magnifier.svg"
import mic from "../../assets/mic.svg"
import home from "../../assets/home.png"
import msg from "../../assets/msg.png"
import bell from "../../assets/bell.png"
import profile from "../../assets/profile.png"
import search from "../../assets/search.png"
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function PodeGostar() {
  return (
    <div className={`containerLight ${styles.containerFlex}`}>
      <main>
        <Header />
        <div className={styles.topWrapper}>
          <img src={leftchevron} alt="" />
        <div className={styles.inptWrapper}>
          <img src={magnifier} alt="" />
          <input type="text" className={styles.input} name="" id="" />
          <img src={mic} alt="" />
        </div>
        </div>
        <h1 className={styles.title}>Você pode gostar</h1>
        <ul>
          <li className={styles.list}>cursos</li>
          <li className={styles.list}>empresa</li>
          <li className={styles.list}>desempenho</li>
          <li className={styles.list}>informações</li>
        </ul>
      </main>

      <Navbar />
    </div>
  );
}