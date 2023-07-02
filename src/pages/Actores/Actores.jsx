import MainActores from "../../components/PageActores/MainActores";
import Footer from "../../components/Footer/Footer";
import { useEffect } from "react";
export function Actores() {

  document.title = "Actores Populares";
  useEffect(()=>{
    window.scrollTo(0, 0);
  })
  return (
    <main className="relative pt-[80px]">
      <div className="">
        <MainActores />
        <Footer />
      </div>
    </main>
  );
}
