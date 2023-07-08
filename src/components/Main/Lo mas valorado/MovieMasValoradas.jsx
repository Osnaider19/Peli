import SlideMovies from "../SlideMovies/SlideMovies";
import { URL } from "../../../config/config";
import { getData } from "../../../hooks/useGetData";

function MovieMasValoradas() {
  const { data, loandig, error } = getData(
    `${URL}/movie/top_rated?`
  );

  return (
    <SlideMovies
      movies={data}
      categoria="movie"
      error={error}
      loandig={loandig}
    ></SlideMovies>
  );
}

export default MovieMasValoradas;
