import { useEffect, useState } from "react";
import { API_KEY } from "../../config/config";
import axios from "axios";

export function getVideos(url) {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            append_to_response : 'videos',
            language : 'es',
          },
        });
        setVideos(response);
        setLoader(false)
      } catch (error) {
        setError(error);
        setLoader(true)
      }
    };
    getVideos();
  }, [url]);

  return { videos , error , loader };
}
