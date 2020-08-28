import React from 'react';

export const MiniNav = ({ edit, moveFor, moveBack }) => {
  return (
    <div className="containar-fluid bg-secondary " style={{ height: '40px' }}>
      <nav className="navbar navbar-expand-md navbar-dark ">
        <ul className="navbar-nav mr-3">
          <li className="nav-item active">
            <p className="nav-link" type="button" onClick={moveBack}>
              <i className="fas fa-arrow-right"></i>
            </p>
          </li>
          <li className="nav-item">
            <a className="nav-link" type="button" href={edit}>
              עדכן
            </a>
          </li>
          <li className="nav-item">
            <p className="nav-link" type="button" onClick={moveFor}>
              <i className="fas fa-arrow-left"></i>
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
};

/*


*/
