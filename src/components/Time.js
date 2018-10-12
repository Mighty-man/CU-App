import React, { Component } from 'react';


export default class Time extends Component {
    render() {
        return (
            <div style={styles.page} className= 'reg'>
                <h1 className='head' style={ styles.header} >Welcome To The CU Entrance Registration Portal</h1>
                <div className="card border-primary mb-3" style={{
                    maxWidth: "40rem",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    
                }}>
                <div className="card-header"><h4>Now select your date For The CU entrance that will suite you!!!</h4></div>
                
                 <div class="alert alert-dismissible alert-success">
                    <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
                    </div>

                        <div class="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                            <div class="card-header">Graduate School Program</div>
                            <div class="card-body">
                                <h5 class="card-title">Please pick the time and Location near you.</h5>
                                
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="exampleRadios1">
                                        Graduate School Campus: June 29,2019($100 USD)- Congo Town
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">
                                    Suakoko Main Campus: June 29, 2019 ($100 USD)- Bong County
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">
                                    Kakatta AA Campus: June 29, 2019($100 USD) Margibi County
                                    </label>
                                    <button type="button" class="btn btn-success">Success</button> 
                                    </div>
                                      
                                       

                                
                            </div>
                            </div>

                            <div class="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                            <div class="card-header">Undergraduate Program</div>
                            <div class="card-body">
                                <h5 class="card-title">Please pick the time and Location near you.</h5>
                                
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="exampleRadios1">
                                        Graduate School Campus: June 29,2019($35 USD)- Congo Town
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">
                                    Suakoko Main Campus: June 29, 2019 ($35 USD)- Bong County
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">
                                    Kakatta AA Campus: June 29, 2019($35 USD)- Margibi County
                                    </label>
                                    <button type="button" class="btn btn-success">Success</button> 
                                    </div>  
                                       

                                
                            </div>
                            </div>

                            <div class="card border-secondary mb-3" style={{maxWidth: "20rem"}}>
                            <div class="card-header">Associate Program</div>
                            <div class="card-body">
                                <h5 class="card-title">Please pick the time and Location near you.</h5>
                                
                                
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                                    <label class="form-check-label" for="exampleRadios1">
                                        Graduate School Campus: June 29,2019($25 USD)- Congo Town
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">
                                    Suakoko Main Campus: June 29, 2019 ($25 USD)- Bongo County
                                    </label>
                                    </div>
                                    <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                    <label class="form-check-label" for="exampleRadios2">
                                    Kakatta AA Campus: June 29, 2019($25 USD)- Margibi County
                                    </label>
                                    </div> 
                                    <button type="button" class="btn btn-success">Success</button>     
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
