import React from 'react'
import { Box, Typography , Button, Toolbar, IconButton, AppBar,Stack,Avatar,TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import imggithub01 from '../views/imggithub01.png'
import imginstagram01 from '../views/imginstagram01.png'
import imgteerawut from '../views/imgteerawut.jpg'
import imgteerawut02 from '../views/imgteerawut02.jpg'

function WorkUI() {
  return (
    <>
      <Box sx={{ bgcolor: 'black',height:'100vh' }}>
                <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', py: 6, px:2 , gap: 4, left:'-1684px3', mx: 'auto',position: 'static',backgroundColor:'black'}}>
                  <Box sx={{ flex: 0.5 }}>
                  <Typography variant="h2" sx={{ fontWeight: 'bold' ,color:'white',width:'500px',}}>MY EXPERIENCE</Typography>
                  </Box>
                  <Box>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', width: 650, lineHeightStep: 2, mt: 2 }}>
                      ข้าราชการทหารเรือ</Typography>
                    <Typography variant="h5" sx={{ color: 'gray', width: 650, lineHeightStep: 2, mt: 1 }}>
                      เป็นข้าราชการชั้นยศ จ่าเอก ทำในสายงานจำพวกช่าง ในกองโรงงานที่เป็นศูนย์บริการชั้น1ของกองทัพเรือ เป็น เจ้าหน้าที่พัสดุ และ ช่างซ่อมระบบไฟฟ้ารถยนต์ ตรวจสอบระบบไฟฟ้ารถยนต์ สั่งอะไหล่ และ ตรวจสอบรับอะไหล่ </Typography>
      
                      <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white', width: 650, lineHeightStep: 2, mt: 2 }}>
                      TOYOTA</Typography>
                    <Typography variant="h5" sx={{ color: 'gray', width: 650, lineHeightStep: 2, mt: 1 }}>
                      เป็นนักเรียนทุนของ ทร. ให้ไปศึกษาที่มหาวิทยาลัย เทคโนโลยีโตโยต้า และได้มีโอกาสไปทำงานที่ ศูนย์บริการโตโยต้าTBN ช่างซ่อมบำรุงรถยนต์ เช็คระยะรถยนต์ ช่างระดับ1 ช่างระดับ2 </Typography>                          
                  </Box>
               </Box>                     
              </Box>
    </>
  )
}

export default WorkUI