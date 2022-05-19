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
    marginLeft: theme.spacing(10),

  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
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
        <Typography variant="h6">
         #Sofware_Project#
        </Typography>
            <div >
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
