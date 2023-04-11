import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Navigate to="/homepage" />;
  }

  return (
    <section className="landing">
      <div className="container">
        <div className='row'>
        <div className='col-lg-6 col-md-6 offset-lg-3 offset-md-3 col-sm-12 col-xs-12'>
        <div className="landing-inner">
          <h1 className="text-uppercase">Agricare</h1>
          <p className="font-weight-bold landing-tagline">
          Protect your crops, empower your harvest with Agricare's plant disease detection.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Sign Up
            </Link>&nbsp;&nbsp;&nbsp;
            <Link to="/login" className="btn btn-secondary">
              Login
            </Link>
          
        </div>
      </div>
        </div>
      </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
