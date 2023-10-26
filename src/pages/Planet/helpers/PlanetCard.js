import React from "react";
import "./PlanetCard.css";
import { extractIdFromUrl } from "../../../pages/Helpers/Helpers";
import { Link } from "react-router-dom";

function PlanetCard({ planet }) {
  return (
    <div className="planet-card">
      <img src="/star-wars.png" alt={planet?.name} className="planet-image" />
      <h3>{planet?.name}</h3>
      <ul>
        <li>
          Periodo de Orbita: <span>{planet?.orbital_period}</span>
        </li>
        <li>
          Diametro: <span>{planet?.orbital_period}</span>
        </li>
        {planet.residents.length > 0 && (
          <li className="">
            Residentes:
            <ul>
              {planet.residents.map((pilotUrl) => (
                <li key={pilotUrl}>
                  <Link
                    to={`/people/${extractIdFromUrl(pilotUrl)}`}
                    className="text-info"
                  >
                    Residente {extractIdFromUrl(pilotUrl)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )}
      </ul>
      <p>
        <Link
          className="btn btn-primary none-decoration"
          to={`/planets/${extractIdFromUrl(planet?.url)}`}
        >
          Mas detalles del Planeta
        </Link>
      </p>
    </div>
  );
}

export default PlanetCard;
