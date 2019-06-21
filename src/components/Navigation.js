import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>

        <Link className="some-link" to="/">
              Home
            </Link>

        <Link className="some-link" to="/about">
              About
            </Link>

        <Link className="some-link" to="/contact">
              Contact
            </Link>
      </div>
    </div>
  );
};

export default Navigation;
