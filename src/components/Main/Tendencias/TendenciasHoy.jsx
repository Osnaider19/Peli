import { useState } from "react";
import Movies from "../Movies/Movies";
import { GetMoviesTendecias } from "./GetMoviesTendencias";
import TendenciasSemana from "./TendenciasSemana";

function TendenciasHoy() {
  const [estado, setEstado] = useState(true);

  const { movies, loandig, error } = GetMoviesTendecias(
    "https://api.themoviedb.org/3/trending/all/day?language=es"
  );

  const handelDesactivado = () => {
    setEstado(false);
    const $buttonHoy = document.querySelector(".button-hoy");
    const $buttonSemana = document.querySelector(".button-semana");
    estado && $buttonSemana.classList.add("activo");
    estado != $buttonHoy.classList.remove("activo");
  };
  const handelActivo = () => {
    setEstado(true);
    const $buttonHoy = document.querySelector(".button-hoy");
    const $buttonSemana = document.querySelector(".button-semana");
    estado != $buttonHoy.classList.add("activo");
    estado != $buttonSemana.classList.remove("activo");
  };

  return (
    <>
      <div className="relative w-[95%] m-auto py-2 text-white">
        <div className="flex items-center  relative ">
          <h2 className=" font-bold text-xl py-2  inline-block">
            Tendecias de
          </h2>
          <div className="inline-block  py-2  ml-2 ">
            <div id="button-tendencias" className="flex items-center relative border-[1px] top-[1px] overflow-hidden  rounded-full border-slate-700">
              <button
                className="px-6 text-ms py-[2px]  rounded-full activo button-hoy"
                onClick={handelActivo}
              >
                Hoy
              </button>
              <button
                className="px-6 text-ms py-[2px]  rounded-full button-semana"
                onClick={handelDesactivado}
              >
                Esta semana
              </button>
            </div>
          </div>
        </div>
      </div>
      {estado ? (
        <Movies movies={movies} loandig={loandig} error={error} />
      ) : (
        <TendenciasSemana />
      )}
    </>
  );
}

export default TendenciasHoy;
