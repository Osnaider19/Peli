import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/config"; 

export function getCreditos(url , id) {
  const [creditos, setCreditos] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language : 'es',
          },
        });
        //const cast = response.data.splice(0 , 20);
        setCreditos(response.data);
        setLoader(false)
      } catch (error) {
        setError(error);
        setLoader(true)
      }
    };
    getDetails();
  }, [url , id]);

  return { creditos , error , loader };
}
