import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div>
          <h3>SOBRE NOSOTROS</h3>
          <p>¿Quiénes somos?</p>
          <p>¿Qué es Stay in Style?</p>
        </div>
        <div>
          <h3>NUESTRAS CATEGORÍAS</h3>
          <p>Hombre</p>
          <p>Mujeres</p>
        </div>
        <div>
          <h3>SÍGUENOS</h3>
          <p>Facebook | Instagram | TikTok</p>
        </div>
      </div>
      <p style={{ textAlign: 'center', marginTop: '20px' }}>© 2024 Stay in Style</p>
    </footer>
  );
};

export default Footer;


