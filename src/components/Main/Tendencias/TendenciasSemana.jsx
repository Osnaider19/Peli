import SlideMovies from "../SlideMovies/SlideMovies";
import { GetMoviesTendecias } from "./GetMoviesTendencias"; 



function TendenciasSemana() {
    const {movies , loandig , error } = GetMoviesTendecias('https://api.themoviedb.org/3/trending/all/week?language=es')
    
    return <SlideMovies movies={movies} loandig={loandig} error={error}/>
}


export default TendenciasSemana;