import  { useEffect, useState } from "react";
import axios from "axios";

export function FechProximas() {
  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
  const IMAGE_PAHT = "https://image.tmdb.org/t/p/w500/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
     const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error al obtener las películas próximas:", error);
      }
    };

   fetchUpcomingMovies();
  }, []);
  return movies;
}