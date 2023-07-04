import { IMAGE_PAHT_300, URL } from "../../config/config";
import { getData } from "../../hooks/useGetData";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
export function SeriesRecomendadas({ id, setLoader }) {
  const Url = URL + `/tv/${id}/recommendations?`;
  const { data } = getData(Url);
  const refSlider = useRef();

  useEffect(() => {
    refSlider.current.scrollLeft = 0;
  }, [id]);

  return (
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
            className="max-w-[270px]  min-w-[270px]  overflow-hidden rounded-lg"
          >
            <Link
              to={`/tv/${movie.id}`}
              onClick={() => {
                setLoader(true);
              }}
            >
              <div className="min-w-[270px] min-h-[145px] max-w-[270px] max-h-[200px] rounded-lg overflow-hidden">
                <img
                  src={`${IMAGE_PAHT_300 + movie.poster_path}`}
                  alt={movie.title}
                  className="min-w-[270px] max-w-[270px] rounded-lg  max-h-[200px] min-h-[145px] object-cover object-left-top hover:scale-110 transition-transform duration-150"
                />
              </div>
            </Link>
            <p className="text-ms px-2 font-bold">{movie.name}</p>
          </li>
        ))}
        {console.log(data)}
      </ul>
    </div>
  );
}
