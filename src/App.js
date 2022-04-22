import React from 'react'
import './style.css'
import { IoIosSearch } from 'react-icons/io'

function App() {
  return (
    <div className="container">
      <h1 className="title">CPF Search Engine</h1>
      <div className="input-container">
        <input type="text" placeholder="Enter your CPF..."></input>
        <button className="btn-search">
          <IoIosSearch></IoIosSearch>
        </button>
      </div>
      <div className="outcome">
        <h3>CEP: 35460000</h3>
        <p>Rua Ismael Neto</p>
        <p>Bairro Silva Prado</p>
        <p>Complemento: Apto 201</p>
        <p>Brumadinho - MG</p>
      </div>
    </div>
  )
}

export default App
