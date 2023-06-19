import Nav from "../Nav/Nav";
import Cartelera from "./EnCartelera/Cartelera";
import Proximamente from "./Proximamente/Proximamente";
import Slider from "./Slider/Slider";
import Tendencias from "./Tendencias/Tendencias";

function Main() {
  return (
    <main className=" w-[100%] relative top-[70px] flex justify-end flex-col">
      <div className="relative w-[100%] pl-48">
        <Nav></Nav>
        <Slider></Slider>
        <Proximamente></Proximamente>
        <Tendencias></Tendencias>
        <Cartelera></Cartelera>
      </div>
    </main>
  );
}

export default Main;
