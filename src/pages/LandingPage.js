import React from "react";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/people");
  };
  return (
    <>
      <Header />
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">
            Bienvenido a la prueba tecnica de starwars de Lisit
          </h1>
          <p className="landing-subtitle">
            Explora el universo de Star Wars y descubre sus personajes, planetas
            y naves.
          </p>
          <button className="landing-button" onClick={handleExploreClick}>
            Explorar
          </button>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
