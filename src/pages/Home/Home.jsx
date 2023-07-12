import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import { useEffect } from "react";
export const Home = () => {
  document.title = "Movie Tv";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Main />
      <Footer />
    </>
  );
};
