import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import ButtonSlider from "./ButtonSlider";

function Proximamente() {
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
  return (
    <div className="relative w-[95%] text-white m-auto container-slider-proximamente">
      <h1 className="text-xl py-2">Próximas Extrenos</h1>
      <ButtonSlider></ButtonSlider>
      <ul className="flex gap-2 relative overflow-hidden w-full slider-proximamente scroll-smooth ">
        {movies.map((movie) => (
          <a href={movie.id} key={movie.id}>
            <li className="overflow-hidden rounded-lg min-w-[200px] ">
              <div className="relative w-full min-h-[250px] bg-red-500 overflow-hidden">
                <img
                  src={`${IMAGE_PAHT + movie.poster_path}`}
                  alt={movie.title}
                  className="block w-full max-h-[250px] object-cover  hover:scale-105 transition duration-100"
                />
              </div>
              <div>
                <p>{movie.title}</p>
              </div>
              <div className="flex items-center">
                <span className="text-ms text-yellow-400 inline-block">
                  <AiFillStar />
                </span>
                <p className="inline-block px-2">{movie.vote_average}</p>
              </div>
            </li>
          </a>
        ))}
      </ul>
      {console.log(movies)}
    </div>
  );
}

export default Proximamente;
