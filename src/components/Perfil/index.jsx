import React from "react";
import styles from "./styles.module.css";
import arrow from "../../assets/arrow-left.svg";
import logo from "../../assets/logo.png";
import cover from "../../assets/cover.png";
import profile from "../../assets/image.png";
import Post from "../components/Post";

import home from "../../assets/home.png";
import bell from "../../assets/bell.png";
import search from "../../assets/search.png";
import profilei from "../../assets/profile.png";

export default function Perfil() {
    return (
      <div className={`containerLight`}>
        <header className={styles.header}>
          <div className={styles.left}>
            <img src={arrow} alt="" />
            <div className="">
              <h2 className={styles.name}>Sparking</h2>
              <p className={styles.posts}>25 posts</p>
            </div>
          </div>

          <img src={logo} className={styles.logo} alt="" />
        </header>

        <img src={cover} className={styles.cover} alt="" />

          <img src={profile} className={styles.profile} alt="" />

          <div className={styles.btns}>
            <button className={styles.btn1}>seguir</button>
            <button className={styles.btn2}>editar perfil</button>
          </div>

          <p className={styles.nameP}>vitor livra</p>
          <p className={styles.tagP}>@vitorLivra</p>

          <p className={styles.fll}><span className={styles.count}>0</span> Following <span className={styles.count}>67.9M</span> Followers</p>

          <div className={styles.links}>
            <a className={`${styles.link} ${styles.active}`} href="">Posts</a>
            <a className={styles.link} href="">Affiliates</a>
            <a className={styles.link} href="">Highlights</a>
            <a className={styles.link} href="">Media</a>
          </div>

          <Post />
          <Post />

          <nav className={styles.nav}>
      <img src={home} className={styles.img} alt="" />
      <img src={bell} className={styles.img} alt="" />
      <img src={search} className={styles.img} alt="" />
      <img src={profilei} className={styles.img} alt="" />
    </nav>
      </div>
    );
}