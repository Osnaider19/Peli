
import { RiMovieFill } from "react-icons/ri";
import InputSearch from "./InputSearch";
import Menu from "./Menu";


function Header() {
  return (
    <header>
      <div className="flex items-center justify-between  px-3 py-5 fixed top-0 left-0 w-full  z-50 bg-[#0f172a]">
        <div className="relative flex items-center flex-grow justify-start text-[#E2E8F0]">
            <i className="text-3xl text-[#d9254c]"><RiMovieFill/></i>
          <h1 className="text-3xl px-2 font-bold ">Movies.tv</h1>
        </div>
        <Menu></Menu>
        <InputSearch></InputSearch>
      </div>
    </header>
  );
}

export default Header;
