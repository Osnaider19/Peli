import { NavLink as NavLinkRR } from "react-router-dom";

function Menu({ handelClickButtonMenu }) {
  const NavLink = ({ to, children, onClick, ...props }) => {
    return (
      <NavLinkRR
        {...props}
        className={({ isActive }) => (isActive ? "font-bold " : undefined)}
        to={to}
        onClick={onClick}
      >
        {children}
      </NavLinkRR>
    );
  };

  return (
    <>
      <div className="text-white relative flex flex-col w-48 justify-center items-center gap-10 pt-8 pr-4  md:gap-3 md:flex-row md:mr-7 md:pt-0">
        <NavLink
          to="/"
          onClick={() => {
            handelClickButtonMenu();
          }}
        >
          <span className="relative w-48 block text-center py-2 active:bg-slate-800 rounded-lg md:w-auto md:py-0 md:active:bg-transparent">
            Inicio
          </span>
        </NavLink>
        <NavLink
          to="/movie"
          onClick={() => {
            handelClickButtonMenu();
          }}
        >
          <span className="relative w-48 block text-center py-2 active:bg-slate-800 rounded-lg md:w-auto md:py-0 md:active:bg-transparent">
            Películas
          </span>
        </NavLink>
        <NavLink
          to="/tv"
          onClick={() => {
            handelClickButtonMenu();
          }}
        >
          <span className="relative w-48 block text-center py-2 active:bg-slate-800 rounded-lg md:w-auto md:py-0 md:active:bg-transparent">
            Series
          </span>
        </NavLink>
        <NavLink
          to="/person"
          onClick={() => {
            handelClickButtonMenu();
          }}
        >
          <span className="relative w-48 block text-center py-2 active:bg-slate-800 rounded-lg md:w-auto md:py-0 md:active:bg-transparent">
            Actores
          </span>
        </NavLink>
      </div>
    </>
  );
}

export default Menu;
