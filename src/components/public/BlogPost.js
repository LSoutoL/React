import React from 'react'
import { Link } from 'react-router-dom'

export const BlogPost = ({gato}) => {

 

  return (
    <div>
      <div className="blog-post">
              <h2 className="blog-post-title">{gato.name}</h2>

              <img src = {gato.image} alt="este"/>

              <br/>

              <Link to={`/Details/${gato.id}`} >Detalles</Link>  
             
              <br/>
              <br/>
            </div>
    </div>
  )
}


