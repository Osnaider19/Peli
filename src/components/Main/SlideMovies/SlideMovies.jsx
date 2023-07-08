import { AiFillStar } from "react-icons/ai";
import ButtonSlider from "./ButtonSlider";
import Loader from "./Loader";
import { convertirFecha, roundedStar } from "./convertirFecha";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IMAGE_PAHT_300 } from "../../../config/config";
import {
  handelScrollLeft,
  handelScrollRigth,
} from "../../../hooks/funtionScroll";
export default function SlideMovies(props) {

  const refSlider = useRef();

  return (
    <div className="relative w-[95%] text-white m-auto">
      {props.title && <h2 className="text-xl py-2 font-bold">{props.title}</h2>}
      <div className="w-full relative h-full slider-movie">
        {props.loandig && <Loader />}
        {props.error && <h4> Erros : {props.error}</h4>}
        <ButtonSlider
          scrollLeft={() => {
            handelScrollLeft(refSlider);
          }}
          scrollRigth={() => {
            handelScrollRigth(refSlider);
          }}
        />
        <ul
          ref={refSlider}
          className="flex gap-2 relative overflow-x-scroll w-full  scroll-smooth container-slider-movie md:overflow-hidden"
        >
          {props.movies?.map((movie) => (
            <li
              key={movie.id}
              className="overflow-hidden rounded-lg min-w-[150px] md:min-w-[210px]"
            >
              <Link
                to={
                  movie.media_type
                    ? `/${movie.media_type}/${movie.id}`
                    : `/${props.categoria}/${movie.id}`
                }
              >
                <div className="relative w-full min-h-[225px] overflow-hidden md:min-w-[210px]">
                  <img
                    src={`${IMAGE_PAHT_300 + movie.poster_path}`}
                    alt={movie.title ? movie.title : movie.name} 
                    className="block w-full max-h-[250px] object-cover  hover:scale-105 transition duration-100 md:min-w-[210px]"
                    loading="lazy"
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
          {/*console.log(props.movies)*/}
        </ul>
      </div>
    </div>
  );
}
