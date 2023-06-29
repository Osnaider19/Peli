import { Link } from "react-router-dom";
import { getCategorias } from "./useCategorias";


function Categorias() {
  
  
 const {categorias} = getCategorias('https://api.themoviedb.org/3/genre/movie/list?language=es');


  return (
    <div>
      <ul className="text-[#E2E8F0] py-2 mt-14">
        {categorias?.map((genre) => (
          <li key={genre.id} className="px-2 ">
            <Link
            to={`/movies/${genre.id}`}
            className="py-3 px-2 block rounded-lg hover:bg-slate-800 transition-colors duration-200"
          >
            <span>{genre.name}</span>
          </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;




