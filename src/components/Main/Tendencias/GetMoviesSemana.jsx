import { useState, useEffect } from "react";
import axios from "axios";

export function GetMoviesSemana(url) {
  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
  const [movies, setMovies] = useState([]);
  const [loandig, setLoanding] = useState(true);
  const [error, setError] = useState(null);
  const [obtenerMovies, setObtenerMovies] = useState(true);

  
  useEffect(()=>{
    const fetchUpcomingMovies = async () => {
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
      }
      obtenerMovies !=  fetchUpcomingMovies();
    };
  } , [obtenerMovies]);

  

  return { movies, loandig, error  } 
}

