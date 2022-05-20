import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from '../Navbar/NavBar';
import Search from '../search/Search';
import '../css/bootstrap.css';
import {Helmet} from 'react-helmet';

export default function Home(){
        
        return (
          
 
          <MuiThemeProvider>
          
          <Helmet>
                  <style>{'body { background: AliceBlue ; }'}</style>
          </Helmet>
              
          
          <NavBar/> 
          
          <div className='container m-2'>
          <Search />
          </div>
        </MuiThemeProvider>
       
          
        );
}

