import React from 'react'
import Typography from "@material-ui/core/Typography";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { alpha, makeStyles } from '@material-ui/core/styles';

const Navbar = () => {

  return (
    <div >
        <AppBar position="static">
          <Toolbar>
            <IconButton edge='start' color='inherit'>
              <MenuIcon />
              </IconButton>
          <Typography variant="h6" noWrap>PixaBay Image Finder</Typography>
          </Toolbar>
          
        </AppBar>
    </div>
  )
}

export default Navbar; 