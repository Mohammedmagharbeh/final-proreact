import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CardMedia } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm'; // تأكد من أن المسار صحيح
import { Helmet } from 'react-helmet';

const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_KEY'); // استبدل بـ Stripe Key الخاص بك

const Cart = ({ cartItems }) => {
  const totalItems = cartItems.length;
  
  return (
    <Box sx={{ padding: 2 }}>
        <Helmet>

        <title>Cart🛒</title> {/* تغيير عنوان الصفحة هنا */}

        </Helmet>

      <Typography variant="h4" component="div" gutterBottom>
        
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          
          <img src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif'></img>
        </Typography>
      ) : (
        <>
          <Grid container spacing={2}>
            {cartItems.map((item, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={item.title}
                    height=""
                    image={item.image} // عرض الصورة التي تم تحديدها
                  />
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h6" component="div" gutterBottom>
              
            </Typography>
            <Elements stripe={stripePromise}>
              <CheckoutForm totalItems={totalItems} /> {/* تمرير عدد القطع إلى نموذج الدفع */}
            </Elements>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
