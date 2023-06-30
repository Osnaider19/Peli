import { useEffect, useState } from "react";
import axios from "axios";

  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
 export function getCategorias(url) {
    const [categorias, setCategorias] = useState([]);
    const [loader , setLoader] = useState(true);
    const [error , setError] = useState(null);
    useEffect(() => {
      const getCategorias = async () => {
        try {
          const response = await axios.get(url, {
            params: {
              api_key: API_KEY,
              language : 'es',
            },
          });
         
          setCategorias(response.data.genres);
          setLoader(false);
        } catch (error) {
          setError(error)
          setLoader(true);
        }
      };
  
      getCategorias();
    }, []);

    return { categorias , loader , error }

  }