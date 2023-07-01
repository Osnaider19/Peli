import Footer from "../../components/Footer/Footer";
import Movie from '../../components/Pagemovies/Movie'
import { useEffect } from "react";
export const Movies = () => {

  document.title = 'Peliculas Populares' 
  useEffect(()=> {
    window.scrollTo(0,0);
  } , [])
  return (
    <>
    <main className="relative top-[70px] pl-48">
      <div className="">
        
        <Movie/>
        <Footer/>
      </div>
    </main>
    </>
  );
};
