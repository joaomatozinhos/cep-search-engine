import React, { useState } from 'react'
import './style.css'
import { IoIosSearch } from 'react-icons/io'

function App() {
  const [input, setInput] = useState('')
  const [dataAPI, setDataAPI] = useState([])

  function handleInputChange(e) {
    let inputData = e.target.value
    setInput(inputData)
  }

  function handleSearch() {
    if (input === '') {
      alert('Preencha algum CEP!')
    }

    let url = `https://viacep.com.br/ws/${input}/json`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setDataAPI(data)
      })
  }

  return (
    <div className="container">
      <h1 className="title">CPF Search Engine</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your CPF..."
          value={input}
          onChange={handleInputChange}
        ></input>
        <button className="btn-search" onClick={handleSearch}>
          <IoIosSearch></IoIosSearch>
        </button>
      </div>
      <div className="outcome">
        <h3>CEP: {dataAPI.cep}</h3>
        <p>Rua {dataAPI.logradouro}</p>
        <p>Bairro {dataAPI.bairro}</p>
        <p>Complemento: {dataAPI.complemento}</p>
        <p>
          {dataAPI.localidade} - {dataAPI.uf}
        </p>
      </div>
    </div>
  )
}

export default App
