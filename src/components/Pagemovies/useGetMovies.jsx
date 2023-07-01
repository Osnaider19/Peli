import axios from "axios";
import { API_KEY } from "../../config/config";
import { useEffect, useState } from "react";

export function GetMovies(url , page ) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language: "es",
          },
        });
        const newData = response.data.results;
        setMovies([...movies, ...newData]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [page , url]);
  return { movies, loading, error , setMovies , setLoading};

  
}
