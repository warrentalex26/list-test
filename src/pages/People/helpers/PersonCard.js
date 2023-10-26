import React from "react";
import "./PersonCard.css";
import { extractIdFromUrl } from "../../../pages/Helpers/Helpers";
import { Link } from "react-router-dom";

function PersonCard({ person }) {
  return (
    <div className="person-card">
      <img src="star-wars.png" alt={person.name} className="person-image" />
      <h3>{person.name}</h3>
      <p>
        {/* <a href={person.homeworld}>Mundo Natal</a> */}
        <Link to={`/planets/${extractIdFromUrl(person.homeworld)}`}>
          Mundo Natal
        </Link>
      </p>
      <ul>
      <p>Naves:</p>
        {person.starships.length > 0 && person.starships.map((starships) => (
          <li key={starships}>
            <Link
              to={`/starships/${extractIdFromUrl(starships)}`}
              className="text-info"
            >
              Nave {extractIdFromUrl(starships)}
            </Link>
          </li>
        ))}
      </ul>
      <p>
        <Link className="btn btn-primary none-decoration" to={`/people/${extractIdFromUrl(person.url)}`}>
          Mas detalles del personaje
        </Link>
      </p>
    </div>
  );
}

export default PersonCard;
