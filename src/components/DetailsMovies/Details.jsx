import { data } from "autoprefixer";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { convertirFecha } from "../Main/Movies/convertirFecha";
export function Details() {
  const { id } = useParams();
  const API_KEY = "b62c5015964d4fcc4805e0ce64dfd3c4";
  const Url = `https://api.themoviedb.org/3/movie/${id}?language=es`;
  const IMAGE_PAHT = "https://image.tmdb.org/t/p/w500/";

  function getDetailsMovies(url) {
    const [details, setDetails] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
      const getDetails = async () => {
        try {
          const response = await axios.get(url, {
            params: {
              api_key: API_KEY,
            },
          });
          setDetails(response.data);
        } catch (error) {
          setError(error);
        }
      };
      getDetails();
    }, [url]);

    return { details };
  }

  const { details } = getDetailsMovies(Url);

  console.log(details);

  return (
    <div className="relative top-[75px] w-[95%] m-auto text-white">
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
              <p>{details.genres?.map((genre) =>{
                console.log(genre.name);
              })}</p>
            </div>
            <p>
              <span></span>
            </p>
            <p className="py-2 font-bold text-xl">Descripción</p>
            <p className="">{details.overview}</p>
            <p className="py-2 text-xl">
              {convertirFecha(
                `${
                  details.release_date ? details.release_date : details.first_air_date
                }`
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
