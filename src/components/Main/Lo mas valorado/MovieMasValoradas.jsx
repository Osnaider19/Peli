import {FechApi} from '../Movies/FechApi';
import Movies from "../Movies/Movies";

function MovieMasValoradas() {
  const {movies , loandig , error} = FechApi('https://api.themoviedb.org/3/movie/top_rated?language=es-US&page=1')
  
  return (
    <Movies title="Lo más valorado" movies={movies} error={error} loandig={loandig}></Movies>
  );
}

export default  MovieMasValoradas;
