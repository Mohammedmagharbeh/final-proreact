import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import GirlIcon from '@mui/icons-material/Girl';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import EastIcon from '@mui/icons-material/East';
import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MEN from './men';
import Girl from './Gril';
import { Helmet } from 'react-helmet'; 
import { Icon } from '@mui/material';




const images1 = [
    { src: 'c5.webp', alt: 'Image 1' ,title:'curren' },
    { src: 'curen4.jpg', alt: 'Image 2' ,title:'curren'},
    { src: 'c7.webp', alt: 'Image 3' ,title:'curren' },
    { src: 'curen3.jpg', alt: 'Image 4' ,title:'curren' },

];

const images2 = [
    { src: 'men3.jpg', alt: 'Image 4',title:'curren' },
    { src: 'newbo.jpg', alt: 'Image 5',title:'curren' },
    { src: 'bomo.jpg', alt: 'Image 6',title:'curren' },
    { src: 'bomo1.webp', alt: 'Image 7' ,title:'curren' },

];
const images3 = [
    { src: 'zoo5.jpeg', alt: 'Image 4',title:'curren' },
    { src: 'dodo.1.jpeg', alt: 'Image 5',title:'curren' },
    { src: 'zoo3.jpeg', alt: 'Image 6',title:'curren' },
    { src: 'dodo.1.jpeg', alt: 'Image 7' ,title:'curren' },

];const images4 = [
    { src: 'vovo.jpeg', alt: 'Image 4',title:'curren' },
    { src: 'kokok.jpeg', alt: 'Image 5',title:'curren' },
    { src: 'boso1.jpeg  ', alt: 'Image 6',title:'curren' },
    { src: 'boso2.jpeg', alt: 'Image 7' ,title:'curren' },

];


