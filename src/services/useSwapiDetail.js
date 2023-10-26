import { useState, useEffect } from "react";
import axios from "axios";

function useSwapiDetail(endpoint, id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`https://swapi.dev/api/${endpoint}/${id}/`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching detail data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, id]);

  return {
    data,
    loading
  };
}

export default useSwapiDetail;
