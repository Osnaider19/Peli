import { FechApi } from "../Movies/FechApi";
import Movies from "../Movies/Movies";

const IMAGE_PAHT = "https://image.tmdb.org/t/p/w500/";

function Proximamente(props) {
  const { movies, loandig, error } = FechApi(
    "https://api.themoviedb.org/3/movie/upcoming?api"
  );

  return (
    <Movies title="Proximamente" movies={movies} loandig={loandig} error={error}></Movies>
  );
}

export default Proximamente;
