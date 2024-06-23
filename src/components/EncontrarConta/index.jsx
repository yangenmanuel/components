import "./styles.css"
import logo from "../../assets/logo.png"

export default function EncontrarConta() {
  return (
      <div className="container">
        <div className="img-wrapper">
          <img className="logo" src={logo} alt="" srcset="" />
        </div>
        
          <h1 className="title">Encontre sua conta sparking</h1>
          <p className="text">Informe o e-mail, numero de celular ou nome de usuario associado a sua conta para alterar sua senha.</p>

          <div className="btn-wrapper">
            <button className="primary-button btn1">E-mail, numero de celular ou nome de usario</button>
            <button className="primary-button btn2">Avançar</button>
          </div>
       </div>
    )
}