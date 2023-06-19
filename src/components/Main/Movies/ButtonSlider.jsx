import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { ScrollLeft, ScrollRight } from './FSlider';


function ButtonSlider() {

  return (
    <>
      <div className="absolute left-0 h-[250px] flex items-center bg-black/40 z-50 opacity-0 pointer-events-none button-proximamente transition-all duration-300">
        <i
          className="text-4xl cursor-pointer button-left"
          onClick={ScrollRight}
        >
          <MdArrowBackIosNew />
        </i>
      </div>
      <div className="absolute right-0 h-[250px] flex items-center bg-black/40 z-50 opacity-0 pointer-events-none button-proximamente">
        <i
          className="text-4xl cursor-pointer button-ringht"
          onClick={ScrollLeft}
        >
          <MdArrowForwardIos />
        </i>
      </div>
    </>
  );
}
 
export default ButtonSlider;