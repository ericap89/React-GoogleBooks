import React, { Component } from 'react';
import Navbar from '../../components/Navbar'
import Books from '../../components/Books'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import SearchBar from '../../components/SearchBar'
class Home extends Component {
    render() {
        return (
            <>
            <Navbar/>
            <Banner/>
            <SearchBar/>
            <Books/>
            <Footer/>
            </>
        );
    }
}

export default Home;

