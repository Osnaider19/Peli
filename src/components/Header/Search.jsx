import { useRef } from "react";
import { getSearch } from "./getSearch";
import { Link } from "react-router-dom";
import { RiMovieFill } from "react-icons/ri";
import { TiDeviceDesktop } from "react-icons/ti";
import { BsPersonCircle } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { URL } from "../../config/config";
export function Search({ setKey, key }) {
  const refButtonCerrar = useRef();
  const { data, error, loader } = getSearch(`${URL}/search/multi?query=`, key);
  return (
    <>
      <div className="fixed  w-full text-white top-[76px] bg-[#0f172a] left-0  z-50">
        <div className="relative flex flex-col  justify-center items-center">
          <div className="relative flex justify-end w-[90%] m-auto">
            <button
              className="py-1 px-2"
              ref={refButtonCerrar}
              onClick={() => {
                setKey("");
              }}
            >
              <i className="text-2xl hover:opacity-80">
                <AiFillCloseCircle />
              </i>
            </button>
          </div>

          {data.map((object) => (
            <Link
              className=" w-[90%] hover:bg-[#1E293B]"
              to={`/${object.media_type}/${object.id}`}
              key={object.id}
              onClick={() => {
                setKey("");
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
