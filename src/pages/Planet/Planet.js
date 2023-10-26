import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import useSwapiData from "../../services/useSwapiData";
import PlanetCard from "./helpers/PlanetCard";
import Pagination from "../../components/Pagination/Pagination";
import Search from "../../components/Search/Search";
import { useLocation, useNavigate } from "react-router-dom";
import "./Planet.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Planet() {
  const query = useQuery();
  const navigate = useNavigate();
  const pageFromQuery = query.get("page");
  const initialPage = (pageFromQuery && Number(pageFromQuery)) ? Number(pageFromQuery) : 1;
  const { data, loading, currentPage, setCurrentPage, search } = useSwapiData(
    "planets",
    initialPage
  );

  useEffect(() => {
    navigate(`/planets/?page=${currentPage}`);
  }, [currentPage, navigate]);

  return (
    <div>
      <Header />
      {loading ? (
        <div className="d-flex justify-content-md-center align-items-center vh-100">
          <img src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif?cid=ecf05e47aqz7zmpvbl61tsbl2roro6gxx4um1bjof4g6d0ll&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="loading" />
        </div>
      ) : (
        <>
          <div className="p-5">
            <Search onSearch={(query) => search(query)} />
          </div>
          <div className="planet-container">
            {data.results.map((planet) => (
              <PlanetCard key={planet.url} planet={planet} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            hasNextPage={data.next && !!data.next}
            prevPage={data.previous && !!data.previous}
            onChange={(newPage) => setCurrentPage(newPage)}
          />
        </>
      )}
    </div>
  );
}

export default Planet;
