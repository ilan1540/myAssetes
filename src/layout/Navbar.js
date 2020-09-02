import React from 'react';
import { Link } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

const Navbar = () => {
  const firebase = useFirebase();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top"
      style={{ direction: 'ltr' }}
    >
      <Link className="navbar-brand" to="/home">
        My Assetes
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              שוטף
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/addkopa">
                Add kopa
              </a>
              <a className="dropdown-item" href="/allassets">
                All Assetes
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/add">
                add Rec
              </a>
            </div>
          </li>
          <li className="nav-item active dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ניהול
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="/options">
                אפשרויות
              </a>
            </div>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item active">
            <Link
              className="nav-link"
              to="/login"
              onClick={() => firebase.logout()}
            >
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
