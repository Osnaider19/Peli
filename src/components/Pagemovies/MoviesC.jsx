import { convertirFecha, roundedStar } from "../Main/SlideMovies/convertirFecha";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useRef } from "react";
import LoaderMovies from "./LoaderMovies";
import { IMAGE_PAHT_300 } from "../../config/config";

export function MoviesC({ movies, loading, error, page, setPage , title }) {

  const refContentMovie = useRef();
  
  return (
    <>
      <div className="relative w-[95%] text-white m-auto">
        <h2 className="text-2xl py-3 font-bold">{title}</h2>
        <div className="w-full relative h-full">
          {loading && <LoaderMovies/>}
          {error && <h4> Erros : {error}</h4>}
          <ul
            ref={refContentMovie}
            className="flex gap-2 relative flex-wrap w-full justify-center scroll-smooth md:justify-between"
          >
            {movies?.map((movie) => (
              <li
                key={movie.id}
                className="overflow-hidden max-w-[150px] min-w-[150px] rounded-lg md:max-w-[200px] md:min-w-[200px]"
              >
                <Link to={`${movie.id}`}>
                  <div className="relative w-full min-h-[200px] md:min-h-[250px] overflow-hidden">
                    <img
                      src={`${IMAGE_PAHT_300 + movie.poster_path}`}
                      alt={movie.title}
                      className="block w-full max-h-[200px] md:max-h-[250px]   object-cover  hover:scale-105 transition duration-100"
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
            Ver Más
          </button>
        </div>
      </div>
    </>
  );
}
