import { getCreditos } from "./getCreditos";
import { IMAGE_PAHT } from "../../config/config";
export function Creditos(props) {
  const Url = `https://api.themoviedb.org/3/movie/${props.id}/credits?language=es`;

  const { creditos, error, loader } = getCreditos(Url);

  return (
    <>
    {error && <h3>Erro {error}</h3>}
    {loader && <h3>Cargando</h3>}
      <div className="py-3 ">
        <h2 className="py-2 text-xl font-bold">Reparto principal</h2>
        <div className="flex overflow-hidden overflow-x-auto gap-3 justify-between">
        {creditos.cast ? (
          creditos.cast.map((actor) => (
            <div key={actor.id} className="rounded-xl overflow-hidden w-auto max-w-[210px] min-w-[210px]" >
              <img 
              src={`${IMAGE_PAHT + actor.profile_path}`} alt={actor.name}
              className="block w-full min-h-[250px] max-h-[250px] object-cover"/>
              <div>{actor.character}</div>
              <span className="text-ms font-bold ">{actor.name}</span>
            </div>
          ))
        ) : (
          <h4>Cargando</h4>
        )}
        </div>
        {console.log(creditos.cast)}
      </div>
    </>
  );
}
