import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/config"; 

export function getCreditos(url) {
  const [creditos, setCreditos] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
          },
        });
        setCreditos(response.data);
        setLoader(false)
      } catch (error) {
        setError(error);
        setLoader(true)
      }
    };
    getDetails();
  }, [url]);

  return { creditos , error , loader };
}
