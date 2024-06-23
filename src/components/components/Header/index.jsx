import react from 'react';
import styles from './styles.module.css';
import logo from '../../../assets/logo.png';
import pfp from '../../../assets/image.png';
import settings from '../../../assets/settings.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={pfp} className={styles.pfp} alt="" />
      <img src={logo} className={styles.logo} alt="" />
      <img src={settings} className={styles.settings} alt="" />
    </header>
  )
}