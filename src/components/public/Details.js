import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import LuciappServices from '../../services/Luciapp.services';



export const Details = () => {

    const [gato, setGato] = useState({});
    const {id} = useParams();
    
    
    useEffect (() => {
        LuciappServices.traerPorId(id)
        .then((data) => setGato(data))
      }, [] )

  return (
    <div>
    <div class="card" style={{width: 18 + 'em', margin : 5 + 'em'}}>
        <img src={gato.image} class="card-img-top" alt="este"/>
         
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Nombre: {gato.name}</li>
    <li class="list-group-item">Especie :{gato.species}</li>
    <li class="list-group-item">Estado: {gato.status}</li>
    <li class="list-group-item"> <Link to={'/'}>Volver</Link> </li>
  </ul>
  
</div>
    </div>
  )
}
