import { GetMoviesTendecias } from "./GetMoviesTendencias"; 
import Tendencias from "./Tendencias";


function TendenciasSemana() {
    const {movies , loandig , error } = GetMoviesTendecias('https://api.themoviedb.org/3/trending/all/week?language=es')
    
    return <Tendencias movies={movies} loandig={loandig} error={error}/>
}


export default TendenciasSemana;