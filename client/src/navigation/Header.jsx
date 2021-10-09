import React, {useEffect, useState} from 'react';
import { makeStyles } from "@material-ui/styles";
import SortIcon from "@material-ui/icons/Sort";
import  { Link } from 'react-router-dom';
import { CssBaseline, useScrollTrigger } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';

import {
    AppBar,
    IconButton,
    Toolbar,
    Collapse,
    Menu,
    MenuItem,
    Button
  } from "@material-ui/core";

  const Header = (props) => {
    const trigger = useScrollTrigger();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState("");
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    const [checked, setChecked] = useState(false);
    useEffect(() => {
      setChecked(true);
    }, []);
  return (
    
    <React.Fragment>
      <CssBaseline />
      <Slide appear={false} direction={'down'} in={!trigger} 
        >       
         <div className={classes.root} id="header">

         <AppBar className={classes.appbar} elevation={0}>
         <Toolbar className={classes.appbarWrapper}>
          <Link to={"/"} style={{textDecoration:"none", color:"inherit"}}> 
          <h1 className={classes.appbarTitle}>
            Nora<span className={classes.colorText}>Bird.</span>
          </h1>
          </Link> 
           <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            //keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}  
            MenuListProps={{ 'aria-labelledby':'basic-button'}}        
          >
            <Link to={"/About"}>
               <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>

            <Link to={"/contact/sendEmail"}>
               <MenuItem onClick={handleClose}>Contact Us</MenuItem>
            </Link>
          </Menu>
          <div >
          <IconButton id="basic-button" onClick={handleClick}>
            <SortIcon className={classes.icon} />
          </IconButton>
         </div>  
        </Toolbar>
      </AppBar>
      </div>
      </Slide>
      </React.Fragment>
  )  

};

export default Header;


  const useStyles = makeStyles({
    root: {
      display:"flex",
    //  justifyContent:"flex-end",
      alignItems: "center",
      height: "20vh",
      position:"fixed",
    },
    appbar:{
      background:"none",
      backgroundColor:"transparent",

    },
    appbarWrapper: {
      width: '80%',
      margin: '0 auto',
      display:'flex',
      backgroundColor:"transparent",
     // justifyContent:"flex-end",
     justifyContent:"space-between"

      
    },
    appbarTitle: {
       flexGrow: '1',
       
    },
     icon: {
      color: "#fff",
      fontSize: "2rem"
    },
    colorText: {
      color: "#FF69B4"
    },
    container: {
      textAlign: "center"
    },
    title: {
      color: "#fff",
      fontSize: "4.5rem"
    },
  
    formControl: {
      minWidth: 100
    }
  });


