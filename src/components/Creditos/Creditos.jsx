import { IMAGE_PAHT_200 } from "../../config/config";
import { useEffect, useRef } from "react";
import ButtonSlider from "../Main/SlideMovies/ButtonSlider";
import { handelScrollLeft, handelScrollRigth } from "../../hooks/funtionScroll";
import { Link } from "react-router-dom";
import { defaultImg } from "../../config/config";
import { getCreditos } from "../../hooks/getCreditos";


export function Creditos({ id , type }) {

  const Url = `https://api.themoviedb.org/3/${type}/${id}/credits?`;
  const { creditos, error, loader } = getCreditos(Url, id);
  const cast = creditos.cast?.slice(0, 15);
  const refSlider = useRef();

  useEffect(() => {
    refSlider.current.scrollLeft = 0;
  }, [id]);

  return (
    <>
      {error && <h3>Error {error}</h3>}
      {loader && ''}
      <div className="py-3 ">
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
            className="relative  scroll-smooth flex overflow-x-scroll gap-3 justify-between md:overflow-hidden"
          >
            {cast ? (
              cast.map((actor) => (
                <li
                  key={actor.id}
                  className="rounded-xl overflow-hidden min-w-[150px]  md:max-w-[180px] md:min-w-[180px]"
                >
                  <Link to={`/person/${actor.id}`}>
                    <img
                      src={
                        actor.profile_path
                          ? `${IMAGE_PAHT_200 + actor.profile_path}`
                          : defaultImg
                      }
                      alt={actor.name}
                      className="block w-full min-h-[200px] min-w-[150px] object-cover md:min-h-[200px] md:max-h-[250px] "
                      loading="lazy"
                    />
                  </Link>
                  <div>{actor.character}</div>
                  <span className="text-ms font-bold ">{actor.name}</span>
                </li>
              ))
            ) : (
              ''
            )}
            <div className="flex items-center justify-center min-h-[250px] max-h-[250px] max-w-[210px] min-w-[210px]">
              <Link className="font-bold text-xl">Ver más</Link>
            </div>
          </ul>
        </div>
        {/*console.log(creditos)*/}
        
      </div>
    </>
  );
}
