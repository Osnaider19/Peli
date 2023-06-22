import Nav from "../Nav/Nav";
import Search from "../SearchMovie/Search";
import Cartelera from "./EnCartelera/Cartelera";
import SeriesMasValoradas from "./Lo mas valorado/SeriesMasVoloradas";
import Populares from "./Populares/Populares";
import Slider from "./Slider/Slider";

import TendenciasHoy from "./Tendencias/TendenciasHoy";

function Main() {
  return (
    <main className=" w-[100%] relative top-[70px] py-2 flex justify-end flex-col">
      <div className="relative w-[100%] ">
        <Slider></Slider>
        <TendenciasHoy/>
        <SeriesMasValoradas/>
        <Cartelera></Cartelera>
        <Populares></Populares>
        
      </div>
    </main>
  );
}

export default Main;
