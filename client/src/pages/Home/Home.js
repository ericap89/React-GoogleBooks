import React, { Component } from 'react';
import Axios from 'axios'
import Navbar from '../../components/Navbar'
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
        Axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.state.search}&key=AIzaSyCubsdL_UycSz1UcRu-IFnfStuNnltd5BM`)
          .then(({ data: { items } }) => {
            let book = []
            items.forEach(bookItem => {
              let books = {
                title: bookItem.volumeInfo.title,
                authors: bookItem.volumeInfo.authors,
                description: bookItem.volumeInfo.description,
                image: bookItem.volumeInfo.imageLinks.thumbnail,
                link: bookItem.volumeInfo.infoLink,
                id: items.indexOf(bookItem)
              }
              book.push(books)
            })
            this.setState({
              book
            })
          })
          .catch(err => console.log(err))
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

