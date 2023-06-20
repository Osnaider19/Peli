import Movies from "../Movies/Movies";
import { GetMoviesSemana } from "./GetMoviesSemana"; 


function TendenciasSemana() {
    const {movies , loandig , error } = GetMoviesSemana('https://api.themoviedb.org/3/trending/all/week?language=es')
    
    return <Movies movies={movies} loandig={loandig} error={error}></Movies>
}


export default TendenciasSemana;