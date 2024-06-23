import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"

export default function MonitoraPagamento() {
  return (
    <div className={`container ${styles.containerPad}`}>
      <div className={styles.linkWrapper}>
        <a href="/" className={styles.link}>Voltar</a>
      </div>

      <div className="img-wrapper">
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <h1 className={styles.title + " title"}>
        Agora voce <span className={styles.blue}>monitora</span> seu <span className={styles.blue}>pagamento</span> aqui no sparking !
      </h1>

      <p className={styles.subtitle}>
      Traga seus dados via open finance para o sparking e acompanhe de perto a sua situação finaceira dentro da sua empresa.
      </p>
      <div className={`btn-wrapper ${styles.btnWrapper}`}>
        <button className={`primary-button ${styles.btn}`}>Avançar</button>
      </div>
    </div>
  );
}