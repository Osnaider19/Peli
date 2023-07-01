import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";

function ButtonSlider(props) {
  return (
    <>
      <div className="hidden md:block">
        <div className="absolute left-0 h-[250px] flex items-center bg-black/40 z-50 opacity-0 pointer-events-none button transition-all duration-300">
          <i className="text-4xl cursor-pointer" onClick={props.scrollLeft}>
            <MdArrowBackIosNew />
          </i>
        </div>
        <div className="absolute right-0 h-[250px] flex items-center bg-black/40 z-50 opacity-0 pointer-events-none button ">
          <i className="text-4xl cursor-pointer" onClick={props.scrollRigth}>
            <MdArrowForwardIos />
          </i>
        </div>
      </div>
    </>
  );
}

export default ButtonSlider;
