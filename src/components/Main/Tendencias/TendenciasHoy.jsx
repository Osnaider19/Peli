import { useRef, useState } from "react";
import TendenciasSemana from "./TendenciasSemana";
import SlideMovies from "../SlideMovies/SlideMovies";
import { URL } from "../../../config/config";
import { getData } from "../../../hooks/useGetData";


function TendenciasHoy() {
  const [estado, setEstado] = useState(true); //estado de el componente tendencias semana
  const refButtonHoy = useRef();
  const refButtonSemana = useRef();

  const { data, loandig, error } = getData(`${URL}/trending/all/day?`);

  const handelDesactivado = () => {
    setEstado(false);
    estado && refButtonSemana.current.classList.add("activo");
    estado != refButtonHoy.current.classList.remove("activo");
  };
  const handelActivo = () => {
    setEstado(true);
    estado != refButtonHoy.current.classList.add("activo");
    estado != refButtonSemana.current.classList.remove("activo");
  };

  return (
    <>
      <div className="relative w-[95%] m-auto py-2 text-white">
        <div className="flex items-center  relative ">
          <h2 className=" font-bold text-xl py-2  inline-block">
            Tendecias de
          </h2>
          <div className="inline-block  py-2  ml-2 ">
            <div
              id="button-tendencias"
              className="flex items-center relative border-[1px] top-[1px] overflow-hidden  rounded-full border-slate-700"
            >
              <button
                ref={refButtonHoy}
                className="px-6 text-ms py-[2px]  rounded-full activo button-hoy"
                onClick={handelActivo}
              >
                Hoy
              </button>
              <button
                ref={refButtonSemana}
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
        <SlideMovies movies={data} loandig={loandig} error={error} />
      ) : (
        <TendenciasSemana />
      )}
    </>
  );
}

export default TendenciasHoy;
