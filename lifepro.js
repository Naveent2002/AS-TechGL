import React, { useState } from 'react';
import './lifepro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import AnimatedCursor from "react-animated-cursor";

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRedirect = () => {
    window.location.href = '/dashboard'; 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    if (username === 'naveen' && password === 'password123') {
      console.log('Login successful');
      handleRedirect();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
      <div className="containerLife">
        <AnimatedCursor />
        <h2>Sign In</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fname"></label>
            <input
              type="text"
              id="fname"
              name="fname"
              placeholder="Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lname"></label>
            <input
              type="password"
              id="lname"
              name="lname"
              placeholder="Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <hr />
          </div>
          <button type="submit" className="lifeSec btn btn">
            <FontAwesomeIcon icon={faKey} />
            <span className="bigger-110">Secure Login</span>
          </button>
          <a href="#" className="forpass">
            <FontAwesomeIcon icon={faArrowLeft} />
            I forgot my password
          </a>
          {error && <p>{error}</p>}
        </form>
      </div>
  );
}

export default SignIn;
