import React from 'react'
import './styles.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'





export default function Register(){
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logo}></img>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro!!</p>

                    <Link className="back-link" to="/register">
                 <FiArrowLeft size={16} color="E02041"/>   Não tenho cadastro</Link>
                </section>
                <form>
                    <input placeholder="Nome da ONG"></input>
                    <input type="email" placeholder="Email"></input>
                    <input placeholder="Whatsapp"></input>

                   <div className="input-group">
                    <input placeholder="Cidade"></input>   
                    <input placeholder="UF" style={{ width: 80 }}></input>   
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>

        </div>
    )

}