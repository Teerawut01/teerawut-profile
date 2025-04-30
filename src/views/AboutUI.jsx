import React from 'react'
import { Box, Typography , Button, Toolbar, IconButton, AppBar,Stack,Avatar,TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import imggithub01 from '../views/imggithub01.png'
import imginstagram01 from '../views/imginstagram01.png'
import imgteerawut from '../views/imgteerawut.jpg'
import imgteerawut02 from '../views/imgteerawut02.jpg'


function AboutUI() {
  return (    
    <>
      <Box >
                <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', py: 6, px:2 , gap: 4, left:'-1684px3', mx: 'auto',position: 'static',backgroundColor:'black'}}>
                  <Box sx={{ flex: 0.5 }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold' ,color:'white',width:'500px',}}>ABOUT ME</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', width: 650, lineHeightStep: 2, mt: 2 }}>
                      ผมมีความรู้พื้นฐานในด้านต่าง ๆ เช่น การออกแบบเว็บไซต์ พัฒนาเว็บแอปพลิเคชัน และการเขียนโปรแกรมด้วยภาษา HTML, CSS, JavaScript และ React.js</Typography>
                    <Typography variant="h5" sx={{ color: 'gray', width: 650, lineHeightStep: 2, mt: 1 }}>
                      ชอบให้ความสำคัญกับการเข้าถึง (accessiblity) เมื่อพัฒนาเว็บไซต์ มีความระตือรือร้นและอยากรู้อยากเห็นเกี่ยวกับการแก้ไขปัญหาต่างๆ ปัจจุบันกำลังศึกษาเรียนรู้เกี่ยวกับ React.js และการออกแบบเว็บไซต์ ผมชอบดูหนัง ออกกำลังกาย และ อ่านหนังสือ กำลังเรียนรู้เพิ่มเติมเพื่อพัฒนาทักษะอยู่เสมอ</Typography>
                      <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
                      <Button href="https://github.com/Teerawut01" variant='contained' sx={{ bgcolor: '#CD9B1D', color: 'black'}}>Download Resume ●</Button>
                      <Avatar sx={{width:50,height:50}} src={imggithub01}/>
                      <Avatar sx={{width:50,height:50}} src={imginstagram01}/>
                    </Stack>           
                  </Box>
               </Box>
               <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', py: 6, px:2 , gap: 4, left:'-1684px3', mx: 'auto',position: 'static',backgroundColor:'black'}}>
                <Avatar src={imgteerawut02} sx={{width:500,height:500,mx:'auto' }} />
               </Box>              
              </Box>
    </>
  )
}

export default AboutUI