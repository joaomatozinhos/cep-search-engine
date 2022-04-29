import React, { useState } from 'react'
import './style.css'
import { IoIosSearch } from 'react-icons/io'

function App() {
  const [input, setInput] = useState('')
  const [cep, setCep] = useState([])

  function handleInputChange(e) {
    let inputData = e.target.value
    setInput(inputData)
  }

  function handleSearch() {
    let url = `https://viacep.com.br/ws/${input}/json`

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCep(data)
        setInput('')
      })
      .catch(error => {
        setInput('')
        alert('Erro ao pesquisar. Digite um CEP válido.')
      })
  }

  return (
    <div className="container">
      <h1 className="title">CEP Search Engine</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your CEP..."
          value={input}
          onChange={handleInputChange}
        ></input>
        <button className="btn-search" onClick={handleSearch}>
          <IoIosSearch></IoIosSearch>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
        <div className="outcome">
          <h3>CEP: {cep.cep}</h3>
          <p>{cep.logradouro}</p>
          <p>Bairro {cep.bairro}</p>
          <p>Complemento: {cep.complemento}</p>
          <p>
            {cep.localidade} - {cep.uf}
          </p>
        </div>
      )}
    </div>
  )
}

export default App
