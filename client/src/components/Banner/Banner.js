import React, { Component } from 'react';
import './Banner.css'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
class Banner extends Component {
    render() {
        return (
<div>
      <Paper className="banner">
        <Typography variant="h4" component="h1" className="header">
          Lets Browse...
        </Typography>
        
      </Paper>
    </div>
        );
    }
}

export default Banner;