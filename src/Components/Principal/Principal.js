import React from 'react';
import Home from '../Home/TelaHome'
import Empresa from '../Empresa/Empresa'
import Footer from '../Footer/Footer'
import TelaMej from '../Mej/Mej';

export default class Principal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return (
            <div className='Principal'>
                <Home id='section1' />
                <Empresa id='section2' />
                <TelaMej id='section3' />
                <Footer />

            
            </div>

        );
    }
}