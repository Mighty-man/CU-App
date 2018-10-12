import React, { Component } from 'react';

export default class Register extends Component {
    render() {
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
                    <form  className= 'form'>
                        <div className='form-group' >
                        First name:
                        <input className='form-control' type="text" name="firstname" value=""/>
                        </div>
                        
                        <div className='form-group' >
                        Middle Name:
                        <input className='form-control' type="text" name="middlename" value=""/>
                        </div>
                        <div className='form-group' >
                        Last name:
                        <input className='form-control' type="text" name="lastname" value=""/>
                        </div>

                        <div className='form-group' >
                        Email:
                        <input className='form-control' type="text" name="email" value="youremail@dominname.com"/>
                        </div>

                        <div className='form-group' >
                        Phone Number:
                        <input className='form-control'type="number" name="phoneNumber" value="+231..."/>
                        </div>

                        <div className='form-group' >
                        County Of Origen:
                        <input className='form-control' type="text" name="county" value="County"/>
                        </div>

                        <div className='form-group' >
                        Create Password
                        <input className='form-control'type="password" name="password" value=""/>
                        </div>

                        <div className='form-group' >
                        Comfrim Password:
                        <input className='form-control' type="password" name="password" value=""/>
                        </div>
                        
                        <div className='form-group' >
                        <input className='btn btn-primary' style={{
                            width:'100%',
                            }} type="submit" value="Sign UP"/>
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