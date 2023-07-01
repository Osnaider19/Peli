import SlideMovies from "../SlideMovies/SlideMovies";
import { getData } from "../../../hooks/useGetData";

function Cartelera() {
    const {data , loandig , error } = getData('https://api.themoviedb.org/3/movie/now_playing?')
   return(
    <SlideMovies title="En cine" movies={data} categoria="movie" loandig={loandig} error={error}></SlideMovies>
   ); 
}

export default Cartelera;
