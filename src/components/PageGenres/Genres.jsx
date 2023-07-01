import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API_KEY } from "../../config/config";
import { useParams } from "react-router-dom";
import { convertirFecha, roundedStar } from "../Main/Movies/convertirFecha";
import Loader from "../Main/Movies/Loader";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { IMAGE_PAHT } from "../../config/config";

const Genero = () => {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie/?&page=${page}`,
          {
            params: {
              api_key: API_KEY,
              with_genres: id,
              language: "es",
            },
          }
        );
        const newData = response.data.results;
        setMovies([...movies, ...newData]); 
        setLoader(false);
      } catch (error) {
        setError(error);
        setLoader(true);
      }
    };

    fetchData();
  }, [id]);

  
  const refContentMovie = useRef();

  return (
    <div className="relative w-[95%] text-white m-auto">
      <h2 className="text-2xl py-3 font-bold">Películas Populares</h2>
      <div className="w-full relative h-full">
        {loader && <Loader />}
        {error && <h4> Erros : {error}</h4>}
        <ul
          ref={refContentMovie}
          className="flex gap-2 relative flex-wrap w-full justify-between scroll-smooth "
        >
          {movies?.map((movie) => (
            <li
              key={movie.id}
              className="overflow-hidden rounded-lg max-w-[200px] min-w-[200px]"
            >
              <Link to={`/movie/${movie.id}`}>
                <div className="relative w-full min-h-[250px] overflow-hidden">
                  <img
                    src={`${IMAGE_PAHT + movie.poster_path}`}
                    alt={movie.title}
                    className="block w-full max-h-[250px]   object-cover  hover:scale-105 transition duration-100"
                  />
                </div>
              </Link>
              <div>
                <p>{movie.title ? movie.title : movie.name}</p>
              </div>
              <div className="flex items-center">
                <span className="text-ms text-yellow-400 inline-block">
                  <AiFillStar />
                </span>
                <p className="inline-block px-2">
                  {roundedStar(movie.vote_average)}
                </p>
              </div>
              <div className="py-1">
                <p className="inline-block text-sm text-slate-200">
                  {convertirFecha(
                    `${
                      movie.release_date
                        ? movie.release_date
                        : movie.first_air_date
                    }`
                  )}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center relative w-[95%] bottom-0 text-center py-3 top-0 left-0">
        <button
          className="text-xl px-6 py-2 rounded-lg bg-[#d9254c]"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Genero;
