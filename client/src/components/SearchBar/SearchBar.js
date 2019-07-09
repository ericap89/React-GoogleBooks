import React, { Component } from 'react';
import './Search.css'
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';


class SearchBar extends Component {
    render() {
        return (
            <Paper className="search">
                <InputBase placeholder="Search Google Books"/>
                <IconButton >
                    <SearchIcon />
                </IconButton>
            </Paper>
        );
    }
}

export default SearchBar;