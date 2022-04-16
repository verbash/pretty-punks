import React from "react"
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import './Links.css'

export default function Links() {
  return ( 
  <AppBar position="relative">
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
      <Link to="/" style={{ fontSize: '17px' }}>Home</Link>
      &nbsp;&nbsp;
      {/* <Link to="/about" style={{ fontSize: '17px' }}>About</Link>
      &nbsp;&nbsp; */}
      <Link to="/fan-art" style={{ fontSize: '17px' }}>Fan Art</Link>
      &nbsp;&nbsp;
      <a href="https://discord.gg/mVAvs3tebB" target="_blank" rel="noopener noreferrer nofollow" style={{ fontSize: '17px' }}>
           Discord
       </a>
       &nbsp;&nbsp;
       <a href="https://twitter.com/prettypunksclub" target="_blank" rel="noopener noreferrer nofollow" style={{ fontSize: '17px' }}>
           Twitter
       </a>
      </Typography>
    </Toolbar>
  </AppBar>
  )
};
