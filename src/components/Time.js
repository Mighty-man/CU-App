import React, { Component } from 'react';
import Bank from '../assets/UBA.gif';
import Bank2 from '../assets/download.jpeg';
import Navbar from '../components/Navbar';


export default class Test9 extends Component {
    render() {
        return (
            <div>
            <Navbar/>
        < div style={styles.page} className= 'reg'>
                <h1 className='head' style={ styles.header} >Welcome To Cuttington University Entrance Registration Portal</h1>
    

                <div class="row">
                <div class="col-sm-12">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Schedule for entrance exam </h5>
                      <div class="card-body">
                      <button type="button" class="btn btn-success" style={{
                            width:'100%',}}>Schedule </button> 
                        </div>
                    </div>
                  </div>
                  </div>

                  </div>
              
                 


              </ div>
              </div>
              
                                      
              
                                  
                           
              

            
        );
    }
}

const styles ={
    page: {
        backgroundColor: 'rgba(40,24,140,0.9)',
        padding: 200,
        
    },
    header: {
        color: 'gold'
        
    }
}


