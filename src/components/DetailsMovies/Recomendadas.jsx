import { URL } from "../../config/config";
import { getData } from "../../hooks/useGetData";
import { IMAGE_PAHT } from "../../config/config";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
export function Recomendadas(props) {
  const Url = URL + `/movie/${props.id}/recommendations?`;
  const { data } = getData(Url);
  const refSlider = useRef()

  useEffect(()=>{
    refSlider.current.scrollLeft = 0;
  } , [props.id])

  return (
    <div className="relative py-3">
      <h2 className="text-2xl py-4" >Recomendadas</h2>
      <ul 
      ref={refSlider}
      className="relative flex  overflow-hidden overflow-x-auto gap-5
      scroll-bottom ">
        {data?.map((movie) => (
          <li
            key={movie.id}
            className="max-w-[270px]   min-w-[270px]  overflow-hidden rounded-lg"
          >
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`${IMAGE_PAHT + movie.poster_path}`}
                alt={movie.title}
                className="min-w-[270px] max-w-[270px] rounded-lg  max-h-[200px] min-h-[145px] object-cover object-left-top opacity-80 hover:saturate-200 hover:opacity-100"
              />
            </Link> 
            <p className="text-ms px-2 font-bold">{movie.title}</p>
          </li>
        ))}
        {console.log(data)}
      </ul>
    </div>
  );
}
