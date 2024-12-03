import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6">Stay in Style</Typography>
        <Box>
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Iniciar Sesión</Button>
          <Button color="inherit">Registrarse</Button>
          <Button color="inherit">Carrito</Button>
          <Button color="inherit">Categorías</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;