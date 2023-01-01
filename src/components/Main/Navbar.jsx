import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <Link to="/"><Button variant='contained' style={{marginRight:"10px"}} color="inherit">Home</Button></Link>
          <Link to="/add"><Button variant='contained' color="inherit">Add</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Navbar