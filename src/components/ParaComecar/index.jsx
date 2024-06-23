import styles from "./styles.module.css"
import logo from "../../assets/logo.png"

export default function ParaComecar() {
  return (
      <div className="container">
        <div className="img-wrapper">
          <img className={`logo ${styles.logo}`} src={logo} alt="" srcset="" />
        </div>
        
          <h1 className={styles.title}>Para começar, informe telefone, e-mail ou @nomedeusuario</h1>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Email, phone or username</label>
            <input type="text" className={styles.input} name="" id="" />
          </div>

          <div className={styles.btnWrapper}>
            <a href="/" className={styles.link}>Esqueceu sua senha?</a>
            <button className={`primary-button ${styles.btn}`}>Avançar</button>
          </div>
       </div>
    )
}