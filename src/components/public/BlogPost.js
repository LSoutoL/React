import React from 'react'

export const BlogPost = ({gato}) => {

  return (
    <div>
      <div className="blog-post">
              <h2 className="blog-post-title">{gato.name}</h2>

              <img src = {gato.image} alt="este"/>
      
              <p>Especie : {gato.species}</p>
              <p>Estado: {gato.status}</p>
              <p>Origen: {gato.origin.name}</p>
             
              <br/>
              <br/>
            </div>
    </div>
  )
}


