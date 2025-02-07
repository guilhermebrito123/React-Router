import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import styles from '../Components/SearchForm.module.css'

const SearchForm = () => {

  const navigate = useNavigate()
  const [query, setQuery] = useState()  

  const handleSubmit = (e) => {
    e.preventDefault() //Para não recarregar a página ao clicar no botão de submit
    
    navigate("/search?q=" + query)
}

  return (
    <div className={styles.div}>
      <form onSubmit={handleSubmit}>
        <input className={styles.entrada} type="text" placeholder='Buscar produto (por preço, nome)' onChange={(e) => setQuery(e.target.value)}/>
        <input className={styles.botao} type="submit" value="Buscar"/>
      </form>
    </div>
    
  )
}

export default SearchForm