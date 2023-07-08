import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

function ButtonSlider({scrollLeft , scrollRigth}) {
  return (
    <>
      <div className="hidden md:block">
        <div className="absolute left-0 h-[250px] flex items-center bg-black/40 z-30 opacity-0 pointer-events-none button transition-all duration-300">
          <i className="text-4xl cursor-pointer" onClick={scrollLeft}>
            <MdArrowBackIosNew />
          </i>
        </div>
        <div className="absolute right-0 h-[250px] flex items-center bg-black/40 z-30 opacity-0 pointer-events-none button ">
          <i className="text-4xl cursor-pointer" onClick={scrollRigth}>
            <MdArrowForwardIos />
          </i>
        </div>
      </div>
    </>
  );
}

export default ButtonSlider;
