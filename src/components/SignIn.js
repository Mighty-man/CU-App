import React, { Component } from 'react';
import {auth} from '../firebase';

const propertyName=(propertyName, value) => ({
    [propertyName]: value
})

export default class SignIn extends Component {
    constructor(){
        super()
        this.state={
            email: '',
            password: ''
        }
    }
    onSignIn =(e) => {
        e.preventDefault()
        const {email, password} = this.state;
        auth.signInWithEmailAndPassword(email, password)
            .then(user => console.log(user))



    }

    render() {
        return (
            <div style={styles.page}>
                <div class="card border-primary mb-3" style={{maxWidth: "20rem", marginLeft: 'auto',marginRight: 'auto'}}>
                <div class="card-header"><h3>Sign In</h3></div>
                <div class="card-body">
                    <form onSubmit={this.onSignIn}>
                        <div className= 'form-group'>
                            <label>Email</label>
                            <input 
                            onChange={event => this.setState(propertyName('email',event.target.value)) }
                            value={this.state.email}
                            className= 'form-control' 
                            type='email'/>
                        </div>

                        <div className= 'form-group'>
                            <label>Password</label>
                            <input
                            onChange={event => this.setState(propertyName('password',event.target.value)) }
                            value={this.state.password}
                             className= 'form-control'
                              type='password'/>
                        </div>
                        <input style={{width: '100%'}} className= 'btn btn-primary' type= 'submit'/>
                        <p>Don't have an account? <a  href='#'>Register Now></a></p>
                        </form>
                   
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
        height: '100vh',
    },
    header: {
        color: 'gold'
    }
}