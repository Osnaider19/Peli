import { AiOutlineSearch } from "react-icons/ai";
import { getSearch } from "./getSearch";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { RiMovieFill } from "react-icons/ri";
import { TiDeviceDesktop } from "react-icons/ti";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
function InputSearch() {
  
  const [key, setKey] = useState("");
  const refButtonCerrar = useRef();
  const { data, error, loader } = getSearch(
    `https://api.themoviedb.org/3/search/multi?query=${key}&include_adult=false&language=es-US&page=1`
  );

  return (
    <>
      {console.log(data)}
      <div className="flex justify-end">
        <div className="relative flex items-center w-[270px] rounded-lg bg-slate-800">
          <i className="text-slate-400 px-3">
            <AiOutlineSearch />
          </i>
          <input
            type="text"
            id="input-search"
            autoComplete="off"
            placeholder="Buscar Películas , Series o Actor"
            className="flex items-center py-2  w-40 justify-center outline-none h-8 bg-transparent text-slate-400 text-sm md:w-56"
            onChange={(e) => {
              setKey(e.target.value) , setEstadoResults(true);
            }}
          />
        </div>
      </div>
      <div className="fixed  w-full text-white top-[76px] bg-[#0f172a] left-0  z-50">
        <div className="relative flex flex-col  justify-center items-center">
          
          {key ? (
            <div className="relative flex justify-end w-[90%] m-auto">
              <button
                className="py-1 px-2"
                ref={refButtonCerrar}
                onClick={() => {
                  setKey(""), setEstadoResults(false);
                }}
              >
                <i className="text-2xl hover:opacity-80">
                  <AiFillCloseCircle />
                </i>
              </button>
            </div>
          ) : (
            ""
          )}
          {data.map((object) => (
            <Link
              className=" w-[90%] hover:bg-[#1E293B]"
              to={`/${object.media_type}/${object.id}`}
              key={object.id}
              onClick={() => {
                setKey("") , setEstadoResults(false);
              }}
            >
              <div className="flex border-b py-3 px-3 overflow-hidden">
                <p className=" inline-block">
                  {object.title ? object.title : object.name}
                </p>
                <p>
                  {object.media_type === "movie" ? (
                    <div className="h-full relative flex justify-center items-center">
                      <i className="px-3">
                        <RiMovieFill />
                      </i>
                      <p>Película</p>
                    </div>
                  ) : undefined}
                </p>
                <p>
                  {object.media_type === "tv" ? (
                    <div className="h-full relative flex justify-center items-center">
                      <i className="px-3">
                        <TiDeviceDesktop />
                      </i>
                      <p>Serie</p>
                    </div>
                  ) : undefined}
                </p>
                <p>
                  {object.media_type === "person" ? (
                    <div className="h-full relative flex justify-center items-center">
                      <i className="px-3">
                        <BsPersonCircle />
                      </i>
                      <p>Actor</p>
                    </div>
                  ) : undefined}
                </p>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default InputSearch;
