import React from 'react';
import { Button, Box, Typography, TextField, Grid, Container } from '@mui/material';

const CheckoutForm = ({ totalItems }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // هنا يمكنك إضافة منطق معالجة الدفع
    console.log("Form submitted");
    alert('تم معالجة الدفع بنجاح. سوف يتم التواصل معك في أقرب وقت.');
  };

  return (
    <Container>
      
      <Box 
        component="form" 
        onSubmit={handleSubmit} 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: 2, 
          width: 400, // عرض النموذج
          padding: 3, // تباعد داخلي
          border: '1px solid #ddd', // حدود خفيفة
          borderRadius: '8px', // زوايا مستديرة
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // تأثير ظل خفيف
          margin: 'auto', // توسيط النموذج
          backgroundColor: 'lightgray', 
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          تفاصيل الدفع
        </Typography>
        
        <Typography variant="body1" component="div" gutterBottom>
          عدد القطع: {totalItems}
        </Typography>

        <TextField 
          label="رقم الهاتف" 
          variant="outlined" 
          type='tel'
          fullWidth
          sx={{ marginBottom: 2 }}
        />
        
        <TextField
          fullWidth
          label="رقم البطاقة"
          placeholder="4111 1111 1111 1111"
          required
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="تاريخ انتهاء الصلاحية"
              placeholder="12/24"
              required
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="اسم حامل البطاقة"
              placeholder="John Doe"
              required
              variant="outlined"
            />
             <TextField
              fullWidth
              label="مكان الاقامة"
              placeholder="John Doe"
              required
              variant="outlined"
            />
          </Grid>
        </Grid>
        
        <TextField
          fullWidth
          label="المبلغ"
          placeholder="100.00"
          required
          variant="outlined"
          sx={{ marginBottom: 2 }}
        />
        
        <Button 
          type="submit" 
        //   variant="blue" 
          
          sx={{color:'black',backgroundColor:'#DC143C',fontSize:'larger'}}
           
        >
          دفع
        </Button>
      </Box>
    </Container>
  );
};

export default CheckoutForm;
