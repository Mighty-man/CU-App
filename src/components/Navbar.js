import React, { Component } from 'react';

export default class Navbar extends Component {
    render() {
        return (
            <div>
                
    <nav className=" navbar navbar-expand-lg navbar-light bg-light">
    <div className= 'container mr-auto'>
  <a className="navbar-brand" href="#">Cuttington University (CU)</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div style={{justifyContent: 'right'}} className=" collapse navbar-collapse" id="navbarColor03">
      
      <button className="btn btn-primary my-2 my-sm-0" type="submit">Log Out</button>
    
  </div>
  </div>
</nav>

            </div>
        );
    }
}