import { useParams } from "react-router-dom";
import {
  convertirFecha,
  roundedStar,
} from "../Main/SlideMovies/convertirFecha";
import { MdOutlineStar } from "react-icons/md";
import { Creditos } from "../Creditos/Creditos";
import { IMAGE_PAHT } from "../../config/config";
import { getDetailsMovies } from "./getDetails";
import { URL } from "../../config/config";
import { useEffect, useState } from "react";
import ModalTrailer from "../ModalTrailer/ModalTrailer";
import { Recomendadas } from "../Recomendadas/Recomendadas";
import Footer from "../Footer/Footer";
import { convertirDuration } from "../Main/SlideMovies/convertirFecha";
import { acronimoAIdioma } from "../../hooks/useIdiomas";
import LoaderDetails from "../Loaders/LoaderDetails";
export function Details() {
  const [play , setPlay] = useState(false); //para ver si se muestra el modal de trailer
  const { id } = useParams();
  const Url = `${URL}/movie/${id}`;
  const { details, loader, error , setLoader } = getDetailsMovies(Url);

  

  document.title = details.title ? `${details.title} - Movie Tv` : `Movie Tv`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [Url]);

  return (
    <>
      {error && <h3>Ocurrio un error </h3>}
      {loader ? (
        <LoaderDetails />
      ) : (
        <div>
          <div className="relative pt-[90px] w-[95%] m-auto text-white">
            <div>
              <div className="relative w-full rounded-lg flex flex-col  overflow-hidden md:flex-row md:">
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
                <div className=" z-20 md:px-5">
                  <div>
                    <h1 className="font-bold text-3xl py-3 md:py-0">
                      {details.title}
                    </h1>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="flex  gap-[3px] py-2">
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
                    <div>
                      <li className="font-bold block md:list-item md:ml-2">
                        {convertirDuration(details.runtime)}
                      </li>
                    </div>
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
                      {roundedStar(
                        details.vote_average ? details.vote_average : 0
                      )}
                    </span>
                  </div>
                  <div>
                    <div className="text-ms font-bold">Idioma original</div>
                    <span className="block py-1">
                      {acronimoAIdioma(details.original_language)}
                    </span>
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
                        <button onClick={()=>{setPlay(true)}}
                        className="py-2 px-3 font-bold rounded-lg bg-[#d9254c]">
                          Ver Tailer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <Creditos id={id} type={`movie`}/>
            {play ? <ModalTrailer id={id} setPlay={setPlay} type={`movie`}/> : undefined}
            <Recomendadas id={id} setLoader={setLoader} type={`movie`}/>
            

            {/*console.log(details)*/}
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
