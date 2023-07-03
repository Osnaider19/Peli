import { getCategorias } from "../PageGenres/useCategorias";
import { URL } from "../../config/config";
import { Loader } from "../PageGenres/Loader";
import { useEffect, useRef } from "react";

function GenresSeries({ setIdGenres, setMovies, setPage, setLoading }) {
  const Url = `${URL}/genre/tv/list?`;
  const { categorias, loader, error } = getCategorias(Url);
  const refButton = useRef();

  

  return (
    <article className="relative pt-[70px] block h-auto z-10 bg-[#0f172a] left-0  mt-1 overflow-y-hidden transition hover:overflow-y-auto scroll-categories md:h-[100vh] md:w-48 md:pb-28 md:top-[56px] md:fixed md:left-0 md:pt-0">
      <div className="relative pt-5 text-[#E2E8F0] bg-[#0f172a] md:fixed md:pt-7 ">
        <h2 className="px-4 inline-block text-2xl font-bold  ">
          Géneros
        </h2>
      </div>
      <div>
        {loader && <Loader />}
        <ul className="flex flex-wrap gap-2 text-[#E2E8F0] py-2 md:mt-14">
          {categorias?.map((genre) => (
            <li key={genre.id} className="px-2 md:w-full">
              <button
                onClick={() => {
                  setLoading(true);
                  setPage(1), setMovies([]), setIdGenres(genre.id);
                }}
                ref={refButton}
                className="w-full py-1  text-start px-2 block rounded-lg  hover:bg-slate-800  transition-colors duration-200 active:bg-slate-800 md:py-3"
              >
                <span>{genre.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default GenresSeries;