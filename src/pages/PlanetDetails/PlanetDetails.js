import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import useSwapiDetail from "../../services/useSwapiDetail";
import { Link } from "react-router-dom";
import { extractIdFromUrl } from "../Helpers/Helpers";
import "./PlanetDetails.css";

function PlanetDetails() {
  const { id } = useParams();
  const { data: planetDetails, loading } = useSwapiDetail("planets", id);

  return (
    <div className="container-fluid bg-dark text-white">
      <Header />
      {loading ? (
        <div className="d-flex justify-content-md-center align-items-center vh-100">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="planet-detail mt-5">
          <h1 className="text-center">{planetDetails.name}</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img
                src="/star-wars.png"
                alt={planetDetails.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 m-auto">
              <ul className="list-group bg-dark">
                <li className="list-group-item bg-dark">
                  Periodo de orbita: {planetDetails.orbital_period}
                </li>
                <li className="list-group-item bg-dark">
                  Diametro: {planetDetails.diameter}kg
                </li>
                <li className="list-group-item bg-dark">
                  Clima: {planetDetails.temperate}
                </li>
                <li className="list-group-item bg-dark">
                  Gravedad: {planetDetails.gravity}
                </li>
                <li className="list-group-item bg-dark">
                  Terreno: {planetDetails.terrain}
                </li>
                <li className="list-group-item bg-dark">
                  Habitantes: {planetDetails.population}
                </li>
                <li className="list-group-item bg-dark">
                  Agua: {planetDetails.surface_water}
                </li>
                <li className="list-group-item bg-dark">
                  Residentes:
                  <ul>
                    {planetDetails.residents.map((residentUrl) => (
                      <li key={residentUrl}>
                        <Link
                          to={`/people/${extractIdFromUrl(residentUrl)}`}
                          className="text-info"
                        >
                          Residente {extractIdFromUrl(residentUrl)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlanetDetails;
