import {FechApi} from '../SlideMovies/FechApi';
import SlideMovies from "../SlideMovies/SlideMovies";


function MovieMasValoradas() {
  const {movies , loandig , error} = FechApi(`https://api.themoviedb.org/3/movie/top_rated?language=es-US&page=1`)
  
  return (
    <SlideMovies movies={movies} categoria="movie" error={error} loandig={loandig}></SlideMovies>
  );
}

export default  MovieMasValoradas;
