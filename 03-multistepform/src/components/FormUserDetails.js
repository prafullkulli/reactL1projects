import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';



export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Box sx={{ flexGrow: 1 }}>
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
            Enter User Details
          </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <TextField
          variant="standard"
          alt="Enter Your First Name"
          label="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          variant="standard"
          alt="Enter Your Last Name"
          label="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          variant="standard"
          alt="Enter Your Email"
          label="Email"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br /><br />
        <Button
          variant="contained"
          label="Continue"
          size="large"
          onClick={this.continue}
        >
          Continue
        </Button>
      </Box>
    );
  }
}



export default FormUserDetails;
