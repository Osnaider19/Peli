import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/config";

export function getSearch(url, key) {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const search = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            query: key,
          },
        });
        setData(response.data.results);
        setLoader(false);
      } catch (error) {
        setError(error);
        setLoader(true);
      }
    };

    search();
  }, [url, key]);

  return { data, loader, error };
}
