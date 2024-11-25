import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';



export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
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
          Enter Personal Details
          </Typography>
          </Toolbar>
        </AppBar>
        <br />
        <TextField
          variant="standard"
          alt="Enter Your Occupation"
          label="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          variant="standard"
          alt="Enter Your City"
          label="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          variant="standard"
          alt="Enter Your Bio"
          label="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br /><br />
        
        <Button
        style={styles.button}
          variant="contained"
          label="Continue"
          size="large"
          onClick={this.continue}
        >
          Continue
        </Button>
        <Button
        style={styles.button}
          variant="text"
          label="Back"
          size="large"
          onClick={this.back}
          value={false}
        >
          Back
        </Button>
      </Box>
    );
  }
}
 const styles={
    button:{
    margin:15 
      }
 };

export default FormPersonalDetails;
