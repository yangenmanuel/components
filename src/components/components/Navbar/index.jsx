import React from "react";
import styles from "./styles.module.css";
import home from "../../../assets/home.png";
import bell from "../../../assets/bell.png";
import search from "../../../assets/search.png";
import profile from "../../../assets/profile.png";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <img src={home} className={styles.img} alt="" />
      <img src={bell} className={styles.img} alt="" />
      <img src={search} className={styles.img} alt="" />
      <img src={profile} className={styles.img} alt="" />
    </nav>
  )
}
