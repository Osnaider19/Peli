import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "../config/config";

export function getData(url) {
  const [data, setData] = useState([]);
  const [loandig, setLoanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fechApi = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language : 'es-MX',
          },
        });
        setData(response.data.results);
        setLoanding(false);
      } catch (error) {
        setError(error);
        setLoanding(true);
      }
    };

    fechApi();
  }, [url]);
  return { data, loandig, error };
}
