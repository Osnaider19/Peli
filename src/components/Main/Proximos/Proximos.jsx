import SlideMovies from "../SlideMovies/SlideMovies";
import { URL } from "../../../config/config";
import { getData } from "../../../hooks/useGetData";

function Proximos() {
  const { data, loandig, error } = getData(`${URL}/movie/upcoming?`);
  return (
    <SlideMovies
      title="Proximos"
      movies={data}
      categoria="movie"
      loandig={loandig}
      error={error}
    />
  );
}

export default Proximos;
