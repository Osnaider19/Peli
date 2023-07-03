import { useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import  MainSeries  from "../../components/PageSeries/MainSeries";

export function Series() {
  document.title = "Series - Movie Tv" ;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className="relative pl-0 md:top-[80px] text-white md:pl-48">
        <div className="">
          <MainSeries />
          <Footer />
        </div>
      </main>
    </>
  );
}
