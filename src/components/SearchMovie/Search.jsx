import MovieDetails from './Fsearchmovie';

const App = () => {
  const movieId = 603692; // Reemplaza 12345 con el ID de la película que deseas buscar

  return (
    <div>
      <h1>Detalles de la película</h1>
      <MovieDetails movieId={movieId} />
    </div>
  );
};

export default App;
