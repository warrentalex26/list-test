import React from "react";
import Navbar from "../Navbar/Navbar";

function Header(props) {
  return (
    <header className="header-starwars">
      <div>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
