import { useEffect, useState } from "react";
import axios from "axios";

export function getData(url) {
  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
  const [data, setData] = useState([]);
  const [loandig, setLoanding] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
          },
        });
        setData(response.data.results);
        setLoanding(false);
      } catch (error) {
        setError(error);
        setLoanding(true);
      }
    };

    getData();
  }, [url]);
  return { data, loandig, error };
}
