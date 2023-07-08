import SlideMovies from "../SlideMovies/SlideMovies";
import { getData } from "../../../hooks/useGetData";
import { URL } from "../../../config/config";

function TendenciasSemana() {
  const { data, loandig, error } = getData(`${URL}/trending/all/week?`);

  return <SlideMovies movies={data} loandig={loandig} error={error} />;
}

export default TendenciasSemana;
