import React from "react";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { blue900 } from "material-ui/styles/colors";


const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(20),
    display: "flex"

  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(1),
    paddingLeft: theme.spacing(3),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solidwhite",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  
  return (
    <AppBar position="absolute" style={{ backgroundColor: blue900 }}>
      <CssBaseline />
      <Toolbar>
      <Typography variant="h5" style={{marginLeft:"10px"}}>
         Image Picker
        </Typography>
            <div  style={{marginLeft:"950px"}}>
            <Link to="/Home" className={classes.link}>
              Home
            </Link>
            </div>
            <Link to="/date" className={classes.link} >
              Date
            </Link>
            <Link to="/login" className={classes.link}>
              Logout
            </Link>
            
        
          
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
