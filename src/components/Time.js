import React, { Component } from 'react';
import Bank from '../assets/UBA.gif';
import Bank2 from '../assets/download.jpeg';
import {Navbar} from '../components/Navbar';


export default class Test9 extends Component {
    render() {
        return (
            <div>
            <Navbar/>
        < div style={styles.page} className= 'reg'>
             
    

                <div class="row">
                <div class="col-sm-12">
                  <div style={{
                      maxWidth: 400,
                      marginLeft: 'auto',
                      marginRight: 'auto',
                }} class="card">
                    <div class="card-body">
                      <h5 class="card-title">Schedule for entrance exam </h5>
                      <div class="card-body">
                      <a href='https://cuentranceexam.setmore.com/' target='_blank' type="button" class="btn btn-success" style={{
                            width:'100%',}}>Schedule </a> 
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
        height:'100vh',
        paddingTop: 100,
        
    },
    header: {
        color: 'gold'
        
    }
}


