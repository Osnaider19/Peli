import { AiFillStar } from "react-icons/ai";
import ButtonSlider from "./ButtonSlider";
import Loader from "./Loader";

const IMAGE_PAHT = "https://image.tmdb.org/t/p/w500/";

function Movies(props) {
    
  return (
    <div className="relative w-[95%] text-white m-auto">
     {props.title && <h1 className="text-2xl py-3">{props.title}</h1> }
      <div className="w-full relative h-full slider-movie">
        <ButtonSlider></ButtonSlider>
        <ul  className="flex gap-2 relative overflow-hidden w-full  scroll-smooth container-slider-movie">
          {props.error && <h4> Erros : {error}</h4>}
          {props.loandig && <Loader/>}
          {props.movies?.map((movie) => (
            <a href={movie.id} key={movie.id}>
              <li className="overflow-hidden rounded-lg min-w-[200px] ">
                <div className="relative w-full min-h-[250px] overflow-hidden">
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
      </div>
    </div>
  );
}

export default Movies;
