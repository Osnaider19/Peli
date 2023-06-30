import Categorias from "./Categorias";

function Nav() {
  return (
      <article className="fixed z-10 h-[100vh] bg-[#0f172a] left-0 w-48  mt-1 top-[56px] pb-28 overflow-y-hidden transition hover:overflow-y-auto scroll-categories">
        <div className="fixed pt-5 text-[#E2E8F0] bg-[#0f172a] ">
          <h2 className="px-2 inline-block text-2xl font-bold ">Géneros</h2>
        </div>
        <Categorias></Categorias>
      </article>
  );
}

export default Nav;
