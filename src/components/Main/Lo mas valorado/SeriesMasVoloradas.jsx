import { useRef, useState } from "react";
import SlideMovies from "../SlideMovies/SlideMovies";
import MovieMasValoradas from "./MovieMasValoradas";
import { getData } from "../../../hooks/useGetData";
import { URL } from "../../../config/config";
function SeriesMasValoradas() {
  const refButtonSerie = useRef(); //referencia de el boton serie
  const refButtonMovies = useRef(); //referencia de el boton Movies
  const [estado, setEstado] = useState(true); //estado de el componete de movies mas valoradas para que se renderize o no

  const { data, loandig, error } = getData(`${URL}/tv/top_rated?`);

  //funcion de para colocar los si del boton esta desactivado o no
  const handelDesactivado = () => {
    setEstado(false);
    estado && refButtonMovies.current.classList.add("activo");
    estado != refButtonSerie.current.classList.remove("activo");
  };
  //funcion de para colocar los si del boton esta activo o no
  const handelActivo = () => {
    setEstado(true);
    estado != refButtonSerie.current.classList.add("activo");
    estado != refButtonMovies.current.classList.remove("activo");
  };

  return (
    <>
      <div className="relative w-[95%] m-auto py-2 text-white">
        <div className="flex items-center  relative ">
          <h2 className=" font-bold text-xl py-2  inline-block">
            Lo más valorado
          </h2>
          <div className="inline-block  py-2  ml-2 ">
            <div
              id="button-tendencias"
              className="flex items-center relative border-[1px] top-[1px] overflow-hidden  rounded-full border-slate-700"
            >
              <button
                ref={refButtonSerie}
                className="px-6 text-ms py-[2px]  rounded-full activo button-series"
                onClick={handelActivo}
              >
                Series
              </button>
              <button
                ref={refButtonMovies}
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
        <SlideMovies
          movies={data}
          categoria="tv"
          loandig={loandig}
          error={error}
        />
      ) : (
        <MovieMasValoradas />
      )}
    </>
  );
}

export default SeriesMasValoradas;
