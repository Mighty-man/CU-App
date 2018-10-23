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
import {PrivateRoute,PublicRoute} from './components/PrivateRoute';
import Loading from './components/Loading';
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
    const { authenticated, loading, currentUser } = this.state;
    console.log(this.state)

    if(loading){
      return <Loading />
    }
    
    return(
      <div>
    <Switch>
      {/* <Route exact path='/' component={SignIn}/> */}
      <PublicRoute authenticated={authenticated} exact path='/signin' component={SignIn}/>
      <PublicRoute authenticated={authenticated} exact path='/Register' component={Register}/>
      <PrivateRoute authenticated={authenticated} exact path='/' component={() => <Welcome currentUser={currentUser} />}/>
      <PrivateRoute authenticated={authenticated} exact path='/PaymentProcess' component={PaymentProcess}/>
      <PrivateRoute authenticated={authenticated} exact path='/Time' component={Time}/>
      <PrivateRoute authenticated={authenticated} exact path='/Instructions' component={Instructions}/>
      <Route path='*' component={SignIn}/>
      
    </Switch>
  </div>

    )}
  }


export default App;
