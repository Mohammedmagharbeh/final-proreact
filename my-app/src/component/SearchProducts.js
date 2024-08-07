import React, { useState } from 'react';
import { TextField, Button, Grid, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const SearchProducts = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div style={{ padding: '20px' }}>
      <TextField
        label="ابحث عن منتج"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginBottom: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSearch}
        style={{ marginBottom: '20px' }}
      >
        بحث
      </Button>

      {searchResults.length > 0 ? (
        <Grid container spacing={2}>
          {searchResults.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
                      عرض التفاصيل
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" color="textSecondary">
          لا توجد نتائج مطابقة
        </Typography>
      )}
    </div>
  );
};

export default SearchProducts;
