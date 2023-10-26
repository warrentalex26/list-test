import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import useSwapiDetail from "../../services/useSwapiDetail";
import { Link } from "react-router-dom";
import { extractIdFromUrl } from "../Helpers/Helpers";
import "./StarshipsDetails.css";

function StarshipsDetails() {
  const { id } = useParams();
  const { data: startshipsDetails, loading } = useSwapiDetail("starships", id);

  return (
    <div className="container-fluid bg-dark text-white">
      <Header />
      {loading ? (
        <div className="d-flex justify-content-md-center align-items-center vh-100 justify-content-center">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="starships-detail mt-5">
          <h1 className="text-center">{startshipsDetails.name}</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img
                src="/star-wars.png"
                alt={startshipsDetails.name}
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 m-auto">
              <ul className="list-group bg-dark">
                <li className="list-group-item bg-dark">
                  Clase de la nave: {startshipsDetails.starship_class}
                </li>
                <li className="list-group-item bg-dark">
                  Pasajeros: {startshipsDetails.passengers}
                </li>
                <li className="list-group-item bg-dark">
                  Modelo: {startshipsDetails.model}
                </li>
                <li className="list-group-item bg-dark">
                  Maxima Velocidad: {startshipsDetails.max_atmosphering_speed}
                </li>
                <li className="list-group-item bg-dark">
                  Longitud: {startshipsDetails.length}
                </li>
                <li className="list-group-item bg-dark">
                  Capacidad de carga: {startshipsDetails.cargo_capacity}
                </li>
                {startshipsDetails.pilots.length > 0 && (
                  <li className="list-group-item bg-dark">
                    Pilotos:
                    <ul>
                      {startshipsDetails.pilots.map((pilotUrl) => (
                        <li key={pilotUrl}>
                          <Link
                            to={`/people/${extractIdFromUrl(pilotUrl)}`}
                            className="text-info"
                          >
                            Piloto {extractIdFromUrl(pilotUrl)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StarshipsDetails;
