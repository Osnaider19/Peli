import { Link } from "react-router-dom";
import { getCategorias } from "./useCategorias";


function Categorias() {
  
  
 const {categorias} = getCategorias('https://api.themoviedb.org/3/genre/movie/list?language=es');


  return (
    <div>
      <ul className="text-[#E2E8F0] py-2 mt-14">
        {categorias?.map((genre) => (
          <Link
            href={genre.id}
            key={genre.id}
            className="py-3 px-3 block hover:bg-slate-800 transition-all"
          >
            <li>{genre.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;




