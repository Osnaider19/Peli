import { convertirFecha, roundedStar } from "../Main/Movies/convertirFecha";
import { useGetMovies } from "./useGetMovies";
import Loader from "../Main/Movies/Loader";
import { AiFillStar } from "react-icons/ai";

export default function Movies() {
    const IMAGE_PAHT = "https://image.tmdb.org/t/p/w500/";
    const {movies , loandig , error} = useGetMovies('https://api.themoviedb.org/3/movie/popular?language=es&page=1')
   
    return(

        <div className="relative w-[95%] text-white m-auto">
         <h2 className="text-2xl py-3 font-bold">Películas Populares</h2>
        <div className="w-full relative h-full">
          {loandig && <Loader/>}
          {error && <h4> Erros : {error}</h4>}
          <ul  className="flex gap-2 relative flex-wrap w-full justify-between scroll-smooth container-slider-movie">
            {movies?.map((movie) => (
              <li
                key={movie.id}
                className="overflow-hidden rounded-lg max-w-[200px] min-w-[200px]"
              >
                <a href={movie.id}>
                  <div className="relative w-full min-h-[250px] overflow-hidden">
                    <img
                      src={`${IMAGE_PAHT + movie.poster_path}`}
                      alt={movie.title}
                      className="block w-full max-h-[250px]  object-cover  hover:scale-105 transition duration-100"
                    />
                  </div>
                </a>
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
            {console.log(movies)}
          </ul>
        </div>
      </div>
    );
}