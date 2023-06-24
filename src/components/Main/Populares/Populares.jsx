import { FechApi } from "../Movies/FechApi";
import Movies from "../Movies/Movies";


function Populares() {
  
  const { movies, loandig, error } = FechApi(
    "https://api.themoviedb.org/3/movie/upcoming?language=es&page=1"
  );
  return (
    <Movies title="Proximos estrenos" movies={movies} loandig={loandig} error={error}></Movies>
  );
}

export default Populares;
