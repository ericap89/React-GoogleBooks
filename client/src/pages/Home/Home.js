import React, { Component } from 'react';
import Navbar from '../../components/Navbar'
import Books from '../../components/Books'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'
import SearchBar from '../../components/SearchBar'
import BookCase from '../../components/BookCase'
class Home extends Component {
    constructor(props) {
        super(props)
    }
    state={
        search: '',
        book: [],
    }

    handleChange = (e) => {
        this.setState({
            search:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
    }


    render() {
        return (
            <>
            <Navbar/>
            <Banner/>
            <SearchBar 
            search={this.state.search} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}/>
            <BookCase book={this.state.book}/>
            <Footer/>
            </>
        );
    }
}

export default Home;

