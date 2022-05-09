import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      //tratamento de erros
      try {
        //obtenção da reposta, conversão em objeto e inserção desta em data
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err.message);
        setErr('Houve um erro ao carregar os dados.');
      }
    };

    fetchData();
  }, [url]);

  return { data, err };
};
