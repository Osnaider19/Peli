import { FechApi } from "../SlideMovies/FechApi";
import SlideMovies from "../SlideMovies/SlideMovies";


function Proximos() {
  
  const { movies, loandig, error } = FechApi(
    "https://api.themoviedb.org/3/movie/upcoming?language=es&page=1"
  );
  return (
    <SlideMovies title="Proximos estrenos" movies={movies} categoria="movie" loandig={loandig} error={error}/>
  );
}

export default Proximos;
