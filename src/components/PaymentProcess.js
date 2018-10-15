import React, { Component } from 'react';
import Bank from '../assets/UBA.gif';
import Bank2 from '../assets/download.jpeg';
import Navbar from '../components/Navbar';

export default class PaymentProcess extends Component {
    render() {
        return (
            <div>
                
                <div class="form-group">
      <label for="exampleInputFile">File input</label>
      <input type="file" className="form-control-file" id="exampleInputFile" aria-describedby="fileHelp"/>
      <input type="submit"className='btn btn-primary'/>
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


