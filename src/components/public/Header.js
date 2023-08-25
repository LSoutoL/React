import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
    <nav className="navbar navbar-dark bg-dark">
      <ul className="nav nav-pills">
        <li className="nav-item"><Link to={`/`} className="nav-link">Home</Link></li>
        <li className="nav-item"><Link to={`/Form`} className="nav-link">Iniciar sesion</Link></li>
        <li className="nav-item"><a href="#" className="nav-link">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
      </nav>
    </header>
  )
}

