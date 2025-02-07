//Componentes:
import { Link } from "react-router-dom";

//Formatação:
import styles from "../pages/Product.module.css";

//Hooks:
import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

const Product = () => {
  //Rota dinâmica:
  const { id } = useParams();

  //Carregamento dado individual:
  const url = "http://localhost:3000/products/" + id;

  const { data: product, loading, error } = useFetch(url);

  console.log(product);

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <h3>R${product.price}</h3>
          {/*Nested Route: */}
          <Link to={`/product/${product.id}/info`} className={styles.style} style={{paddingBlock: 5, paddingInline: 15, borderRadius: 20}}>
            Mais informações
          </Link>
        </div>      
      )}
      
    </>
  );
};

export default Product;
