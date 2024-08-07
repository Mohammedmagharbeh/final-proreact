const products = [
    {
      id: 10,
      image: '/',
      images: ['.jpg', '/moh2.jpg', '/curen6.jpg'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك جلد ',
      price: '16jd',
      details: 'waterproof',
      
    },
    {
      id: 11,
      image: '/1.webp',
      images: ['/gold1.jpeg', '/gold2.jpeg', '/gold3.jpeg'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك معدن ',
      price: '18jd',
      details: 'waterproof',
      
    },
    {id: 12,
      image: '/.jpg',
      images: ['/bab2.jpg', '/bab3.webp'], // أضف الصور الإضافية هنا
      title: 'CURREN WATCH',
      description: 'ساعة كيورين كستك معدن ',
      price: '18jd',
      details: 'waterproof'},
      {id: 13,
        image: '/jpg',
        images: ['/bobo2.jpg', '/bobo3.jpg'], // أضف الصور الإضافية هنا
        title: 'CURREN WATCH',
        description: 'ساعة كيورين كستك معدن ',
        price: '18jd',
        details: 'waterproof'},
        {id: 14,
          image: '/pg',
          images: ['/rub1.webp', '/rub2.webp'], // أضف الصور الإضافية هنا
          title: 'CURREN WATCH',
          description: 'ساعة كيورين كستك معدن ',
          price: '18jd',
          details: 'waterproof'},
          {id: 15,
            image: '/webp',
            images: ['/gogo2.webp', '/gogo4.webp'], // أضف الصور الإضافية هنا
            title: 'CURREN WATCH',
            description: 'ساعة كيورين كستك معدن ',
            price: '18jd',
            details: 'waterproof'},
    // باقي المنتجات...
  ];
  
  const Productgirl = () => {
    const { productId } = useParams();
    const producte = products.find(p => p.id === parseInt(productId));
  
    const [currentImage, setCurrentImage] = useState(producte?.image || '');
    
    if (!producte) {
      return <div>Product not found
        <img src=''></img>
      </div>;
    }
  
    return (
      <Card sx={{ display: 'flex', maxWidth: 900,marginLeft:10 }}>
        <Box sx={{ width: '100%' }}>
          <CardMedia
            component="img"
            alt={product.title}
            height="500"
            image={currentImage}
            title={product.title}
          />
        </Box>
        <Box sx={{ width: '30%', padding: 2, overflowY: 'auto' }}>
          <Grid container direction="column" spacing={2}>
            {producte.images.map((img, index) => (
              <Grid item key={index}>
                <CardMedia
                  component="img"
                  alt={`Thumbnail ${index}`}
                  image={img}
                  sx={{ 
                    width: '100%',
                    height: 'auto',
                    cursor: 'pointer',
                    border: '1px solid black',
                    borderRadius: '4px',
                    marginBottom: 1
                  }}
                  onClick={() => setCurrentImage(img)}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ padding: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {producte.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producte.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producte.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producte.details}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producte.shipping}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {producte.supplier}
            </Typography>
            <Button size="small" color="primary">بدء طلب الطلبية</Button>
            <Button size="small" color="primary">الاتصال بالمورد</Button>
            <Button size="small" color="primary">الدردشة الآن</Button>
          </CardContent>
        </Box>
      </Card>
    );
  };
  