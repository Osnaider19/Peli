import { getCreditos } from "./getCreditos";
export function Creditos(props) {
  const Url = `https://api.themoviedb.org/3/movie/${props.id}/credits?language=es`
  const { creditos } = getCreditos(Url);

  console.log(creditos);

  return (
    <div className="py-3">
      <h2>Créditos</h2>
      {creditos.cast?.map((actor) => {
        <li>{actor.character}</li>;
        <p>{actor.name}</p>
        //{console.log(actor.name)}
      })}
    </div>
  );
}
