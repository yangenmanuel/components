import React from "react";
import styles from "./styles.module.css";

import logo from '../../assets/logo.png';
import pfp from '../../assets/image.png';
import settings from '../../assets/settings.png';
import magnifier from '../../assets/magnifier.svg';
import DM from "../components/DM";
import Navbar from "../components/Navbar";

export default function DMs() {
  return (
    <div className={`containerLight`}>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <img src={pfp} className={styles.pfp} alt="" />
          <h1 className={styles.title}>Mensagens</h1>
          <img src={settings} className={styles.settings} alt="" />
        </div>

        <div className={styles.searchWrapper}>
          <img className={styles.search} src={magnifier} alt="" />
          <input className={styles.inpt} type="text" placeholder="Pesquisar mensagens diretas" name="" id="" />
        </div>
      </header>

      <div className={styles.dms}>
        { 
          Array(10).fill().map((_, i) => (
            <DM 
              name="Lucas" 
              tag="@neylover999" 
              date="24/24/2024" 
              msg="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in mauris ut liber" 
            />
          ))
        }
      </div>

      <Navbar />
    </div>
  );
}