import { AiFillStar } from "react-icons/ai";
import { convertirFecha } from "../SlideMovies/convertirFecha";
import { Link } from "react-router-dom";
import { IMAGE_PAHT_1900 } from "../../../config/config";
import { getData } from "../../../hooks/useGetData";
import { URL } from "../../../config/config";

function Slide() {
  const { data, loandig, error } = getData(`${URL}/movie/popular`);

  return (
    <div className="hidden relative  m-auto w-[95%] h-[410px]  mr-7 bg-slate-800 rounded-xl overflow-hidden sm:flex">
      <ul className="relative w-full flex  overflow-hidden">
        {data?.slice(0, 1).map((movie) => (
          <li
            key={movie.id}
            className="relative snap-center w-full h-full min-w-full min-h-full  "
          >
            <div className="absolute w-full h-full bg-black/40 z-10 pointer-events-none"></div>

            <div
              style={{
                backgroundImage: `url(${
                  IMAGE_PAHT_1900 + movie.backdrop_path
                })`,
                backgroundPosition: "center , top",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
              className="h-full w-full absolute"
            ></div>

            <div className="text-white  relative pt-20 px-9 z-20">
              <p className="text-3xl">{movie.title}</p>
              <div className="container-description">
                <p className="text-ms md:w-[50%] py-1 ">{movie.overview}</p>
              </div>
              <div className="">
                <p className="py-1 inline-block">
                  {" "}
                  {convertirFecha(
                    `${
                      movie.release_date
                        ? movie.release_date
                        : movie.first_air_date
                    }`
                  )}
                </p>
              </div>
              <div className="flex items-center relative">
                <span className="text-ms text-yellow-400 inline-block">
                  <AiFillStar />
                </span>
                <span className="px-3 text-ms">{movie.vote_average}</span>
              </div>

              <div className="relative py-5">
                <Link
                  to={`/movie/${movie.id}`}
                  className="py-2 px-7 bg-[#d9254c] rounded-md"
                >
                  Ver
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/*console.log(data)*/}
    </div>
  );
}

export default Slide;
