import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"

export default function DigiteSenha() {
  return (
    <div className={`container`}>
      <div className="img-wrapper">
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <h1 className={styles.title + " title"}>
        Digite sua senha
      </h1>

      <div className={styles.inputWrapper}>
        <label className={styles.label}>Digite o código</label>
        <input className={`${styles.input}`} type="text" />
      </div>


      <div className={styles.btnWrapper}>
        <button className={`primary-button ${styles.btn}`}>Entrar</button>
        <a href="/" className={styles.link}>Esqueceu sua senha?</a>
      </div>
    </div>
  );
}