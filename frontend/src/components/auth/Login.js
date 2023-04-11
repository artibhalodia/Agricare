import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/homepage" />;
  }

  return (
    <div className="landing d-flex align-items-center justify-content-center">
    <div className="container ">
      <div className='row'>
        <div className='col-sm-6 col-md-6 col-lg-6 offset-sm-3 offset-md-6 offset-lg-6 '>
          <div className='d-flex justify-content-center'>
          <div className='card'>
            <div className='card-body'>
          <h1 className="large text--primary text-center mb-4">Sign In</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control mt-2"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            minLength="6"
            className="form-control mt-2"
          />
        </div>
        <center><input type="submit" className="btn btn-primary mt-3 mb-3" value="Login" /></center>
       
      </form>
      <p className="my-1 text-center">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
      </div>
      </div>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
