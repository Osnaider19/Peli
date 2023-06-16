import React, { useEffect, useState } from "react";
import axios from "axios";

function Categorias() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/genre/movie/list",
          {
            params: {
              api_key: "b62c5015964d4fcc4805e0ce64dfd3c4",
            },
          }
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <ul className="text-[#E2E8F0] py-2 mt-14">
        {genres.map((genre) => (
          <a
            href="#"
            key={genre.id}
            className="py-3 px-3 block hover:bg-slate-800 transition-all"
          >
            <li>{genre.name}</li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default Categorias;
