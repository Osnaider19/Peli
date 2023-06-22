import Movies from "../Movies/Movies";
import { GetMoviesTendecias } from "./GetMoviesTendencias"; 


function TendenciasSemana() {
    const {movies , loandig , error } = GetMoviesTendecias('https://api.themoviedb.org/3/trending/all/week?language=es')
    
    return <Movies movies={movies} loandig={loandig} error={error}></Movies>
}


export default TendenciasSemana;