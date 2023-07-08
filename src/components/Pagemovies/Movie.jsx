import { useEffect, useState } from "react";
import { URL } from "../../config/config";
import { GetMovies } from "./useGetMovies";
import { MoviesC } from "./MoviesC";
import GenresName from "../PageGenres/GenresName";

export default function Movies() {
  const [page, setPage] = useState(1);
  const [idGenres, setIdGenres] = useState(28);
  const UrlB = `${URL}/discover/movie?with_genres=${idGenres}&page=${page}`;
  const { movies, loading, error, setMovies, setLoading } = GetMovies(
    UrlB,
    page
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <GenresName
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
        title="Películas"
      />
    </>
  );
}
