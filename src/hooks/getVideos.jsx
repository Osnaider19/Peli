import { useEffect, useState } from "react";
import { API_KEY } from "../config/config";
import axios from "axios";

export function getVideos(url) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  const [allData , setAllData] = useState([])
  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language : 'es-MX',
          },
        });
        if (response.data.results) {
          const trailer = response.data.results.find((video) => video.type ===  "Trailer")
          setVideos(trailer ? trailer : response.data.results[0])
          //{console.log(trailer)}
        }
        setAllData(response.data.results);
        setLoader(false)
      } catch (error) {
        setError(error);
        setLoader(true)
      }
    };
    
    getVideos();
  }, [url]);

  return { videos , error , loader , allData};
}
