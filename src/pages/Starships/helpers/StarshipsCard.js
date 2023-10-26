import React from "react";
import "./StarshipsCard.css";
import { extractIdFromUrl } from "../../Helpers/Helpers";
import { Link } from "react-router-dom";

function StarshipsCard({ starships }) {
  return (
    <div className="starships-card">
      <img src="star-wars.png" alt={starships?.name} className="starships-image" />
      <h3>{starships?.name}</h3>
      <p>
      Pasajeros: <span>{starships?.passengers}</span>
      </p>
      <p>
        Longitud: <span>{starships?.length}</span>
      </p>
      <p>
        Fabricante: <span>{starships?.manufacturer}</span>
      </p>
      <p>
        Capacidad de carga: <span>{starships?.cargo_capacity}</span>
      </p>
      <p>
        <Link className="btn btn-primary" to={`/starships/${extractIdFromUrl(starships?.url)}`}>
          Mas detalles de la nave
        </Link>
      </p>
    </div>
  );
}

export default StarshipsCard;
