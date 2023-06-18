import Nav from "../Nav/Nav";
import EnCantera from "./EnCantera/EnCantera";
import Proximamente from "./Proximamente/Proximamente";

import Slider from "./Slider/Slider";

function Main() {
  return (
    <main className=" w-[100%] relative top-[70px] flex justify-end flex-col">
      <div className="relative w-[100%] pl-48">
        <Nav></Nav>
        <Slider></Slider>
        <Proximamente></Proximamente>
        <EnCantera></EnCantera>
      </div>
    </main>
  );
}

export default Main;
