import { useEffect, useState } from "react";
import { URL } from "../../config/config";
import { GetMovies } from "../Pagemovies/useGetMovies";
import { MoviesC } from "../Pagemovies/MoviesC";
import GenresSeries from "./GenresSeries";
import LoaderMovies from "../Pagemovies/LoaderMovies";

export default function MainSeries() {
  const [page, setPage] = useState(1);
  const [idGenres, setIdGenres] = useState(10759);
  const UrlB = `${URL}/discover/tv?with_genres=${idGenres}&page=${page}`;
  const { movies, loading, error, setMovies, setLoading } = GetMovies(
    UrlB,
    page
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    
    <>
      <GenresSeries
        setIdGenres={setIdGenres}
        setMovies={setMovies}
        setPage={setPage}
        setLoading={setLoading}
      />
      <MoviesC
        movies={movies}
        loading={loading}
        error={error}
        page={page}
        setPage={setPage}
        title="Series"
      />
    </>
  );
}
