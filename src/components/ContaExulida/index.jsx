import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"

export default function ContaExulida() {
  return (
    <div className="container">
      <div className="img-wrapper">
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <h1 className={styles.title + " title"}>
      Conta exluida
      </h1>

      <p className={`${styles.text}`}>
      Agora que você partiu, percebo que cada momento compartilhado contigo no aplicativo era uma preciosidade. Sua ausência deixou um vazio que não consigo preencher. Espero que um dia você retorne e possamos continuar nossa jornada juntos.
      </p>

      <div className="btn-wrapper">
        <button className={`primary-button ${styles.btn}`}>voltar ao inicio</button>
      </div>
    </div>
  );
}