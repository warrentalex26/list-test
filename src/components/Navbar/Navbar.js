import React from "react";
import { Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';

function NavbarComponent(props) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="lg" className="pl-3">
      <NavbarBrand tag={Link} to="/">StarWars</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/people">Personas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/planets">Planetas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/starships/?page=1">Naves</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
