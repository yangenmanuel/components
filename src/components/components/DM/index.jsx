import React from "react";

import styles from "./styles.module.css";
import user from "../../../assets/user.png";

export default function DM({ name, tag, date, msg }) {
  return (
    <div className={styles.dm}>
      <img src={user} className={styles.pfp} />

      <div className={styles.sideCol}>
        <div className={styles.info}>
          <span className={styles.name}>{name}</span>
          <span className={styles.tag}>{tag}</span>
          <span className={styles.date}>{date}</span>
        </div>

        <div className={styles.msg}>{msg}</div>
      </div>
    </div>
  )
}