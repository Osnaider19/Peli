import { getCategorias } from "./useCategorias";
import { URL } from "../../config/config";
import { Loader } from "./Loader";
import { useRef } from "react";

function GenresName({ setIdGenres, setMovies, setPage }) {
  const Url = `${URL}/genre/movie/list?`;
  const { categorias, loader, error } = getCategorias(Url);
  const refButton = useRef();

  

  return (
    <article className="fixed z-10 h-[100vh] bg-[#0f172a] left-0 w-48  mt-1 top-[56px] pb-28 overflow-y-hidden transition hover:overflow-y-auto scroll-categories">
      <div className="fixed pt-5 text-[#E2E8F0] bg-[#0f172a] ">
        <h2 className="px-2 inline-block text-2xl font-bold ">Géneros</h2>
      </div>
      <div>
        {loader && <Loader />}
        <ul className="text-[#E2E8F0] py-2 mt-14">
          {categorias?.map((genre) => (
            <li key={genre.id} className="px-2 ">
              <button
                onClick={() => {
                  setPage(1), setMovies([]), setIdGenres(genre.id) 
                }}
                ref={refButton}
                className="py-3 w-full text-start px-2 block rounded-lg hover:bg-slate-800 transition-colors duration-200 active:bg-slate-800"
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

export default GenresName;
