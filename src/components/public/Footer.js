import React, { useState } from 'react'

export const Footer = () => {

    const [clicks, Contador] = useState(0);
    const anio = new Date().getFullYear();
    const compania = "Equipo73 & Co."

    const ManejoClicks = ()=>{
        Contador(clicks + 1);
    }

  return (
    <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p className="text-center text-body-secondary">&copy; {anio}, {compania} - Clicks={clicks} </p>
    <span onClick={ManejoClicks}>
        <p>HAGA CLICK AQUI</p>
    </span>
  </footer>
</div>
  )
}

