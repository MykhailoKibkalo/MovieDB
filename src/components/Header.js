import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <div className="container">
      <div className="inner-content">
        <div className="brand">
          <Link to="/">WatchList</Link>
        </div>

        <ul className="nav-links">
          <li>
            <a href="https://github.com/MykhailoKibkalo/MovieDB" target="_blank" rel="noreferrer">About me</a>
          </li>
          <li>
            <Link to="/">Watch List</Link>
          </li>

          <li>
            <Link to="/watched">Watched</Link>
          </li>

          <li>
            <Link to="/add" className="btn btn-main">
              Search
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);
