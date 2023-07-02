import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/config";

export function getActor(url) {
  const [actor, setActor] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fechActor = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language: "es",
          },
        });
        setActor(response.data);
        setLoader(false);
      } catch (error) {
        setError(error);
        setLoader(true);
      }
    };
    fechActor();
  }, [url]);

  return {actor , loader , error}
}
