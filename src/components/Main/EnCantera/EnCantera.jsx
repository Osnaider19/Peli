import { useEffect, useState } from "react";
import axios from "axios";

function EnCantera() {
  const URL = "https://api.themoviedb.org/3/movie/now_playing_";
  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
  const IMAGE_PAHT = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const FechMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/now_playing?language=es&page=1",
          {
            params: {
              api_key: "b62c5015964d4fcc4805e0ce64dfd3c4",
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error al obtener las películas en cantera:", error);
      }
    };
    FechMovies();
  }, []);

  return (
    <div className="relative py-6 ">
      {movies.map((movie) => (
        <a href={movie.id} key={movie.id}>
          <li>
            <p className="text-white">{movie.title}</p>;
          </li>
        </a>
      ))}
      {console.log(movies)}
    </div>
  );
}

export default EnCantera;
