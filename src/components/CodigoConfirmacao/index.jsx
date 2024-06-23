import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"

export default function CodigoConfirmacao() {
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <h1 className={styles.title + " title"}>
        Para onde devemos enviar o código de confirmação?
      </h1>

      <p className={styles.text}>
      Antes de alterar sua senha, precisamos ter certeza de que é você mesmo
      </p>

      <p className={styles.text}>
      Comece escolhendo para aonde enviar o código de confirmação.
      </p>

      <p className={`${styles.text} ${styles.subtitle}`}>
        Enviar um código para o celular terminando em 11
      </p>

      <p className={styles.littleText}>
        Entre em contato com o <span className={styles.support}>Suporte de X</span> caso você não tenha acesso
      </p>

      <div className="btn-wrapper">
        <button className={`primary-button ${styles.btn}`}>Avançar</button>
      </div>
    </div>
  );
}