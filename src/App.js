import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Welcome from './components/Welcome';
import Register from './components/Register';
import SignIn from './components/SignIn';
import PaymentProcess from './components/PaymentProcess';
import Time from './components/Time';
import Instructions from './components/Instructions';
import Test from './components/Test';
import PrivateRoute from './components/PrivateRoute';
import {auth} from './firebase';



class App extends Component{
  state ={
    loading: true,
    authenticated: false,
    user: null,
    currentUser: null
  }

  authListener = () =>{
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
        console.log(user);
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        })
      }
    })
  }

  

  componentWillMount(){
    this.authListener();
  }


  render() {
    const { authenticated, loading, user } = this.state;
    console.log(this.state)
    
    return(
      <div>
    <Switch>
      <Route exact path='/' component={SignIn}/>
      <Route exact path='/signin' component={SignIn}/>
      <Route exact path='/Register' component={Register}/>
      <PrivateRoute authenticated={authenticated} exact path='/Welcome' component={() => <Welcome />}/>
      <PrivateRoute authenticated={authenticated} exact path='/PaymentProcess' component={PaymentProcess}/>
      <PrivateRoute authenticated={authenticated} exact path='/Time' component={Time}/>
      <PrivateRoute authenticated={authenticated} exact path='/Instructions' component={Instructions}/>
      {/* <Route path='/Test' component={Test}/> */}
      
    </Switch>
  </div>

    )}
  }


export default App;
