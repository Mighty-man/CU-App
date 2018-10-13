import React, { Component } from 'react';
import Bank from '../assets/UBA.gif';
import Bank2 from '../assets/download.jpeg';


export default class Test9 extends Component {
    render() {
        return (
            
        < div style={styles.page} className= 'reg'>
                <h1 className='head' style={ styles.header} >Welcome To Cuttington University Entrance Registration Portal</h1>


                <div class="row">
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">Step 1</h5>
                      <div class="card-body">
                            <h4 class="card-text">Bank payment</h4>
                            <p class="card-text">All payments are to be made at the Bank in your area.</p>
                        </div>
                    </div>
                  </div>
              
                  <br/>
              
                </div>
                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                    <h4 class="card-title">Choose your Bank step 2</h4>
                            <p class="card-text">Cuttington University Deals With Two Major Banking System. </p>
                            <p>UBA Bank account: 53070030000266</p>
                            <img src={Bank} style={{width: "10rem"}}/>
                            <p>Ecobank account: 0011014700269602</p>
                            <img src={Bank2} style={{width: "10rem"}}/>
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                    <h3>step 3</h3>
                    <p class="card-title">Obtain Cuttington University Official Reciept</p>
                            <p class="card-text">After Payment to bank, Please take the Bank slip to the 
                            Finance office on the Main campus to obtain the CU official Reciept.</p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-3">
                  <div class="card">
                    <div class="card-body">
                    <h3>step 4</h3>
                    <p class="card-title">Return to the Portal!!</p>
                            <p class="card-text">After you obtain the official Cuttington University Reciept,
                             you will need to scan the copy of the Reciept to the Upload section on this page</p>

                             <button type="button" class="btn btn-success" style={{
                            width:'100%',}}>Next Page </button> 
                    </div>
                  </div>
                </div>
              </div>


              </ div>
              
                                      
              
                                  
                           
              

            
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


