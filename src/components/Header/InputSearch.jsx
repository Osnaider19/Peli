import { AiOutlineSearch } from "react-icons/ai";
function InputSearch() {
    return(
        <div className="relative flex items-center mr-8  rounded-lg bg-slate-800">
          <i className="text-slate-400 px-3">
            <AiOutlineSearch />
          </i>
          <input
            type="text"
            placeholder="Buscar películas"
            className="flex items-center py-2 justify-center outline-none h-8 bg-transparent text-slate-400 text-sm  "
          />
        </div>
    );
}

export default InputSearch;