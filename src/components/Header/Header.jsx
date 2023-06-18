import { AiOutlineSearch } from "react-icons/ai";
import { RiMovieFill } from "react-icons/ri";


function Header() {
  return (
    <header>
      <div className="flex items-center justify-between px-3 py-5 fixed top-0 left-0 w-full  z-50 bg-[#0f172a]">
        <div className="relative flex items-center justify-center text-[#E2E8F0]">
            <i className="text-2xl text-[#d9254c]"><RiMovieFill/></i>
          <h1 className="text-2xl px-2 ">Movie.tv</h1>
        </div>
        <div className="relative flex items-center mr-8  rounded-lg bg-slate-800">
          <i className="text-slate-400 px-3">
            <AiOutlineSearch />
          </i>
          <input
            type="text"
            className="outline-none h-8 bg-transparent text-slate-400 text-ms"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
