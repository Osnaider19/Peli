import { useEffect, useState } from "react";
import axios from "axios";

  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
 export function getCategorias(url) {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
      const getCategorias = async () => {
        try {
          const response = await axios.get(url, {
            params: {
              api_key: API_KEY,
            },
          });
         
          setCategorias(response.data.genres);
          console.log(response.data)
        } catch (error) {
          console.log('erro en obtener las categorias' + error)
        }
      };
  
      getCategorias();
    }, []);

    return { categorias }

  }