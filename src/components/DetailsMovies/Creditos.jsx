import { getCreditos } from "./getCreditos";
import { IMAGE_PAHT } from "../../config/config";
import { useEffect, useRef, useState } from "react";
import ButtonSlider from "../Main/SlideMovies/ButtonSlider";
import { handelScrollLeft ,handelScrollRigth } from "../../hooks/funtionScroll";
import { Link } from "react-router-dom";
import { defaultImg } from "../../config/config";

export function Creditos({id}) {
  
  const Url = `https://api.themoviedb.org/3/movie/${id}/credits?`;
  
  const { creditos, error, loader } = getCreditos(Url , id);
  const cast = creditos.cast?.slice(0 , 15);
  const refSlider = useRef();
   
  useEffect(()=>{
    refSlider.current.scrollLeft = 0;
  }, [id])

  return (
    <>
      {error && <h3>Error {error}</h3>}
      {loader && <h3>Cargando</h3>}
      <div className="py-3 ">
        <h2 className="py-2 text-xl font-bold">Reparto principal</h2>
        <div className="w-full py-3 relative h-full slider-movie">
          <ButtonSlider
            scrollLeft={()=>{handelScrollLeft(refSlider)}}
            scrollRigth={()=>{handelScrollRigth(refSlider)}}
          />
          <ul
            ref={refSlider}
            className="relative  scroll-smooth flex overflow-hidden gap-3 justify-between "
          >
            
            {cast ? (
             cast.map((actor) => (
                <li
                  key={actor.id}
                  className="rounded-xl overflow-hidden w-auto max-w-[210px] min-w-[210px]"
                >
                  <img
                    src={actor.profile_path ? `${IMAGE_PAHT + actor.profile_path}` : defaultImg }
                    alt={actor.name}
                    className="block w-full min-h-[250px] max-h-[250px] object-cover"
                  />
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
        {console.log(cast )}
        {console.log(id)}
      </div>
    </>
  );
}
