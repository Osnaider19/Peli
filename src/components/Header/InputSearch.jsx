import { AiOutlineSearch } from "react-icons/ai";
function InputSearch() {
  return (
    <div className="flex justify-end">
      <div className="relative flex items-center w-[200px] rounded-lg bg-slate-800">
        <i className="text-slate-400 px-3">
          <AiOutlineSearch />
        </i>
        <input
          type="text"
          id="input-search"
          placeholder="Buscar películas o series"
          className="flex items-center py-2  w-40 justify-center outline-none h-8 bg-transparent text-slate-400 text-sm md:w-56"
        />
      </div>
    </div>
  );
}

export default InputSearch;
