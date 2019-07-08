import React, { Component } from 'react';
import Navbar from '../../components/Navbar'
import Books from '../../components/Books'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
class Home extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <Banner/>
            <Books/>
            <Footer/>
            </>
        );
    }
}

export default Home;

