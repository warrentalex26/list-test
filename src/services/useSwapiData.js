import { useState, useEffect } from "react";
import axios from "axios";

function useSwapiData(endpoint, initialPage = 1) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(initialPage < 1 ? 1 : initialPage);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(`https://swapi.dev/api/${endpoint}/?page=${currentPage}`);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, currentPage]);

  const search = async (query) => {
    setLoading(true);

    try {
      if (!query) {
        return setCurrentPage(1);
      }
      const response = await axios.get(`https://swapi.dev/api/${endpoint}/?search=${query}`);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    currentPage,
    setCurrentPage,
    search
  };
}

export default useSwapiData;
