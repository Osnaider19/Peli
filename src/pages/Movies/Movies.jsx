import Nav from "../../components/Nav/Nav";
import Movie from '../../components/pgmovies/Movie'

export const Movies = () => {
  return (
    <>
    <Nav/>
    <main className="relative top-[70px] pl-48">
      <div className="">
        <Movie/>
      </div>
    </main>
    </>
  );
};