function Home() {
    const navigate=useNavigate();
    const Girl=useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeMenu, setActiveMenu] = useState(null);
    const [showSearch, setShowSearch] = useState(false);

    const handlePopoverOpen = (event, menuName) => {
        setAnchorEl(event.currentTarget);
        setActiveMenu(menuName);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
        setActiveMenu(null);
    };

    const toggleSearch = () => {
        setShowSearch((prev) => !prev);
    };

    const handleClickAway = () => {
        setShowSearch(false);
    };
  
   
    
    const renderPopover = (menuName) => (
        <Popover
            id={`${menuName}-popover`}
            open={activeMenu === menuName}
            anchorEl={anchorEl}
            onClose={handlePopoverClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            PaperProps={{
                onMouseEnter: () => setActiveMenu(menuName),
                onMouseLeave: handlePopoverClose,
            }}
        >
            
            <Box p={2}>
                <Typography>{menuName}</Typography>
            </Box>
        </Popover>
    );
    

    return (
            
      
        <div>
            <Helmet>
                <title>Home</title> {/* تغيير عنوان الصفحة هنا */}
            </Helmet>
            {/* <AppBar position="static" color="default">
                <Toolbar sx={{ position: 'relative', justifyContent: 'center', height: 120, backgroundColor: '#DC143C' }}>
                    <Box sx={{ position: 'absolute', top: 0, right: '10px', display: 'flex', alignItems: 'center' }}>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 10 }}>
                                <IconButton onClick={toggleSearch}>
                                    <SearchIcon />
                                </IconButton>
                                {showSearch && (
                                    <TextField
                                        variant="outlined"
                                        placeholder="Search..."
                                        size="small"
                                        autoFocus
                                        sx={{ marginLeft: 1 }}
                                    />
                                )}
                            </Box>
                        </ClickAwayListener>
                    </Box>
                    <Box sx={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)' }}>
                        <Typography variant="h6" sx={{ flexGrow: 1, marginTop: 5,fontFamily:'Amiri, serif',fontWeight: 500, 
                         lineHeight: 1.6, 
                         color: '#333',  
                        textAlign: 'center', 
                        padding: '20px',
                        marginTop: '20px',
                        borderRadius: '10px',
                        textAlign:'inherit',
                        fontSize:'xx-large' }}>

                    <b><i>Eternity Watches</i></b> 
                    
                        </Typography>
                    
                    </Box>
                </Toolbar>
            </AppBar> */}
            <Box sx={{ textAlign: 'center', mt: 2 }}>
                <img src="mozo.jpeg" style={{ width: '1650px', maxHeight: '600px', objectFit: 'cover' }} />
            </Box>
            <Typography sx={{ fontFamily: 'Amiri, serif', 
        fontSize: '1.2rem', 
        fontWeight: 500, 
        lineHeight: 1.6, 
        color: '#333',
        textAlign: 'center', 
        padding: '20px',
        marginTop: '20px',
        borderRadius: '10px',
        textAlign:'inherit',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontSize:'xx-large'}}>
           <b> <i> "Watches are not just a tool for telling time, they are a symbol of elegance and distinction. The right result can emphasize your personality and add a touch of luxury to your look. Discover our historic collection of exquisite watches that combine classicism and technology."</i></b>
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', margin: '20px auto' }}>
                <Box sx={{ width: '400px' }}>
                    <Carousel
                        navButtonsAlwaysInvisible={true}  
                        indicatorContainerProps={{
                            style: {
                                marginTop: '10px',  
                                padding: '0',       
                            }
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                padding: '0',  
                            }
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                backgroundColor: '#000'  
                            }
                        }}
                        indicatorProps={{
                            style: {
                                backgroundColor: '#c4c4c4',  
                            }
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                boxShadow: 'none', 
                                borderBottom: 'none', 
                            },
                            '& img': {
                                borderBottom: 'none', 
                            }
                        }}
                    >
                        {images1.map((item, i) => (
                            <Paper key={i} sx={{ boxShadow: 'none', borderBottom: 'none' }}>
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderBottom: 'none' }} 
                                />
                            </Paper>
                        ))}
                    </Carousel>
                </Box>
                <Box sx={{ width: '400px' }}>
                    <Carousel
                        navButtonsAlwaysInvisible={true}  
                        indicatorContainerProps={{
                            style: {
                                marginTop: '10px', 
                                padding: '0', 
                            }
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                padding: '0',  
                            }
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                backgroundColor: '#000' 
                            }
                        }}
                        indicatorProps={{
                            style: {
                                backgroundColor: '#c4c4c4',  
                            }
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                boxShadow: 'none', 
                                borderBottom: 'none', 
                            },
                            '& img': {
                                borderBottom: 'none', 
                            }
                        }}
                    >
                        {images2.map((item, i) => (
                            <Paper key={i} sx={{ boxShadow: 'none', borderBottom: 'none' }}>
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderBottom: 'none' }} 
                                />
                            </Paper>
                        ))}
                    </Carousel>
                </Box>
            </Box>
            <Container>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="iframe"
                                src="vediocuu.mp4" // استبدل بـ URL الفيديو الخاص بك
                                title="Video"
                                sx={{ width: '100%', height: '350px', marginTop: 10 }}
                            />
                        </Card>
                        <Card sx={{ marginTop: 2, boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="curen1.jpg" // استبدل بـ URL الصورة الثانية
                                title="Curren"
                                sx={{ width: '100%', height: '450px', border: 'none', boxShadow: 'none' }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="curen2.jpg" // الصورة التي ترغب بإزالة إطارها
                                title="Curren"
                                sx={{ width: '100%', height: '400px', border: 'none', boxShadow: 'none', marginTop: 25 }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>

<Typography sx={{ fontFamily: 'Amiri, serif', 
        fontSize: '1.2rem', 
        fontWeight: 500, 
        lineHeight: 1.6, 
        color: '#333',
        textAlign: 'center', 
        padding: '20px',
        marginTop: '20px',
        borderRadius: '10px',
        textAlign:'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontSize:'xx-large'
        ,color:'#DC143C'}}>
         <b> <i>Hugo Boss watches combine elegance and precision in every moment.</i> </b>
           </Typography>

            <Container>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="iframe"
                                src="boss.mp4" // استبدل بـ URL الفيديو الخاص بك
                                title="Video"
                                sx={{ width: '100%', height: '350px', marginTop: 10 }}
                            />
                        </Card>
                        <Card sx={{ marginTop: 2, boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="nono.jpg" jhvuivlu
                                title="Hugo Boss"
                                sx={{ width: '100%', height: '450px', border: 'none', boxShadow: 'none' }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="boss1.jpg" // الصورة التي ترغب بإزالة إطارها
                                title="Hugo Boss"
                                sx={{ width: '100%', height: '400px', border: 'none', boxShadow: 'none', marginTop: 25 }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Typography sx={{ fontFamily: 'Amiri, serif', 
        fontSize: '1.2rem', 
        fontWeight: 500, 
        lineHeight: 1.6, 
        color: '#333',
        textAlign: 'center', 
        padding: '20px',
        marginTop: '20px',
        borderRadius: '10px',
        textAlign:'inherit',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontSize:'xx-large'}}>
          <b> <i> “Women's watches add a touch of luxury and elegance to every look, as the precision of the design meets the brilliance of luxurious materials to become a distinctive piece that reflects your good taste and adds a charming touch to your personal style.”</i></b>

            </Typography>
            <Container>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="iframe"
                                src="girlboss.mp4   
                                " // استبدل بـ URL الفيديو الخاص بك
                                title="Video"
                                sx={{ width: '100%', height: '350px', marginTop: 10 }}
                            />
                        </Card>
                        <Card sx={{ marginTop: 2, boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="bossgirl.webp" // استبدل بـ URL الصورة الثانية
                                title="Curren"
                                sx={{ width: '100%', height: '450px', border: 'none', boxShadow: 'none' }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="bossgirl2.webp" // الصورة التي ترغب بإزالة إطارها
                                title="Curren"
                                sx={{ width: '100%', height: '400px', border: 'none', boxShadow: 'none', marginTop: 25 }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
<Typography sx={{ fontFamily: 'Amiri, serif', 
        fontSize: '1.2rem', 
        fontWeight: 500, 
        lineHeight: 1.6, 
        color: '#333',
        textAlign: 'center', 
        padding: '20px',
        marginTop: '20px',
        borderRadius: '10px',
        textAlign:'inhert',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        fontSize:'xx-large'
        ,color:'#DC143C'}}>
  <b> <i>"Curren watches for girls combine elegance and fashion with precision performance to complement your daily look in a sophisticated and modern style.""</i></b>
</Typography>
        
<Container>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="iframe"
                                src="vidgirl.mp4     
                                " // استبدل بـ URL الفيديو الخاص بك
                                title="Video"
                                sx={{ width: '100%', height: '350px', marginTop: 10 }}
                            />
                        </Card>
                        <Card sx={{ marginTop: 2, boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="girlcuu.jpeg" // استبدل بـ URL الصورة الثانية
                                title="Curren"
                                sx={{ width: '100%', height: '450px', border: 'none', boxShadow: 'none' }}
                            />
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none' }}>
                            <CardMedia
                                component="img"
                                image="girlcuu.2jpeg.webp" // الصورة التي ترغب بإزالة إطارها
                                title="Curren"
                                sx={{ width: '100%', height: '400px', border: 'none', boxShadow: 'none', marginTop: 25 }}
                            />
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            <Box sx={{ width: '400px',marginLeft:100,marginTop:17}}>
                    <Carousel
                        navButtonsAlwaysInvisible={true}  
                        indicatorContainerProps={{
                            style: {
                                marginTop: '10px',  
                                padding: '0',       
                            }
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                padding: '0',  
                            }
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                backgroundColor: '#000'  
                            }
                        }}
                        indicatorProps={{
                            style: {
                                backgroundColor: '#c4c4c4',  
                            }
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                boxShadow: 'none', 
                                borderBottom: 'none', 
                            },
                            '& img': {
                                borderBottom: 'none', 
                            }
                        }}
                    >
                        {images3.map((item, i) => (
                            <Paper key={i} sx={{ boxShadow: 'none', borderBottom: 'none' }}>
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderBottom: 'none' }} 
                                />
                            </Paper>
                        ))}
                    </Carousel>
                </Box>
                <Box sx={{ width: '400px',marginLeft:47,marginTop:-55 }}>
                    <Carousel
                        navButtonsAlwaysInvisible={true}  
                        indicatorContainerProps={{
                            style: {
                                marginTop: '10px',  
                                padding: '0',       
                            }
                        }}
                        indicatorIconButtonProps={{
                            style: {
                                padding: '0',  
                            }
                        }}
                        activeIndicatorIconButtonProps={{
                            style: {
                                backgroundColor: '#000'  
                            }
                        }}
                        indicatorProps={{
                            style: {
                                backgroundColor: '#c4c4c4',  
                            }
                        }}
                        sx={{
                            '& .MuiPaper-root': {
                                boxShadow: 'none', 
                                borderBottom: 'none', 
                            },
                            '& img': {
                                borderBottom: 'none', 
                            }
                        }}
                    >
                        {images4.map((item, i) => (
                            <Paper key={i} sx={{ boxShadow: 'none', borderBottom: 'none' }}>
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    style={{ width: '100%', height: '400px', objectFit: 'cover', borderBottom: 'none' }} 
                                />
                            </Paper>
                        ))}
                    </Carousel>
                </Box>
                <Typography
  sx={{
    fontFamily: 'Amiri, serif',
    fontWeight: 1000,
    fontSize: '60px', 
    lineHeight: 1.6,
    color: '#DC143C',
    textAlign: 'center', 
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    marginLeft: 49,
    position: 'relative',
    display: 'inline-block',
    
  }}
>
  A NEW LOOK FOR YOUR<br />
  <span style={{ display: 'block', fontSize: 'inherit' }}>WATCH</span>
</Typography>

<Typography
  sx={{
    fontFamily: 'Amiri, serif',
    fontWeight: 1000,
    fontSize: '60px', 
    lineHeight: 1.6,
    color: 'black',
    textAlign: 'center', 
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    marginLeft: 7,
    position: 'relative',
    display: 'inline-block',
  }}
>
"Choose the watch that suits you and enjoy the shopping experience in our store
<br />
  <span style={{ display: 'block', fontSize: 'inherit' }}>Welcome"</span>
</Typography>
<Button sx={{color:'black',backgroundColor:'#DC143C',marginLeft:80,marginBottom:-7}} onClick={()=>{Girl('/Girl')}}><KeyboardBackspaceIcon/> FOR WOMEN</Button>

<Button sx={{marginLeft:110,color:'black',backgroundColor:'#DC143C'}}
 onClick={() => navigate('./men')}><EastIcon/> FOR MEN</Button>


</div>
        
            
    
    );
}
export default Home;
