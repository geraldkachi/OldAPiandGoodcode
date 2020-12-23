import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link, withRouter } from "react-router-dom";

const RouteNavbar = () => {

  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="py-0 my-0">
      <Navbar color="dark" light expand="sm" className="p-0">
        <NavbarBrand>
          <Link to="/">Navbar-Logo</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="p-0">
          <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink>
                <Link to="/">Components</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/about">About</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/contact">Contact</Link>
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Simple Text</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

// Navbar.propTypes = {
//   light: PropTypes.bool,
//   dark: PropTypes.bool,
//   fixed: PropTypes.string,
//   color: PropTypes.string,
//   role: PropTypes.string,
//   expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   // pass in custom element to use
// };
// Navbar.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   // pass in custom element to use
// };
// Navbar.propTypes = {
//   tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//   // pass in custom element to use
// };

export default withRouter(RouteNavbar);
