import { getPersonas } from "./GetPersona";
import { IMAGE_ACTORES, URL } from "../../config/config";
import { useState } from "react";
import { IMAGE_PAHT } from "../../config/config";
import { Link } from "react-router-dom";
import LoaderActores from "./LoaderActores";

export default function MainActores() {
  const [page, setPage] = useState(1);
  const { person, loader, error } = getPersonas(
    `${URL}/person/popular?&page=${page}`
  );

  return (
    <div>
      {loader && <LoaderActores />}
      {error && <h2>ERROR {error}</h2>}
      <div className="text-white relative w-[95%] m-auto">
        <h1 className="font-bold text-2xl py-3">Personas populares</h1>
        <ul className="flex flex-wrap gap-2 justify-center md:justify-between">
          {person.map((actor) => (
            <li
              key={actor.id}
              className="overflow-hidden rounded-lg max-w-[150px]  md:max-w-[250px] shadow-slate-50"
            >
              <Link to={`${actor.id}`}>
                <img
                  src={
                    actor.profile_path
                      ? `${IMAGE_PAHT + actor.profile_path}`
                      : IMAGE_ACTORES
                  }
                  alt={actor.name}
                  className="w-[150px] h-[200px]    md:w-[250px] md:h-[280px] object-cover object-left-top"
                />
              </Link>
              <p className="text-ms font-bold pt-1">{actor.name}</p>
              <div className="truncate">
                {actor.known_for.map((programa) => (
                  <p className="text-sm truncate inline" key={programa.id}>
                    {programa.title ? programa.title : programa.name} ,
                  </p>
                ))}
              </div>
            </li>
          ))}
          {/*console.log(person)*/}
        </ul>
        <div className="flex justify-center items-center mt-5">
          <button
            className="py-2 px-4 border rounded-lg"
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Ver Más
          </button>
        </div>
      </div>
    </div>
  );
}
