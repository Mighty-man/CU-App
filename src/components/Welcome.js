import React, { Component } from 'react';
import ReactFilestack, { client } from 'filestack-react';
import Bank from '../assets/UBA.gif';
import Bank2 from '../assets/download.jpeg';
import Navbar from '../components/Navbar';
import {Link, withRouter} from 'react-router-dom';

 class Welcome extends Component {
  constructor(props){
    super(props)
    this.state={
      isFileUploaded: false,
      image:'',

    }
  }
    render() {
        return (
           <div>
        <Navbar/>
        < div style={styles.page} className= 'reg'>
        <div style={styles.jambo} class="jumbotron">
          <h4 class="display-4">Welcome To Cuttington University Entrance Registration Portal</h4>
        
        </div>
                <h1 className='head' style={ styles.header} ></h1>


                <div class="row">
                <div class="col-md-3">
                  <div style ={styles.card} class="card">

                    <div class="card-body">
                      <h5 style={styles.cardTitle} class="card-title">Step 1</h5>
                      <div class="card-body">
                            <h5 class="card-text">Bank payment</h5>
                            <p class="card-text">All payments are to be made at the Bank in your area.</p>
                            <h6 class="card-title">Undergraduate program</h6>
                                <p class="card-text">USD $ 35</p>
                                <h6 class="card-title">Graduate program</h6>
                                <p class="card-text">USD $ 100</p>
                                <h6 class="card-title">Assiociate program</h6>
                                <p class="card-text">USD $ 25</p>
                        </div>
                    </div>
                  </div>
              
                  <br/>
              
                </div>
                <div class="col-md-3">
                  <div style ={styles.card} class="card">
                    <div class="card-body">
                    <h5 style={styles.cardTitle} class="card-title">Step 2</h5>
                            <p class="card-text">Cuttington University Deals With Two Major Banking System. </p>
                            <p>UBA Bank account: 53070030000266</p>
                            <img src={Bank} style={{width: "10rem"}}/>
                            <p>Ecobank account: 0011014700269602</p>
                            <img src={Bank2} style={{width: "10rem"}}/>
                    </div>
                  </div>
                </div>

                <div  class="col-md-3">
                  <div style ={styles.card} class="card">
                    <div class="card-body">
                    <h5 style={styles.cardTitle} className= 'card-title'>Step 3</h5>
                    <p class="card-title">Obtain Cuttington University Official Reciept</p>
                            <p class="card-text">After Payment to bank, Please take the Bank slip to the 
                            Finance office on the Main campus to obtain the CU official Reciept.</p>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div style ={styles.card} class="card">
                    <div class="card-body">
                    <h5 style={styles.cardTitle} className= 'card-title'>Step 4</h5>
                    <p class="card-title">Return to the Portal!!</p>
                            <p class="card-text">After you obtain the official Cuttington University Reciept,
                             you will need to scan the copy of the Reciept to the Upload section on this page</p>

                            { this.state.isFileUploaded ? null :
                             <ReactFilestack
                             apikey='AKYue80jkT7eK0k41Jq1oz'
                             buttonText="Upload Reciept"
                             buttonClass="btn btn-primary btn-block"
                             onSuccess={(res)=>{
                               let userEmail = this.props.currentUser.email;
                               let bankReceipt = {
                                 email: userEmail,
                                 image: res.filesUploaded[0].url
                               }
                                console.log(res)
                                this.setState({
                                  image: res.filesUploaded[0].url,
                                  isFileUploaded: true
                                });

                                fetch('https://cu-app.herokuapp.com/api/v1/receipts', {
                                  method: 'POST',
                                  header: {
                                    "Content-Type": "application/json"
                                  },
                                  body: JSON.stringify(bankReceipt)
                                })
                                .then( res => res.json())
                             }}
                             onError={ e => console.log(e)}
                             
                             />
                            }
                             {/* <button type="button" class="btn btn-primary" style={{
                            width:'100%',}}>Upload Reciept </button> */}
                            { this.state.isFileUploaded ? 
                            <Link to='/Time' class="btn btn-success" style={{
                            width:'100%',}}>Next Page </Link> 
                            : null }
                    </div>
                  </div>
                </div>
              </div>


              </ div>

              </div> 
              
                                      
              
                                  
                           
              

            
        );
    }
}
export default withRouter(Welcome)

const styles ={
    page: {
        backgroundColor: 'rgba(40,24,140,0.9)',
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 100,
        
    },
    header: {
        color: 'gold'
        
    },
    jambo: {
      backgroundColor: 'rgba(255,255,255,0.3)',
      color: 'white',
      textAlign: 'center',
      
    },
    card : {
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0.3)',

    },
    cardTitle : {
      color : 'gold',
    }

}


