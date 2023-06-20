import { useState } from "react";
import { FechApi } from "../Movies/FechApi";
import Movies from "../Movies/Movies";
import TendenciasSemana from "./TendenciasSemana";
import { GetMoviesSemana } from "./GetMoviesSemana";


function TendenciasHoy() {
  const { movies, loandig, error } = FechApi(
    "https://api.themoviedb.org/3/trending/all/day?language=es"
  );

  const [estado, setEstado] = useState(true);

  const handelDesactivado = () => {
    setEstado(false);
    const $buttonHoy = document.querySelector('.button-hoy');
    const $buttonSemana = document.querySelector('.button-semana');
    estado && $buttonSemana.classList.add('activo') 
    estado != $buttonHoy.classList.remove('activo')
  };
  const handelActivo = () => {
    setEstado(true);
    const $buttonHoy = document.querySelector('.button-hoy');
    const $buttonSemana = document.querySelector('.button-semana');
    estado != $buttonHoy.classList.add('activo');
    estado != $buttonSemana.classList.remove('activo');
  };

  return (
    <>
      <div className=" w-[95%] m-auto py-2 text-white">
        <div className="flex items-center  relative ">
          <h2 className=" font-bold text-xl py-2  inline-block">Tendecias de</h2>
          <div className="inline-block border-2 border-slate-700 overflow-hidden ml-2 rounded-full">
            <button
              className="px-6 text-xl  rounded-full activo button-hoy"
              onClick={handelActivo}
            >
              Hoy
            </button>
            <button
              className="px-6 text-xl  rounded-full button-semana"
              onClick={handelDesactivado}
            >
              Esta Semana
            </button>
          </div>
        </div>
      </div>
      {estado
      ? <Movies movies={movies} loandig={loandig} error={error} /> 
      : <TendenciasSemana /> }
    </>
  );
}

export default TendenciasHoy;
