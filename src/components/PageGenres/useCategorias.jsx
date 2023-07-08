import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../../config/config";

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