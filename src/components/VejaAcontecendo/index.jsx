import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"
import google from "../../assets/google.svg"
import apple from "../../assets/apple.svg"

export default function VejaAcontecendo() {
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <h1 className={styles.title + " title"}>
      Veja o que está acontecendo no mundo dos negócios.
      </h1>

      <div className={styles.signWrapper}>
        <a href="/" className={styles.btnSign}>
          <img src={google} alt="" />
          <p className={styles.signText}>Sign up with Google</p>
        </a>
        
        <a href="/" className={styles.btnSign}>
          <img src={apple} alt="" />
          <p className={styles.signText}>Sign up with Apple</p>
        </a>
      </div>

        <button className={`${styles.btnSign} ${styles.createAcc}`}>Create account</button>

        <p className={styles.text}>Ao se inscrever, você concorda con nossos <br />
        <span className={styles.blue}> Termos, a Política de Privacidade e o Uso de Cookies.</span></p>

        <div className={styles.linkWrapper}>
          <a href="/" className={styles.link}>Já tem conta? <span className={styles.blue}>Entrar</span></a>
        </div>
    </div>
  );
}