import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="relative flex flex-col w-48 justify-center items-center gap-3 pr-4 md:flex-row md:mr-7">
        <Link
          to="/"
          className="w-full text-center py-3 text-sm  text-slate-200"
        >
          Inicio
        </Link>
        <Link
          to="/movies"
          className="w-full text-center py-3 text-sm  text-slate-200 "
        >
          Pelícilas
        </Link>
        <Link
          href=""
          className="w-full text-center py-3 text-sm  text-slate-200"
        >
          Series
        </Link>
        <Link
          href=""
          className="w-full text-center py-3 text-sm  text-slate-200"
        >
          Actores
        </Link>
      </div>
    </>
  );
}

export default Menu;
