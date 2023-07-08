import { Link, useParams } from "react-router-dom";
import { getActor } from "./getActor";
import {
  IMAGE_PAHT,
  IMAGE_PAHT_200,
  URL,
  defaultImg,
} from "../../config/config";
import { convertirFecha } from "../Main/SlideMovies/convertirFecha";
import { getActorCreditos } from "./getActorCreditos";
import { Redes } from "./Redes";
import { calcularEdad } from "../../hooks/calcularEdad";
import LoaderDetails from "../Loaders/LoaderDetails";
import Footer from "../Footer/Footer";
import { useEffect } from "react";

export function DetailsActores() {
  const { id } = useParams();
  const { actorCreditos } = getActorCreditos(
    `${URL}/person/${id}/combined_credits`
  );
  const { actor, error, loader } = getActor(`${URL}/person/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {loader && <LoaderDetails />}
      <main className="pt-[90px] text-white">
        <div className="relative w-[95%] m-auto overflow-hidden">
          <div className="flex gap-3 flex-col pt-6 md:flex-row">
            <div
              className="relative rounded-lg overflow-hidden min-w-[300px] max-w-[300px]"
              key={actor.id}
            >
              <div className="rounded-lg overflow-hidden w-[250px] h-[300px] md:min-w-[300px] md:h-[450px]">
                <img
                  src={`${IMAGE_PAHT + actor.profile_path}`}
                  alt={actor.name}
                  className="w-[250px] h-[300px] md:min-w-[300px] md:h-[450px] object-cover"
                />
              </div>
              <div>
                <Redes id={id} />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-bold">{actor.name}</h1>
              <div>
                <h2 className="text-xl font-bold pt-3">Biografia</h2>
                <p className="w-[90%] pt-3">
                  {actor.biography ? actor.biography : "-"}
                </p>
              </div>
              <div>
                <p className="font-bold pt-2">Fecha de nacimiento</p>
                <span>
                  {actor.birthday ? convertirFecha(actor.birthday) : "error"}
                  <span> ({calcularEdad(actor.birthday)} Años)</span>
                </span>
              </div>

              <div>
                <div>
                  <p className="font-bold pt-2"> Lugar de nacimiento </p>
                  <p>{actor.place_of_birth ? actor.place_of_birth : "-"}</p>
                </div>
              </div>
            </div>
          </div>
          {/*console.log(actor)*/}
          {/*console.log(actorCreditos)*/}
        </div>

        <div className="w-[95%] m-auto">
          <h2 className="font-bold text-xl py-3">Interpretaciones </h2>
          <ul className="relative flex  w-full px-1 justify-center flex-wrap gap-2 md:justify-start">
            {actorCreditos.cast
              ? actorCreditos.cast.map((castMovie) => (
                  <li
                    key={castMovie.id}
                    className="rounded-lg overflow-hidden max-w-[150px] min-w-[150px] list-item"
                  >
                    <Link to={`/${castMovie.media_type}/${castMovie.id}`}>
                      <div className="min-h-[225px] overflow-hidden">
                        <img
                          src={
                            castMovie.poster_path
                              ? IMAGE_PAHT_200 + castMovie.poster_path
                              : defaultImg
                          }
                          alt={
                            castMovie.title ? castMovie.title : castMovie.name
                          }
                          className="w-[150px] max-h-[225px] min-h-[225px] object-cover hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                    </Link>
                    <p className="font-bold">
                      {castMovie.title ? castMovie.title : castMovie.name}
                    </p>
                    {castMovie.character ? (
                      <div>
                        <p className="inline-block font-bold">como : </p>
                        <span> {castMovie.character}</span>
                      </div>
                    ) : (
                      ""
                    )}
                   
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </main>
      <Footer/>
    </>
  );
}
