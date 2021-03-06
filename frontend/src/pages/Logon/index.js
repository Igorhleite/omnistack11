import React from 'react'
import './styles.css'
import heroes from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'


export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logo} alt="The Hero"/>
                <form>
                    <h1> Faça seu logon </h1>

                <input placeholder="Sua ID"/>
                <button className="button" type="submit">Entrar</button>
                <Link className="back-link" to="/register">
                 <FiLogIn size={16} color="E02041"/>   Não tenho cadastro</Link>
                </form>

            </section>

            <img src={heroes} alt="heroes">
            </img>
        
        </div>
    )
}