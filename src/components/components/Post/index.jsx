import React from "react";
import styles from "./styles.module.css";
import user from "../../../assets/image.png";
import coms from "../../../assets/coms.svg";
import repost from "../../../assets/repost.svg";
import likes from "../../../assets/likes.svg";

export default function Post() {
  return (
    <div className={styles.post}>
      <div className={styles.header}>
        <img src={user} className={styles.user} alt="" />
        <span className={styles.name}>nitro livra</span>
        <span>@nitrolivra</span>
        <span>15h</span>
      </div>

      <p className={styles.content}>5 formas de comunicacao
      </p>

      <div className={styles.info}>
        <div className={styles.coms}>
          <img src={coms} alt="" />
          <span>1.1k</span>
        </div>

        <div className={styles.coms}>
          <img src={repost} alt="" />
          <span>1.1k</span>
        </div>

        <div className={styles.coms}>
          <img src={likes} alt="" />
          <span>1.1k</span>
        </div>
      </div>
    </div>
  )
}