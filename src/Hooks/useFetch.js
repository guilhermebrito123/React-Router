import { useState, useEffect } from "react";

//Custom hook:
export const useFetch = (url) => {
  const [data, setData] = useState(null);

  //Refatorando o POST:
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  //Loading:
  const [loading, setLoading] = useState(false);

  //Tratando erro (criando um state que aramzenará a mensagem que será exibida para o usuário caso os dados não tenham sido carregados):
    const [error, setError] = useState(null)

  //Criando a função que define o segundo parâmetro da função fetch, que define o corpo da requisição:
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      setMethod(method); //Esse é o método passado como parâmetro para a função httpConfig() no componente pai, em conjunto a isso, esse valor está sendo setado para o state method desse hook
    }
  };

  const httpDelete = () => {
    if(method === "DELETE"){
      setConfig({
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      
      setMethod("DELETE");
    }
  }

  //Refatorando o GET:
  useEffect(
    () => {
      const fetchData = async () => {
        setLoading(true);

        try {
          const res = await fetch(url);

          if (!res.ok) throw new Error("Erro ao buscar dados");

          const json = await res.json(); //Convertendo para javascript, para poder armazenar dentro do state Data

          setData(json);
        } catch (error) {
            console.log(error.message)

            setError("Algum erro ocorreu ao carregar os dados")
        }

        setLoading(false);
      };

      fetchData();
    },
    [url, callFetch] //Quando a URL mudar, essa função será ativada, por isso tenho que colocá-la como referência da função pois, caso a página seja atualizada de alguma forma, se a URl não tiver sido mudada, a requisição não será feita, o mesmo vale para o callFetch, por exemnplo, se eu adicionei alguns dados novos no sistema
  );

  //Refatorando a função de requisição do POST:
  useEffect(() => {
    const httpRequest = async () => {
      if (method === "POST") {
        let fetchOptions = [url, config];

        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json); //Aqui, vai fazer com que uma requisição de GET  seja feita após a finalização da requisição POST
      }
      if(method === "DELETE"){
        let fetchOptions = [url, config]
        
        const res = await fetch(...fetchOptions);

        const json = await res.json();

        setCallFetch(json); //Aqui, vai fazer com que uma requisição de GET  seja feita após a finalização da requisição POST
      }
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error, httpDelete }; //Serão os dados que vamos utilizar na nossa aplicação, graças ao return, o componente pai poderá acessar data, que contém os dados retornados pela API, pois o return retorna os dados para quem chama a função
};
