import Nav from "../Nav/Nav";
import Search from "../SearchMovie/Search";
import Cartelera from "./EnCartelera/Cartelera";
import Proximamente from "./Proximamente/Proximamente";
import Slider from "./Slider/Slider";
import Tendencias from "./Tendencias/Tendencias";

function Main() {
  return (
    <main className=" w-[100%] relative top-[70px] py-8 flex justify-end flex-col">
      <div className="relative w-[100%] pl-48">
        <Nav></Nav>
        <Slider></Slider>
        <Cartelera></Cartelera>
        <Proximamente></Proximamente>
        <Tendencias></Tendencias>
       <Search></Search>
      </div>
    </main>
  );
}

export default Main;
