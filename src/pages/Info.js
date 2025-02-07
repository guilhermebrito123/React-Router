import { useParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";

import styles from "../pages/Info.module.css";

const Info = () => {
  const { id } = useParams();

  const url = "http://localhost:3000/products/" + id;

  const { data: produto, loading, error } = useFetch(url);

  console.log(produto)

  return (
    <>
      <h2 className={styles.info}>
        Mais informações sobre o produto com id {id}:
      </h2>
      {loading && <p>Carregando...</p>}
      {error && <p>Erro ao trazer os dados...</p>}
      {produto && (
        <ul className={styles.lista} >
            <li className={styles.item}>Produto: {produto.name}</li>
            <li className={styles.item}>R$ {produto.price}</li>
            <img className={styles.imagem} src={produto.src} alt="Imagem do produto" />
        </ul>
      )}
    </>
  );
};

export default Info;
