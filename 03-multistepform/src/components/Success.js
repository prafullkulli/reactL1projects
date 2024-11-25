import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';



export class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    //PROCESS FORM
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}   alignItems="center" >
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    SUCCESS
                </Typography>
          </Toolbar>
        </AppBar>
        <h1>Thank You For Your Submission</h1>
      </Box>
    );
  }
}


export default Success;
