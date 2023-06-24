import { useEffect, useState } from "react";
import axios from "axios";

 export function useGetMovies(url) {

  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
  const [movies, setMovies] = useState([]);
  const [loandig, setLoanding] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
          },
        });
        setMovies(response.data.results);
        setLoanding(false);
      } catch (error) {
        setError(error);
        setLoanding(true);
      }
    };

    getMovies();
  }, [url]);
  return { movies, loandig, error };
}
