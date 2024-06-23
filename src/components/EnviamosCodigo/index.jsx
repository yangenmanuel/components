import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"

export default function EnviamosCodigo() {
  return (
    <div className={`container`}>
      <div className="img-wrapper">
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <h1 className={styles.title + " title"}>
        Enviamos um código para você
      </h1>

      <p className={styles.text}>Confira seu telefone para pegar o código de confirmação. Se você precisar solicitar um novo código, volte e selecione novamente um método de confirmação.</p>

      <div className={styles.inputWrapper}>
        <label className={styles.label}>Digite o código</label>
        <input className={`${styles.input}`} type="text" />
      </div>


      <div className={styles.btnWrapper}>
        <a href="/" className={styles.link}>Voltar</a>
        <button className={`primary-button ${styles.btn}`}>Entrar</button>
      </div>
    </div>
  );
}