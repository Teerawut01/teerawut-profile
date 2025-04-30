import React from 'react'
import { Box, Typography , Button, Toolbar, IconButton, AppBar,Stack,Avatar,TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import imggithub01 from '../views/imggithub01.png'
import imginstagram01 from '../views/imginstagram01.png'
import imgteerawut from '../views/imgteerawut.jpg'
import imgteerawut02 from '../views/imgteerawut02.jpg'

function ContactUI() {
  return (
    <>
      <Box sx={{bgcolor:'black'}}>
                <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', py: 6, px:2 , gap: 4, left:'-1684px3', mx: 'auto',position: 'static',backgroundColor:'black'}}>
                  <Box sx={{ flex: 0.8 }}> 
                    <Typography variant="h2" component="div" sx={{ fontWeight:'bold', mt: 4, color:'white'}}>LET'S CONNECT</Typography>
                    <Typography variant="h5" component="div" sx={{ width: 500, lineHeightStep: 2, color: 'gray', mt: 1  }}>Say hello! at s6619m10019@sau.ac.th For more info,here's my reaume</Typography>
                    <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
                      <Button href="https://github.com/Teerawut01" variant='contained' sx={{ bgcolor: '#CD9B1D', color: 'black'}}>Contained me ●</Button>
                      <Avatar sx={{width:50,height:50}} src={imggithub01}/>
                      <Avatar sx={{width:50,height:50}} src={imginstagram01}/>
                    </Stack>
                  </Box>
                  <Box sx={{mt:4}}>
                   <Typography variant="" component="div" sx={{ fontWeight:'bold', mt: 4, color:'white'}}>Name</Typography>    
                  <TextField label="" variant="outlined" sx={{width:500,backgroundColor:'#1f2937',color:'white'}} />
                  <Typography variant="" component="div" sx={{ fontWeight:'bold', mt: 4, color:'white'}}>Email</Typography>    
                  <TextField label="" variant="outlined" sx={{width:500,backgroundColor:'#1f2937',color:'white'}} />
                  <Typography variant="" component="div" sx={{ fontWeight:'bold', mt: 4, color:'white'}}>Message</Typography>    
                  <TextField label="" variant="outlined" multiline rows={12} sx={{width:500,height:300,backgroundColor:'#1f2937',color:'white'}} />           
                  </Box>                                 
                </Box >
                <Button variant="contained" sx={{ my:1,mx:140 , bgcolor: '#CD9B1D', color: 'black' }}>Submit</Button>                              
              </Box>
    </>
  )
}

export default ContactUI