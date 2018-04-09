import React from "react";
import { NavLink } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h2 className="text-center">{this.props.headerText}</h2>
            </div>
            <div className="col-md-2">
              <NavLink exact to="/backoffice" activeClassName="hidden">
                Gå till Backoffice
              </NavLink>
              <NavLink exact to="/" activeClassName="hidden">
                Gå till Kunddata
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
