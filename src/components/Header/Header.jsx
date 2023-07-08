import { RiMovieFill } from "react-icons/ri";
import InputSearch from "./InputSearch";
import Menu from "./Menu";
import { useRef } from "react";

function Header() {
  const buttonMenu = useRef();
  const linea1 = useRef();
  const linea2 = useRef();
  const linea3 = useRef();
  const menu = useRef();
  const menuDrpo = useRef();
  function handelClickButtonMenu() {
    linea1.current.classList.toggle("activelinea1__bars-menu");
    linea2.current.classList.toggle("activelinea2__bars-menu");
    linea3.current.classList.toggle("activelinea3__bars-menu");
    menu.current.classList.toggle("menu-activado");
    menuDrpo.current.classList.toggle("activa-menu-drop");
  }
  return (
    <header className="flex items-center  px-6 py-5 fixed top-0 left-0 w-full z-50 bg-[#0f172a]">
      <button className="text-white flex flex-grow md:hidden">
        <div
          ref={buttonMenu}
          className="btn-menu "
          onClick={handelClickButtonMenu}
        >
          <span ref={linea1} className="linea-menu " id="linea1"></span>
          <span ref={linea2} className="linea-menu " id="linea2"></span>
          <span ref={linea3} className="linea-menu " id="linea3"></span>
          <div
            ref={menuDrpo}
            className="hidden fixed bg-[#00000060] h-full w-full left-0 top-[80px]"
          ></div>
        </div>
      </button>
      <div className="hidden relative  items-center  justify-end px-4 md:justify-start md:px-3 md:flex-grow text-[#E2E8F0] md:flex">
        <i className="text-3xl text-[#d9254c]">
          <RiMovieFill />
        </i>
        <h1 className="text-3xl px-2 font-bold text-center ">Movies.tv</h1>
      </div>
      <div
        className="fixed justify-start z-[9999] bg-[#0f172a] top-[70px] -left-[400px]  px-3  h-full transition-all duration-300 md:relative md:left-0 md:flex md:top-0"
        ref={menu}
      >
      <Menu handelClickButtonMenu={handelClickButtonMenu}></Menu>
      </div>
      <InputSearch></InputSearch>
    </header>
  );
}

export default Header;
