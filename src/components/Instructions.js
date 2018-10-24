import React, { Component } from 'react';
import Bank from '../assets/UBA.gif';
import Bank2 from '../assets/download.jpeg';
import {Navbar} from '../components/Navbar';


export default class Instructions extends Component {
    render() {
        return (
            <div>
                  <Navbar/>
            <div style={styles.page} className= 'reg'>
                <h1 className='head' style={ styles.header} >Welcome To Cuttington University Entrance Registration Portal</h1>
                <div className="card border-primary mb-3" style={{
                    maxWidth: "40rem",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    
                }}>
                <div className="card-header"><h4>Follow The Steps Below To Register For The CU Entrance!</h4></div>
                
                 <div class="alert alert-dismissible alert-success">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
                    </div>

                
                <div style={ styles.header} className="card-body">
                    <div class="card text-white bg-info mb-3" style={{
                        maxWidth: "20rem",
                    }}>
                        <div class="card-header"><h2>Step 1.</h2>
                        <div class="card-body">
                            <h4 class="card-title">Bank payment</h4>
                            <p class="card-text">All payments are to be made at the Bank in your area.</p>
                        </div>
                    </div>
                </div>
                </div> 
                

                <div style={ styles.header}className='card-body'>
                         <div class="card text-white bg-primary mb-3" 
                         style={{maxWidth: "20rem",}}>
                         <div class="card-header"><h2>Step 2.</h2></div>
                            <h4 class="card-title">Choose your Bank</h4>
                            <p class="card-text">Cuttington University Deals With Two Major Banking System. </p>
                            <p>UBA Bank account: 53070030000266</p>
                            <p>Ecobank account: 0011014700269602</p>
                            <img src={Bank} style={{width: "10rem"}}/>
                            <img src={Bank2} style={{width: "10rem"}}/>

                        </div>
             </div>
                    
                        <div  style={{maxWidth: "20rem",}} class="card-body bg-danger mb-3">
                            <div class="card-header"><h2>Amount to be paid at the bank</h2></div>
                            <div class="card-text ">
                                <h4 class="card-title">Undergraduate program</h4>
                                <p class="card-text">USD $ 35</p>
                                <h4 class="card-title">Graduate program</h4>
                                <p class="card-text">USD $ 100</p>
                                <h4 class="card-title">Assiociate program</h4>
                                <p class="card-text">USD $ 25</p>
                            </div>
                    </div>


                <div  style={{maxWidth: "20rem",}} class="card-body">
                        <div class="card-header"><h2>Stept 3.</h2></div>
                        <div class="card text-white bg-warning mb-3"></div>
                            <h4 class="card-title">Obtain Cuttington University Official Reciept</h4>
                            <p class="card-text">After Payment to bank, Please take the Bank slip to the 
                            Finance office on the Main campus to obtain the CU official Reciept.</p>
                </div>  
                       
                        <div class="alert alert-dismissible alert-success">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Thanks So far!!!</strong> You successfully read <a href="#" class="alert-link">At this point You are few steps towards being part of Cuttington!!!</a>.
                    </div>


                     <div  style={{maxWidth: "20rem;"}} class="card-body  bg-dark mb-3">
                        <div class="card-header"><h2>Step 4.</h2></div>
                        <div class="card-text-white">
                            <h4 class="card-title">Return to the Portal!!</h4>
                            <p class="card-text">After you obtain the official Cuttington University Reciept,
                             you will need to scan the copy of the Reciept to the Upload section on this page</p>
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
        padding: 150,
    },
    header: {
        color: 'gold'
    }
}


