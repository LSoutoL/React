import React, { Component } from 'react'
import { BlogPosts } from './BlogPosts';
import LuciappServices from '../../services/Luciapp.services';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = { gatos : [] }
    }

    componentDidMount(){
        
    }

  render() {
    return (
        <main role="main" className="container">
        <div className="row">
          <div className="col-md-8 blog-main">
            
            <BlogPosts/>
      
          </div>
      
          <aside className="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
      
            <div className="p-4">
              <h4 className="font-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
                <li><a href="#">March 2014</a></li>
                <li><a href="#">February 2014</a></li>
                <li><a href="#">January 2014</a></li>
                <li><a href="#">December 2013</a></li>
                <li><a href="#">November 2013</a></li>
                <li><a href="#">October 2013</a></li>
                <li><a href="#">September 2013</a></li>
                <li><a href="#">August 2013</a></li>
                <li><a href="#">July 2013</a></li>
                <li><a href="#">June 2013</a></li>
                <li><a href="#">May 2013</a></li>
                <li><a href="#">April 2013</a></li>
              </ol>
            </div>
      
            <div className="p-4">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </aside>
        </div>
      </main>
    )
  }
}




