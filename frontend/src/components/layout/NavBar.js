import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

import ImageLogo from "../../img/agriLogo.png";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul class="list-unstyled">
      <li class="list-inline-item nav-item active">
        <Link to="/homepage">
          {" "}
          <span className="hide-sm">Homepage</span>
        </Link>
      </li>
      <li class="list-inline-item nav-item">
        <a onClick={logout} href="#!">
          {" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = <ul></ul>;

  return (
    <nav className="navbar navbar-md">
      <div className="container">
        <h1>
          <Link to="/">
            <img src={ImageLogo} />
          </Link>
        </h1>
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
