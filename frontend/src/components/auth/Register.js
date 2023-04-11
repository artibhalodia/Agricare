import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
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
          <h1 className="large text--primary text-center mb-4">Sign Up</h1>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            className="form-control mt-2"
          />
        
        
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
            className="form-control mt-2"
          />        
        
        
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
            className="form-control mt-2"
          />
        
        
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
            className="form-control mt-2"
          />
        </div>
        <center><input type="submit" className="btn btn-primary mt-3 mb-3" value="Register" /></center>
      </form>
      <p className="my-1 text-center">
        Already have an account? <Link to="/login">Sign In</Link>
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

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
