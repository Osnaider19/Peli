import React, { useEffect, useState } from 'react';
import axios from 'axios';


const MovieDetails = ({ movieId }) => {
    const [movie, setMovie] = useState(null);
  
    useEffect(() => {
      const apiKey = 'b62c5015964d4fcc4805e0ce64dfd3c4';
  
      axios.get(`https://api.themoviedb.org/3/movie/${movieId}?language=es&api_key=${apiKey}`)
        .then(response => {
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
        console.log(movie)
    }, [movieId]);
  
    if (!movie) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        {/* Puedes mostrar más detalles de la película aquí */}
      </div>
    );
  };
  
  export default MovieDetails;
  
