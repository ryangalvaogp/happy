import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import logoImg from '../images/Logo.svg'
import '../styles/pages/landing.css'

export default function Lading() {
  return (

    <div id="page-landing" className="App">

      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve Felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Pará</strong>
          <span>Paragominas</span>
        </div>

        <Link to="/app" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"  ></FiArrowRight>
        </Link>

      </div>
    </div>
  )
}