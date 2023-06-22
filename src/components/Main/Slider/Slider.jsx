import { AiFillStar } from "react-icons/ai";
import { ScrollAutomatico } from "./FScrollAutomatico";
import {FechApi} from '../Movies/FechApi';
import { convertirFecha } from "../Movies/convertirFecha";

function Slide() {
  const { movies} = FechApi(
    "https://api.themoviedb.org/3/movie/popular?language=es&page=1"
  );

  const IMAGE_PAHT = "https://image.tmdb.org/t/p/original/";

  return (
    <div className="relative flex m-auto w-[95%] h-[410px]  mr-7 bg-slate-800 rounded-xl overflow-hidden ">
      <ul
        className="relative flex snap-mandatory  snap-x scroll-smooth container-slider "
        onMouseOver={ScrollAutomatico}
      >
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="relative w-full h-full min-w-full min-h-full snap-center "
          >
            <div className="absolute w-full h-full bg-black/40 z-10 pointer-events-none"></div>

            <img
              src={`${IMAGE_PAHT + movie.backdrop_path}`}
              alt={movie.title}
              className="object-cover h-full w-full absolute "
              loading="lazy"
            />

            <div className="text-white  relative pt-20 px-9 z-20">
              <p className="text-3xl">{movie.title}</p>
              <div className="container-description">
                <p className="text-ms w-[50%] py-1 ">{movie.overview}</p>
              </div>
              <div className="">
                <p className="py-1"> {convertirFecha(
                    `${
                      movie.release_date
                        ? movie.release_date
                        : movie.first_air_date
                    }`
                  )}</p>
              </div>
              <div className="flex items-center relative">
                <span className="text-ms text-yellow-400 inline-block">
                  <AiFillStar />
                </span>
                <span className="px-3 text-ms">{movie.vote_average}</span>
              </div>

              <div className="relative py-5">
                <a href="" className="py-2 px-7 bg-[#d9254c] rounded-md">
                  Ver
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Slide;
