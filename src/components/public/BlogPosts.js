import React, { useEffect, useState } from 'react'
import { BlogPost } from './BlogPost'
import LuciappServices from '../../services/Luciapp.services';

export const BlogPosts = () => {

  const [gatos, setGatos] = useState([]);

  useEffect (() => {
    LuciappServices.traerGatos()
    .then((data) => setGatos(data.results))
    .catch((error) => console.log(error))

  }, [gatos] )

  const BlogList = gatos.map((g)=> <BlogPost gato = {g} key={g.id} />)

  return (
    <div>
      <h3 className="pb-4 mb-4 font-italic border-bottom">
              La app de personajes:
            </h3>
            {BlogList}
           <br/>
            <nav className="blog-pagination">
              <a className="btn btn-outline-primary" href="#">Anterior</a>
              <a className="btn btn-outline-secondary disabled" href="#" tabIndex="-1" aria-disabled="true">Posterior</a>
            </nav>
    </div>
  )
}

