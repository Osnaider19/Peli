import { handelScrollLeft, handelScrollRigth } from "../../hooks/funtionScroll";
import { defaultImg } from "../../config/config";
import { URL } from "../../config/config";
import { getCreditos } from "../DetailsMovies/getCreditos";
import ButtonSlider from "../Main/SlideMovies/ButtonSlider";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { IMAGE_PAHT } from "../../config/config";
export default function CreditosSerie({ id }) {
  const Url = `https://api.themoviedb.org/3/tv/${id}/credits?`;

  const { creditos, error, loader } = getCreditos(Url);
  const cast = creditos.cast?.slice(0, 15);
  const refSlider = useRef();

  return (
    <>
      {error && <h3>Error {error}</h3>}
      {loader && <h3>Cargando</h3>}
      {cast.length !== 0 ? <div className="relative py-3 text-white w-[95%] m-auto">
        <h2 className="py-2 text-xl font-bold">Reparto principal</h2>
        <div className="w-full py-3 relative h-full slider-movie">
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
            className="relative  scroll-smooth flex overflow-x-scroll gap-3 md:overflow-hidden"
          >
            {cast ? (
              cast.map((actor) => (
                <li
                  key={actor.id}
                  className="rounded-xl overflow-hidden min-w-[150px]  md:max-w-[210px] md:min-w-[210px]"
                >
                  <Link to={`/person/${actor.id}`}>
                    <img
                      src={
                        actor.profile_path
                          ? `${IMAGE_PAHT + actor.profile_path}`
                          : defaultImg
                      }
                      alt={actor.name}
                      className="block w-full min-h-[200px] min-w-[150px] object-cover md:min-h-[250px] md:max-h-[250px]"
                    />
                  </Link>
                  <div>{actor.character}</div>
                  <span className="text-ms font-bold ">{actor.name}</span>
                </li>
              ))
            ) : (
              <h4>Cargando</h4>
            )}
            <div className="flex items-center justify-center min-h-[250px] max-h-[250px] max-w-[210px] min-w-[210px]">
              <Link className="font-bold text-xl">Ver más</Link>
            </div>
          </ul>
        </div> 
        </div>    : <div className="relative w-[95%] m-auto">
          <p className="py-3 text-xl text-white ">No se han añadido creditos</p>
        </div> }
        {console.log(creditos)}
        {console.log(id)}
      
    </>
  );
}
