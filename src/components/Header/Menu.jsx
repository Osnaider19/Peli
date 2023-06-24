import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="relative flex items-center  justify-end px-3  h-full ">
      <div className="flex justify-center items-center gap-3 pr-4">
        <Link to="/" className="text-sm  text-slate-200 py-1">
          Inicio
        </Link>
        <Link to="/movies" className="text-sm  text-slate-200 py-1">
          Pelícilas
        </Link>
        <a href="" className="text-sm  text-slate-200 py-1">
          Series
        </a>
        <a href="" className="text-sm  text-slate-200 py-1">
          Actores
        </a>
      </div>
      
    </div>
  );
}

export default Menu;
