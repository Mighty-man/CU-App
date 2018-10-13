import React, { Component } from 'react';
import Bank from '../assets/UBA.gif';
import Bank2 from '../assets/download.jpeg';


export default class Welcome extends Component {
    render() {
        return (
            <div style={styles.page} className= 'reg'>
                <h1 className='head' style={ styles.header} >Welcome To Cuttington University Entrance Registration Portal</h1>
                <div className="card border-primary mb-3" style={{
                    maxWidth: "40rem",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    
                }}>
               
               <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Register(Sign Up)</h5>
        <p class="card-text">Do you want to Register for the CU Entrance?</p>
        <a href="#" class="btn btn-primary">Register Here!</a>
      </div>
    </div>

    <br/>

  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Sign In</h5>
        <p class="card-text">If you already have an account with this portal.</p>
        <a href="#" class="btn btn-primary">Sign In</a>
      </div>
    </div>
  </div>
</div>

                        

                    
             

                   
                </div>


            </div>

            
        );
    }
}

const styles ={
    page: {
        backgroundColor: 'rgba(40,24,140,0.9)',
        padding: 300,
        
    },
    header: {
        color: 'gold'
        
    }
}


