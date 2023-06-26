import Loader from "../Main/Movies/Loader";
import { convertirFecha } from "../Main/Movies/convertirFecha";
import { roundedStar } from "../Main/Movies/convertirFecha";
import { IMAGE_PAHT } from "../../config/config";
import { AiFillStar } from "react-icons/ai";
export function Page(props) {

  return (
    <div className="w-full relative h-full">
      {props.loandig && <Loader />}
      {props.error && <h4> Erros : {props.error}</h4>}
      <ul
        ref={props.refContentMovie}
        className="flex gap-2 relative flex-wrap w-full justify-between scroll-smooth "
      >
        {props.movies?.map((movie) => (
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

        {/*console.log(movies)*/}
      </ul>
    </div>
  );
}


