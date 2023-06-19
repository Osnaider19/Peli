import Movies from "../Movies/Movies";
import { FechApi } from "../Movies/FechApi";

function Cartelera() {
    const {movies, loandig , error } = FechApi('https://api.themoviedb.org/3/movie/now_playing?language=es&page=1')
   return(
    <Movies title="Jugando ahora" movies={movies} loandig={loandig} error={error}></Movies>
   ); 
}

export default Cartelera;
