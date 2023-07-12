import { useParams } from "react-router-dom";
import { getDetailsSerie } from "./getDetailsSerie";
import { IMAGE_PAHT } from "../../config/config";
import {
  convertirDuration,
  convertirFecha,
  roundedStar,
} from "../Main/SlideMovies/convertirFecha";
import { MdOutlineStar } from "react-icons/md";
import { useEffect } from "react";
import { Creditos } from "../Creditos/Creditos";
import { acronimoAIdioma } from "../../hooks/useIdiomas";
import LoaderDetails from "../Loaders/LoaderDetails";
import { Recomendadas } from "../Recomendadas/Recomendadas";
import { useState } from "react";
import Footer from "../Footer/Footer";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
export function DetailsSeries() {
  const [play, setPlay] = useState(false); //para ver si se muestra el modal de trailer
  const { id } = useParams();
  const Url = `https://api.themoviedb.org/3/tv/${id}?language=es`;
  const { details, error, loader, setLoader } = getDetailsSerie(Url);

  document.title = details.name ? details.name + " - Movie Tv" : "Movie Tv";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Url]);

  return (
    <>
      {error && <h2>Error {Error}</h2>}
      {loader ? (
        <LoaderDetails />
      ) : (
        <div>
          <div className="relative pt-[90px] w-[95%] m-auto text-white">
            {/*console.log(details)*/}
            <div className="relative w-full rounded-lg flex flex-col  overflow-hidden md:flex-row md:gap-3">
              <div className="w-full py-4 md:w-auto md:py-0">
                <div className="overflow-hidden rounded-xl h-[300px] w-[250px] md:min-w-[340px] block md:min-h-[510px] md:max-w-[340px] md:max-h-[510px] z-10">
                  {
                    <img
                      loading="lazy"
                      src={`${IMAGE_PAHT + details.poster_path}`}
                      alt={details.title}
                      className="w-full object-cover"
                    />
                  }
                </div>
              </div>
              <div>
                <div>
                  <h1 className="font-bold text-3xl py-3 md:py-0">
                    {details.name}
                  </h1>
                </div>

                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex  gap-[3px] py-1">
                    {details.genres ? (
                      details.genres.map((genre) => (
                        <span key={genre.id} to={`${genre.id}`}>
                          <span className="text-ms font-bold hover:opacity-80">
                            {genre.name},
                          </span>
                        </span>
                      ))
                    ) : (
                      <h4>Cargando</h4>
                    )}
                  </div>
                </div>
                {details.tagline ? (
                  <div>
                    <p className="mt-1">{details.tagline}</p>
                  </div>
                ) : (
                  ""
                )}

                <div>
                  <p className="font-bold py-1">Primer fecha de emisión </p>
                  <span>
                    {convertirFecha(
                      `${details.first_air_date ? details.first_air_date : 0}`
                    )}
                  </span>
                </div>

                <div>
                  <p className="text-xl font-bold py-2">Vista general</p>
                  <p>{details.overview}</p>
                </div>

                <div>
                  <p className="font-bold pt-2 pb-1">última fecha de emisión</p>
                  <p>
                    {convertirFecha(
                      `${details.last_air_date ? details.last_air_date : 0}`
                    )}
                  </p>
                </div>

                <div className="flex  gap-5 pt-2">
                  <div className="flex items-center gap-2">
                    <i className="text-4xl text-yellow-400">
                      <MdOutlineStar />
                    </i>
                    <span className="text-xl">
                      {roundedStar(
                        details.vote_average ? details.vote_average : 0
                      )}
                    </span>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => {
                        setPlay(true);
                      }}
                      className="py-2 px-3 font-bold rounded-lg bg-[#d9254c]"
                    >
                      Ver Tailer
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-ms font-bold">Idioma original</p>
                  <p>{acronimoAIdioma(details.original_language)}</p>
                </div>
                <div>
                  <p className="font-bold">titulo original</p>
                  <p>{details.original_name}</p>
                </div>
              </div>
            </div>
            <div className="py-3">
              <p className="font-bold text-xl pb-2">Último episodio</p>
              {details.last_episode_to_air ? (
                <div className="flex gap-3 flex-col md:flex-row">
                  <div className="rounded-lg overflow-hidden min-w-[200px] max-w-[200px]">
                    <img
                      src={IMAGE_PAHT + details.last_episode_to_air.still_path}
                      alt={details.last_episode_to_air.name}
                      className="min-w-[200px] w-[200px] h-[230px] object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xl font-bold ">
                      {details.last_episode_to_air.name}
                    </p>
                    <p className="w-[80%]">
                      {details.last_episode_to_air.overview}
                    </p>
                    <p className="font-bold">Episodio numero</p>
                    <p>{details.last_episode_to_air.episode_number}</p>
                    <div>
                      <p className="font-bold">Duración</p>
                      <p>
                        {convertirDuration(details.last_episode_to_air.runtime)}
                      </p>
                    </div>
                    <div>
                      <p className="font-bold">Temporada</p>
                      <p>{details.last_episode_to_air.season_number}</p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="text-white py-3 w-[95%] m-auto">
            <Creditos id={id} type={`tv`}/>
            <Recomendadas id={id} setLoader={setLoader} type={`tv`}/>
          </div>
          <Footer />
          {play ? <ModalTrailer id={id} setPlay={setPlay} type={`tv`}/> : undefined}
        </div>
      )}
    </>
  );
}
