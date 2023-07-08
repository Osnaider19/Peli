import { IMAGE_PAHT_300, URL } from "../../config/config";
import { getData } from "../../hooks/useGetData";
import { Link } from "react-router-dom";
import {  useRef } from "react";
export function Recomendadas({ id, setLoader, type }) {
  const Url = URL + `/${type}/${id}/recommendations?`;
  const { data } = getData(Url);
  const refSlider = useRef();

  
  return (
    <>
      {data.length === 0 ? (
        ""
      ) : (
        <div className="relative py-3">
          <h2 className="text-2xl py-4">Recomendadas</h2>
          <ul
            ref={refSlider}
            className="relative flex  overflow-hidden overflow-x-auto gap-5
            scroll-bottom "
          >
            {data?.map((movie) => (
              <li
                key={movie.id}
                className="max-w-[270px]   min-w-[270px]  overflow-hidden rounded-lg"
              >
                <Link
                  to={`/${type}/${movie.id}`}
                  onClick={() => {
                    setLoader(true);
                  }}
                >
                  <div className="min-w-[270px] min-h-[200px] max-w-[270px] max-h-[200px] rounded-lg overflow-hidden">
                    <img
                      src={`${IMAGE_PAHT_300 + movie.poster_path}`}
                      alt={movie.title}
                      className="min-w-[270px] max-w-[270px] rounded-lg  max-h-[200px] min-h-[145px] object-cover object-left-top hover:scale-110 transition-transform duration-150"
                      loading="lazy"
                    />
                  </div>
                </Link>
                <p className="text-ms px-2 font-bold">
                  {movie.title ? movie.title : movie.name}
                </p>
              </li>
            ))}
            {/*console.log(data)*/}
          </ul>
        </div>
      )}
    </>
  );
}
