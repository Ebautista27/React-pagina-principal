import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const Home = () => {
  // Base para las rutas
  const baseImagePath = '/images/';
  const baseVideoPath = '/videos/';

  const productos = [
    { nombre: 'Chaqueta cargo 610', precio: '110.000 mil pesos', img: `imagenes/chaqueta_cargo_610.jpg` },
    { nombre: 'Chaqueta ovejera blanca', precio: '105.000 mil pesos', img: `imagenes/chaqueta_ovejera_blanca.jpeg` },
    { nombre: 'Camiseta choize', precio: '90.000 mil pesos', img: `imagenes/camiseta choize.jpeg` },
    { nombre: 'Camiseta boxy fit', precio: '100.000 mil pesos', img: `imagenes/camiseta bbs.jpeg` },
  ];

  const videos = [
    { img: `${baseImagePath}prenda_video.jpeg`, video: `${baseVideoPath}video_principal.mp4` },
  ];

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
      {/* Productos destacados */}
      <Typography variant="h4" gutterBottom textAlign="center">
        Prendas destacadas
      </Typography>
      <Grid container spacing={2}>
        {productos.map((producto, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box sx={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '8px' }}>
              <img src={producto.img} alt={producto.nombre} style={{ width: '100%', borderRadius: '8px' }} />
              <Typography variant="h6">{producto.nombre}</Typography>
              <Typography variant="body1">{producto.precio}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Imagen y Video alineados */}
      <Typography variant="h5" sx={{ marginTop: '20px', textAlign: 'center' }}>
        Imagen y Video
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ marginTop: '20px' }}>
        {/* Imagen a la izquierda */}
        <Grid item xs={12} sm={6} md={5}>
          <Box sx={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '8px' }}>
            <img
              src={`${baseImagePath}prenda_video.jpeg`}
              alt="Chaqueta principal"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Box>
        </Grid>

        {/* Video a la derecha */}
        <Grid item xs={12} sm={6} md={5}>
          <Box sx={{ textAlign: 'center', padding: '10px', backgroundColor: 'white', borderRadius: '8px' }}>
            <video controls style={{ width: '100%' }}>
              <source src={`${baseVideoPath}video_principal.mp4`} type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
