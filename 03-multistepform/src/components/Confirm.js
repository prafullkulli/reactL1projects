import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';



export class Confirm extends Component {
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
    const { values:{ firstName, lastName, email,
        occupation, city, bio } } = this.props;
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
                    Confirm User Data
                </Typography>
          </Toolbar>
        </AppBar>
        <List  component="div" sx={{ flexGrow: 1 }}  >
            <ListItem disableGutters>
            <ListItemText primary="First Name" secondary={ firstName } />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Last Name" secondary={ lastName } />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Email" secondary={ email } />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Occupation" secondary={ occupation } />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="City" secondary={ city } />
            </ListItem>
            <ListItem disableGutters>
            <ListItemText primary="Bio" secondary={ bio } />
            </ListItem>
        </List>
        <br />
        <Button
          variant="contained"
          label="Confirm & Continue"
          size="large"
          onClick={this.continue}
        >
          Confirm & Continue
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

export default Confirm;
