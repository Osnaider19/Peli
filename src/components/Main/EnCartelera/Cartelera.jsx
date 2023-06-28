import Movies from "../Movies/Movies";
import { getData } from "../../../hooks/useGetData";

function Cartelera() {
    const {data , loandig , error } = getData('https://api.themoviedb.org/3/movie/now_playing?')
   return(
    <Movies title="En cine" movies={data} categoria="movie" loandig={loandig} error={error}></Movies>
   ); 
}

export default Cartelera;
