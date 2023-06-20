import Nav from "../Nav/Nav";
import Search from "../SearchMovie/Search";
import Cartelera from "./EnCartelera/Cartelera";
import Populares from "./Populares/Populares";
import Slider from "./Slider/Slider";
import MovieMasValoradas from "./Lo mas valorado/MovieMasValoradas";
import TendenciasHoy from "./Tendencias/TendenciasHoy";

function Main() {
  return (
    <main className=" w-[100%] relative top-[70px] py-8 flex justify-end flex-col">
      <div className="relative w-[100%] pl-48">
        <Nav></Nav>
        <Slider></Slider>
        <TendenciasHoy/>
        <Cartelera></Cartelera>
        <Populares></Populares>
        <MovieMasValoradas/>
        <Search></Search>
      </div>
    </main>
  );
}

export default Main;
