import { useParams } from "react-router-dom";
import { convertirFecha } from "../Main/Movies/convertirFecha";
import { Creditos } from "./Creditos";
import { IMAGE_PAHT } from "../../config/config";
import { getDetailsMovies } from "./getDetails";
import { URL } from "../../config/config";

export function Details() {
  const { id } = useParams();
  const Url = `${URL}/movie/${id}`;
  const { details } =  getDetailsMovies(Url);
  const { genres } = details;
  
  return (
    <div className="relative pt-[75px] w-[95%] m-auto text-white">
      <div className={`bg-[url('${IMAGE_PAHT + details.poster_path}')]`}>
        <div className="flex">
          <div className="overflow-hidden rounded-xl min-w-[340px] block min-h-[510px] max-w-[340px] max-h-[510px]">
            <img
              src={`${IMAGE_PAHT + details.poster_path}`}
              alt=""
              className="w-full object-cover hover:blur"
            />
          </div>
          <div className="px-5">
            <div>
              <h1 className="py-2 font-bold text-3xl">{details.title}</h1>
            </div>
            <p className="py-2 font-bold text-xl">Descripción</p>
            <p className="">{details.overview}</p>
            <p className="py-2 text-xl">
              {convertirFecha(
                `${
                  details.release_date
                    ? details.release_date
                    : details.first_air_date
                }`
              )}
            </p>
          </div>
        </div>
      </div>
      <Creditos id={id} />
      {console.log(details)}
    </div>
  );
}
