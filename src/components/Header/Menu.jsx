import { NavLink as NavLinkRR } from "react-router-dom";

function Menu() {

  const NavLink = ({ to, children, ...props }) => {
    return (
      <NavLinkRR
        {...props}
        className={({ isActive }) =>
          isActive ? "font-bold " : undefined
        }
        to={to}
      >
        {children}
      </NavLinkRR>
    );
  };

  return (
    <>
      <div className="text-white relative flex flex-col w-48 justify-center items-center gap-3 pr-4 md:flex-row md:mr-7">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/movie">Películas</NavLink>
        <NavLink to="/tv">Series</NavLink>
        <NavLink to="/person">Actores</NavLink>
      </div>
    </>
  );
}

export default Menu;
