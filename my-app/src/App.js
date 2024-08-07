import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './component/home';
import MEN from './component/men';
import Girl from './component/Gril';
import ProductDetails from './component/product.men';
import Cart from './component/cart';
import './App.css';
import AppBar from '@mui/material/AppBar';
import { Typography, Box, Toolbar, IconButton, Badge, Tooltip } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const handleStoreLocationClick = () => {
    const storeLocationUrl = 'https://maps.app.goo.gl/uVisWzRJk6edMVDm7';
    window.open(storeLocationUrl, '_blank');
  };

  return (
    <BrowserRouter>
      <AppBar position="static" color="default">
        <Toolbar sx={{ position: 'relative', justifyContent: 'center', height: 120, backgroundColor: '#DC143C' }}>
          <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                marginTop: 5,
                fontFamily: 'Amiri, serif',
                fontWeight: 500,
                lineHeight: 1.6,
                color: '#333',
                textAlign: 'center',
                padding: '20px',
                marginTop: '20px',
                borderRadius: '10px',
                textAlign: 'inherit',
                fontSize: 'xx-large'
              }}
            >
              <b><i>Eternity Watches</i></b>
            </Typography>
          </Box>
          
          <Box sx={{ position: 'absolute', right: 20 }}>
            <Tooltip title="موقع المتجر">
              <IconButton color="inherit" onClick={handleStoreLocationClick}>
                <LocationOnIcon />
              </IconButton>
            </Tooltip>
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon className="bounce-icon" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<MEN />} />
        <Route path="/Girl" element={<Girl />} />
        <Route path="/product/:productId" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
