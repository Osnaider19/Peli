import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY } from "../../config/config";

export function getPersonas(url, page) {
  const [person, setPerson] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            api_key: API_KEY,
            language: "es",
          },
        });
        const newData = response.data.results
        setPerson([...person , ...newData]);
        setLoader(false);
      } catch (error) {
        setError(error);
        setLoader(true);
      }
    };
    getPerson();
  }, [page , url]);

  return { person, error, loader };
}

