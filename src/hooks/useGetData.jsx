import { useEffect, useState } from "react";
import axios from "axios";

export function getData(url) {
  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
  const [data, setData] = useState([]);
  const [loandig, setLoanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fechApi = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language : 'es'
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
