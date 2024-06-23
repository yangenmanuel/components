import React from "react";
import styles from "./styles.module.css";
import logo from "../../assets/logo.png"

export default function CriarConta() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const years = Array.from({ length: 2024 - 1910 + 1 }, (_, i) => i + 1910);

  return (
    <div className={`container ${styles.containerPad}`}>
      <h1 className={styles.title}>
        Criar sua conta
      </h1>

      <div className={styles.inputWrapper}>
        <input className={`${styles.input}`} placeholder="Nome" type="text" />
        <input className={`${styles.input}`} placeholder="Celular" type="text" />
      </div>

      <div className={styles.selectWrapper}>
        <select name="" id="" placeholder="Mes"  className={`${styles.select} ${styles.month}`}>
          <option value="0" disabled selected>Mês</option>
          <option value="1">Janeiro</option>
          <option value="2">Fevereiro</option>
          <option value="3">Março</option>
          <option value="4">Abril</option>
          <option value="5">Maio</option>
          <option value="6">Junho</option>
          <option value="7">Julho</option>
          <option value="8">Agosto</option>
          <option value="9">Setembro</option>
          <option value="10">Outubro</option>
          <option value="11">Novembro</option>
          <option value="12">Dezembro</option>
        </select>

        <select name="" id="" placeholder="Mes"  className={`${styles.select} ${styles.day}`}>
          <option value="" disabled selected>Dia</option>
            {days.map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
        </select>

        <select name="" id="" className={`${styles.select}`}>
          <option value="" disabled selected>Ano</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

        <button className={`primary-button ${styles.btn}`}>Avancar</button>
    </div>
  );
}