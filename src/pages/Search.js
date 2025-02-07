import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {useFetch} from '../Hooks/useFetch'

const Search = () => {

  const [searchParams] = useSearchParams()

  const url = "http://localhost:3000/products?" + searchParams

  const {data: items, loading, error} = useFetch(url)

  return (
    <div>
      <h1>Resultados disponíveis para palavra <i style={{color:'rgb(235, 214, 28)'}}>{searchParams.get("q")}</i>:</h1>
      <ul className="products">
        {items && items.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <h2>R$:{item.price}</h2>
            <Link style={{textDecoration: 'none', color: 'white', fontWeight: 'bold', backgroundColor: 'black', paddingInline: 15, paddingBlock: 5, borderRadius: 20}} 
             to={`/product/${item.id}`}>Detalhes</Link>
          </li> 
        ))}
      </ul>
    </div>
  )
}

export default Search