import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import useSwapiDetail from "../../services/useSwapiDetail";
import "./PeopleDetails.css";
import { extractIdFromUrl } from "../Helpers/Helpers";
import { Link } from "react-router-dom";

function PeopleDetails() {
  const { id } = useParams();
  const { data: personDetails, loading } = useSwapiDetail("people", id);

  return (
    <div className="container-fluid bg-dark text-white">
      <Header />
      {loading ? (
        <div className="d-flex justify-content-md-center align-items-center vh-100 justify-content-center">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <div className="person-detail mt-5">
          <h1 className="text-center">{personDetails.name}</h1>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <img src="/star-wars.png" alt={personDetails.name} className="img-fluid" />
            </div>
            <div className="col-md-6 m-auto">
              <ul className="list-group bg-dark">
                <li className="list-group-item bg-dark">Altura: {personDetails.height}cm</li>
                <li className="list-group-item bg-dark">Peso: {personDetails.mass}kg</li>
                <li className="list-group-item bg-dark">Color de cabello: {personDetails.hair_color}</li>
                <li className="list-group-item bg-dark">Color de piel: {personDetails.skin_color}</li>
                <li className="list-group-item bg-dark">Color de ojos: {personDetails.eye_color}</li>
                <li className="list-group-item bg-dark">Cumpleaños: {personDetails.birth_year}</li>
                <li className="list-group-item bg-dark">Genero: {personDetails.gender}</li>
                {personDetails.starships.length > 0 && (
                  <li className="list-group-item bg-dark">
                    Naves:
                    <ul>
                      {personDetails.starships.map((pilotUrl) => (
                        <li key={pilotUrl}>
                          <Link
                            to={`/people/${extractIdFromUrl(pilotUrl)}`}
                            className="text-info"
                          >
                            Nave {extractIdFromUrl(pilotUrl)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                
                )}
                <li className="list-group-item bg-dark">
                  <Link to={`/planets/${extractIdFromUrl(personDetails.homeworld)}`}>Mundo Natal</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleDetails;
