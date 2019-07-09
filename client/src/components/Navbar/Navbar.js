import React, { Component } from 'react';
import './Navbar.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
    render() {
        return (
            <AppBar position="static" id="appbar" >
              <Toolbar >
                <Typography variant="h6" >
                  Google Books
                </Typography>
                <Button id="button" color="inherit">Search</Button>
                <Button color="inherit">Saved</Button>
              </Toolbar>
            </AppBar>
        );
    }
}

export default Navbar;