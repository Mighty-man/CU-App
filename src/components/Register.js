import React, { Component } from 'react';
import {auth} from '../firebase'

const propertyName=(propertyName, value) => ({
[propertyName]:value
})

export default class Register extends Component {
    constructor(){
        super()
        this.state= {
            firstName: '',
            middlename :'',
            lastName :'',
            email: '',
            phoneNumber: '',
            county: '',
            password: '',
            cpassword: '',
            areaOfStudy: '',
            
        }
    }

    onSubmit = (event) => {
        event.preventDefault()
        const {
            firstName,
            middlename,
            lastName,
            email,
            phoneNumber,
            county,
            password,
            cpassword,
            areaOfStudy
        }= this.state
        
        // const newStudent = {
        //     firstName,
        //     middlename,
        //     lastName,
        //     email,
        //     phoneNumber,
        //     county,
        //     password,
        //     cpassword,
        //     areaOfStudy
        // }
        // console.log(newStudent)

        auth.createUserWithEmailAndPassword(email, password)
            .then(user => {

                const newStudent = {
                    firstName,
                    middlename,
                    lastName,
                    email,
                    phoneNumber,
                    county,
                    password,
                    cpassword,
                    areaOfStudy,
                    _id: user.uid
                }

                const userId=user.uid;
                fetch('https://cuappapi.herokuapp.com/api/v1/students', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(newStudent)
                })
                .then(res => res.json)
            })


        if (password !==cpassword){
             
            throw console.error('passwords do not match');
            
        }
    }

    render() {
        const { password, cpassword, firstName, email} = this.state;
        const isInvalid =
        password !== cpassword ||
        password === '';
        return (
            <div style={styles.page} className= 'reg'>
                <h1 className='head' style={ styles.header} >Welcome To Cuttington University Entrance Registration Portal</h1>
                <div className="card border-primary mb-3" style={{
                    maxWidth: "40rem",
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'block',
                    
                }}>
                <div className="card-header"><h4>Register</h4></div>
                <div className="card-body">
                    <form
                    onSubmit={this.onSubmit}
                    className= 'form'>
                        <div className='form-group' >
                        First name:
                        <input 
                        onChange = {event =>this.setState(propertyName('firstName',event.target.value))}
                        value={firstName}
                        className='form-control' 
                        type="text" name="firstName"/>
                        </div>
                        
                        <div className='form-group' >
                        Middle Name:
                        <input
                        onChange = {event =>this.setState(propertyName('middlename',event.target.value))}
                        value={this.state.middlename} 
                        className='form-control' 
                        type="text" name="middlename"/>
                        </div>
                        <div className='form-group' >
                        Last name:
                        <input 
                        onChange = {event =>this.setState(propertyName('lastName',event.target.value))}
                        value={this.state.lastName}
                        className='form-control' type="text" name="lastName"/>
                        </div>

                        <div className='form-group' >
                        EmailAddress:
                        <input 
                        onChange = {event =>this.setState(propertyName('email',event.target.value))}
                        value={this.state.email}
                        className='form-control' type="text" name="emailAddress"/>
                        </div>

                        <div className='form-group' >
                        Phone Number:
                        <input 
                        onChange = {event =>this.setState(propertyName('phoneNumber',event.target.value))}
                        value={this.state.phoneNumber}
                        className='form-control'type="number" name="phoneNumber"/>
                        </div>

                        <div className='form-group' >
                        County Of Origin:
                        <input 
                        onChange = {event =>this.setState(propertyName('county',event.target.value))}
                        value={this.state.county}
                        className='form-control' type="text" name="county"/>
                        </div>

                         <div className='form-group' >
                        Area of Study:
                        <input 
                        onChange = {event =>this.setState(propertyName('areaOfStudy',event.target.value))}
                        value={this.state.areaOfStudy}
                        className='form-control' type="text" name="areaOfStudy"/>
                        </div>

                        <div className='form-group' >
                        Create Password
                        <input 
                        onChange = {event =>this.setState(propertyName('password',event.target.value))}
                        value={this.state.password}
                        className='form-control'type="password" name="password"/>
                        </div>

                        <div className='form-group' >
                        Comfrim Password:
                        <input 
                        onChange = {event =>this.setState(propertyName('cpassword',event.target.value))}
                        value={this.state.cpassword}
                        className='form-control' type="password" name="cpassword"/>
                        </div>
                        
                        <div className='form-group' >
                        <input className='btn btn-primary' style={{
                            width:'100%',
                            }} type="submit" disabled={isInvalid} value="Sign UP"/>
                        </div>
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
    },
    header: {
        color: 'gold'
    }
}