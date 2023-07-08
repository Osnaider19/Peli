import Cartelera from "./EnCartelera/Cartelera";
import SeriesMasValoradas from "./Lo mas valorado/SeriesMasVoloradas";
import Proximos from "./Proximos/Proximos";

import Slider from "./Slider/Slider";
import TendenciasHoy from "./Tendencias/TendenciasHoy";

function Main() {
  return (
    <main className=" w-[100%] relative pt-[100px] py-2 flex justify-end flex-col">
      <div className="relative w-[100%] ">
        <Slider></Slider>
        <TendenciasHoy />
        <SeriesMasValoradas />
        <Cartelera></Cartelera>
        <Proximos></Proximos>
      </div>
    </main>
  );
}

export default Main;
