import { FechApi } from "../Movies/FechApi";
import Movies from "../Movies/Movies";

const IMAGE_PAHT = "https://image.tmdb.org/t/p/w500/";

function Populares() {
  const { movies, loandig, error } = FechApi(
    "https://api.themoviedb.org/3/trending/tv/day?language=es"
  );
  return (
    <Movies title="Populares" movies={movies} loandig={loandig} error={error}></Movies>
  );
}

export default Populares;

