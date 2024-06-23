import React from "react";
import styles from "./styles.module.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import user from "../../assets/user.png";
import business from "../../assets/business.png";
import photo from "../../assets/photo.svg";
import gif from "../../assets/gif.svg";
import mic from "../../assets/mic.svg";

export default function Chat() {
  return (
    <div className={`containerLight ${styles.bgGray}`}>
      <Header />
      <div className={styles.blur}>
        <img src={user} className={styles.user} alt="" />
        <p className={styles.name}>Kuan Kohl</p>
      </div>

      <div className={styles.msgContainer}>
        
        <div className={styles.msg}>
         <div className={styles.msgInfo}>
          <img className={styles.pfp} src={user} alt="" />
          <span className={styles.sender}>Imagens para ...</span>
          <span className={styles.date}>24/24/2024</span>
         </div>

         <div className={styles.content}>
            <img className={styles.contentImg} src={business} alt="" />
         </div>
        </div>

        <p className={styles.separator}>sexta-feira, 29 de março</p>

        <div className={styles.msg}>
         <div className={styles.msgInfo}>
          <img className={styles.pfp} src={user} alt="" />
          <span className={styles.sender}>Imagens para ...</span>
          <span className={styles.date}>24/24/2024</span>
         </div>

         <div className={styles.content}>
            <img className={styles.contentImg} src={business} alt="" />
         </div>
        </div>

      </div>

      <div className={styles.inputContainer}>
        <img src={photo} className={styles.icon} alt="" />
        <img src={gif} className={styles.icon} alt="" />
        <input type="text" className={styles.input} placeholder="Escrever uma mensagem" />
        <img src={mic} className={styles.icon} alt="" />
      </div>
      <Navbar />
    </div>
  );
}