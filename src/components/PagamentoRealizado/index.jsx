import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"
import arrow from "../../assets/arrow.svg"

export default function PagamentoRealizado() {
  return (
    <div className={`container ${styles.containerPad}`}>
      <a href="/" className={styles.link}>Voltar</a>
      <div className="img-wrapper">
        <img src={logo} className={styles.logo} alt="" />
      </div>
      <h1 className={styles.title + " title"}>
      Pagamento realizado
      </h1>

      <p className={`${styles.subtitle}`}>
      Recebemos o pagamento de R$1530,00 referente Seu limite sera liberado em ate 30 minutos. 
      </p>

      <div className={styles.card}>
        <h2 className={styles.cardTitle}>Ative o debito automatico da fatura </h2>
        <p className={styles.cardText}>Sua fatura paga no dia escolhido, usando o
        saldo da sua conta sparking</p>
        <div className={styles.btnWrapper}>
          <a href="/" className={styles.cardBtn}>Saiba mais </a>
          <img src={arrow} alt="" />
        </div>
      </div>

      <div className="btn-wrapper">
        <button className={`primary-button ${styles.btn}`}>Ver Comprovante</button>
      </div>
    </div>
  );
}