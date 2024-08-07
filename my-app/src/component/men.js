import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import '../App.css';

const products = [
  {
    id: 1,
    image: 'moh1.avif',
    title: 'CURREN WATCH',
    description: 'ساعة كيورين كستك جلد ',
    price: '16jd',
    details: 'waterproof',
    
  },
  {
    id: 2,
    image: 'curemet1.webp',
    title: 'CURREN WATCH',
    description: 'ساعة كيورين كستك معدن ',
    price: '18jd',
    details: 'waterproof',
  },
  {
    id: 3,
    image: 'bab1.jpg',
    title: 'CURREN WATCH',
    description: '  ساعة كيورين كستك جلد بتصميم رياضي',
    price: '17jd',
    details: 'waterproof',
  },
  {
    
        id: 4,
        image: 'c10.jpg',
        title: 'CURREN WATCH',
        description: 'ساعة كيورين كستك معدن ',
        price: '18jd',
        details: 'waterproof',
      
  },
  {
    id: 5,
    image: 'men3.jpg',
    title: 'HUGO BOSS',
    description: 'ساعة هوجو بوس ',
    price: '380jd',
    details: 'waterproof,Elegnat design',
  },
  {
    id: 6,
    image: 'men4.jpg',
    title: 'HUGO BOSS',
    description: ' ساعة هوجو بوس  كستك جلد',
    price: '400jd',
    details: 'waterproof,Elegnat design',
  },
  {
    id: 7,
    image: 'boss7.webp',
    title: 'HUGO BOSS',
    description: 'ساعة هوجو بوس كسكتك معدن',
    price: '420jd',
    details: 'Gold plated',
  },
  {
    id: 8,
    image: 'bomo.jpg',
    title: 'HUGO BOSS',
    description: 'ساعة هوجو بوس كسكتك معدن',
    price: '200jd',
    details: 'waterproof',
  },
  


];



const ProductCard = ({ product }) => (
  <Card>
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <CardMedia
        component="img"
        alt={product.title}
        height="300"
        image={product.image}
        title={product.title}
      />
    </Link>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {product.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.details}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.shipping}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.supplier}
      </Typography>
    </CardContent>
    <CardActions>
      {/* <Button size="small" color="primary">Add to cart</Button> */}
      {/* <Button size="small" color="primary">الدردشة الآن</Button> */}
    </CardActions>
  </Card>
);

const ProductGrid = () => (
  <Grid container spacing={3}>
    {products.map((product, index) => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <ProductCard product={product} />
      </Grid>
    ))}
  </Grid>
);

function MEN() {
  return (
    <>
      <div style={{ padding: 20 }}>
        <Helmet>
        <title>MEN watch🧔🏻‍♂️</title> {/* تغيير عنوان الصفحة هنا */}

        </Helmet>
        <ProductGrid />
      </div>
    </>
  );
}

export default MEN;
