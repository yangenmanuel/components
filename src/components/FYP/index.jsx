import React from "react";
import styles from "./styles.module.css";

import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

import coms from "../../assets/coms.svg";
import repost from "../../assets/repost.svg";
import likes from "../../assets/likes.svg";
import user from "../../assets/user.png";
import business from "../../assets/business.png";

export default function FYP() {
  return (
    <div className={`containerLight`}>
      <Header />
      <div className={styles.opts}>
        <span className={styles.fy}>Para Voce</span>
        <span style={{ paddingBottom: "14px"}}>Seguindo</span>
      </div>
        <div className={styles.posts}>
          <Post />
          <Post />

      <div className={styles.post}>
        <img src={user} className={styles.user} alt="" />
        <div className={styles.right}>
          <div className={styles.header}>
            <span className={styles.name}>Crypto.com</span>
            <span>@nitrolivra</span>
            <span>15h</span>
          </div>
          
          <div className={styles.content}>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga unde qui ipsa deserunt asperiores illum magni? Maxime nulla eos architecto quia! Officia reprehenderit asperiores, quibusdam et harum voluptates voluptate possimus?</p>

          <img src={business} className={styles.img} alt="" />
          </div>

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
    </div>
        </div>
      <Navbar />
    </div>
  )
}