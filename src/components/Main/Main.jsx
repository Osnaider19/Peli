import Nav from "../Nav/Nav";

import Slider  from "./Slider/Slider";

function Main() {
  return (
    <>
      <Nav></Nav>
      <div className="w-[86%] relative top-[70px] flex justify-center">
        <Slider></Slider>
      </div>
    </>
  );
}

export default Main;
