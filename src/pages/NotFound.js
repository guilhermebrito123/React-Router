import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import {useFetch} from "../Hooks/useFetch"

const NotFound = () => {

  const [searchParams] = useSearchParams()

  const url = "http://localhost:3000/products?" + searchParams 

  return (
    <div>
      <h1>404</h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export default NotFound;
