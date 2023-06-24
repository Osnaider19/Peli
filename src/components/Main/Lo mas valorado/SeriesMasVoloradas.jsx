import { useState } from "react";
import { FechApi } from "../Movies/FechApi";
import Movies from "../Movies/Movies";
import MovieMasValoradas from "./MovieMasValoradas";
import { getData } from "../../../hooks/useGetData";

function SeriesMasValoradas() {

    const [estado, setEstado] = useState(true);

   const { data , loandig , error} = getData('https://api.themoviedb.org/3/tv/top_rated?language=es&page=1')

   const handelDesactivado = () => {
    setEstado(false);
    const $buttonHoy = document.querySelector(".button-series");
    const $buttonSemana = document.querySelector(".button-peliculas");
    estado && $buttonSemana.classList.add("activo");
    estado != $buttonHoy.classList.remove("activo");
  };
  const handelActivo = () => {
    setEstado(true);
    const $buttonHoy = document.querySelector(".button-series");
    const $buttonSemana = document.querySelector(".button-peliculas");
    estado != $buttonHoy.classList.add("activo");
    estado != $buttonSemana.classList.remove("activo");
  };

   return (
    <>
    <div className="relative w-[95%] m-auto py-2 text-white">
        <div className="flex items-center  relative ">
          <h2 className=" font-bold text-xl py-2  inline-block">
           Lo más valorado
          </h2>
          <div className="inline-block  py-2  ml-2 ">
            <div id="button-tendencias" className="flex items-center relative border-[1px] top-[1px] overflow-hidden  rounded-full border-slate-700">
              <button
                className="px-6 text-ms py-[2px]  rounded-full activo button-series"
                onClick={handelActivo}
              >
                Series
              </button>
              <button
                className="px-6 text-ms py-[2px]  rounded-full button-peliculas"
                onClick={handelDesactivado}
              >
                Películas
              </button>
            </div>
          </div>
        </div>
      </div>
      {estado ? (
        <Movies movies={data} loandig={loandig} error={error} />
      ) : (
        <MovieMasValoradas/>
      )}
    </>
   );
}

export default SeriesMasValoradas;