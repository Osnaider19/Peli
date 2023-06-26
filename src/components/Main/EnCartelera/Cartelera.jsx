import Movies from "../Movies/Movies";
import { FechApi } from "../Movies/FechApi";
import { getData } from "../../../hooks/useGetData";

function Cartelera() {
    const {data , loandig , error } = getData('https://api.themoviedb.org/3/movie/now_playing?')
   return(
    <Movies title="En cine" movies={data} categoria="movies" loandig={loandig} error={error}></Movies>
   ); 
}

export default Cartelera;
