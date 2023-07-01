import { Link, useParams } from "react-router-dom";
import { convertirFecha, roundedStar } from "../Main/SlideMovies/convertirFecha";
import { MdOutlineStar } from "react-icons/md";
import { Creditos } from "./Creditos";
import { IMAGE_PAHT } from "../../config/config";
import { getDetailsMovies } from "./getDetails";
import { URL } from "../../config/config";
import { useEffect, useState } from "react";
import ModalTrailer from "./ModelTrailer";
import Loader from "./Loader";
import { Recomendadas } from "./Recomendadas";
import Footer from "../Footer/Footer";
import { convertirDuration } from "../Main/SlideMovies/convertirFecha";

export function Details() {
  const { id } = useParams();
  const Url = `${URL}/movie/${id}`;
  const { details, loader, error } = getDetailsMovies(Url);

  document.title = `${details.title} - Movie Tv`;

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [id]);
  
  return (
    <>
      <div className="relative pt-[75px] w-[95%] m-auto text-white">
        {error && <h3>Ocurrio un error </h3>}
        {loader && <Loader />}
        <div>
          <div className="relative w-full rounded-lg flex overflow-hidden">
            <div className="overflow-hidden rounded-xl min-w-[340px] block min-h-[510px] max-w-[340px] max-h-[510px] z-10">
              {
                <img
                  loading="lazy"
                  src={`${IMAGE_PAHT + details.poster_path}`}
                  alt={details.title}
                  className="w-full object-cover"
                />
              }
            </div>
            <div className="px-5 z-20">
              <div>
                <h1 className="font-bold text-3xl">{details.title}</h1>
              </div>
              <div className="flex gap-[3px] py-2">
                {details.genres ? (
                  details.genres.map((genre) => (
                    <Link key={genre.id} to={`${genre.id}`}>
                      <span className="text-ms font-bold hover:opacity-80">
                        {genre.name},
                      </span>
                    </Link>
                  ))
                ) : (
                  <h4>Cargando</h4>
                )}
                <li className="ml-2 list-item">
                  {" "}
                  {convertirDuration(details.runtime)}
                </li>
              </div>

              <p className="py-2 font-bold text-sm opacity-75">
                {details.tagline}
              </p>

              <p className="pb-2 font-bold text-xl">Vista general</p>
              <p className="text-ms">{details.overview}</p>
              <div className="flex py-2 gap-2">
                <p className="font-bold">Estreno : </p>
                <p className=" text-ms">
                  {convertirFecha(
                    `${
                      details.release_date
                        ? details.release_date
                        : details.first_air_date
                    }`
                  )}
                </p>
              </div>
              <div className="flex  items-center gap-2">
                <i className="text-4xl text-yellow-400">
                  <MdOutlineStar />
                </i>
                <span className="text-xl">
                  {roundedStar(details.vote_average ? details.vote_average : 0)}
                </span>
              </div>
              <div>
                <div className="text-ms font-bold">Idioma original</div>
                <span className="block py-1">{details.original_language}</span>
              </div>

              <div>
                <div className="text-sm font-bold">Titulo original</div>
                <span className="block py-1 text-ms">
                  {details.original_title}
                </span>
              </div>
              <div className="flex gap-7 justify-between">
                <div>
                  <div className="py-3">
                    <button className="py-2 px-3 font-bold rounded-lg bg-[#d9254c]">
                      Ver Tailer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Creditos id={id} />
        <ModalTrailer id={id} />
        <Recomendadas id={id} />
        {console.log(details)}
      </div>
      <Footer />
    </>
  );
}
