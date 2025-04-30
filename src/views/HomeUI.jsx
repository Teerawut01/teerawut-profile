import React from 'react'
import { Box, Typography , Button, Toolbar, IconButton, AppBar,Stack,Avatar,TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import imggithub01 from '../views/imggithub01.png'
import imginstagram01 from '../views/imginstagram01.png'
import imgteerawut from '../views/imgteerawut.jpg'
import imgteerawut02 from '../views/imgteerawut02.jpg'


function HomeUI() {
  return (
    <>
      <Box sx={{width: '1496px',height:'3110px',top:'-825pxpx',bottom:'24px', left:'-1684px3', mx: 'auto',position: 'static',backgroundColor:'black', }}>

        {/* bar */}
        <AppBar sx={{width: '1,496px',height: '96px', top:'24px', right:'60px', bottom:'24px', left:'60px',justufy: 'space-between',mx: 'auto',position: 'static',backgroundColor:'black',}}>
          <Toolbar>         
            <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'bold' }}>
                TEERAWUT  PROMSIRI
              </Typography>
              <Button vaeiant="text" component={Link} to="/work" color="inherit" sx={{color:'white'}}><Typography>Work</Typography></Button>
              <Button vaeiant="text" component={Link} to="/about" color="inherit" sx={{color:'white'}}><Typography>About</Typography></Button>
              <Button vaeiant="text" component={Link} to="/contact" color="inherit" sx={{color:'white'}}><Typography>Contact</Typography></Button>
          </Toolbar>
        </AppBar>

        <Box sx={{width:'1496px',height:5,backgroundColor:'#cb93ca',}}/>

        {/* Section */}
        <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', py: 6, px:2 , gap: 4, left:'-1684px3', mx: 'auto',position: 'static',backgroundColor:'black'}}>
          <Box sx={{ flex: 0.8 }}> 
            <Typography variant="h2" component="div" sx={{ fontWeight:'bold', mt: 2, color:'white'}}>HI,I  AM</Typography>
            <Typography variant="h2" component="div" sx={{  fontWeight:'bold', mt: 2, color:'white' }}>TEERAWUT P.</Typography>
            <Typography variant="h5" component="div" sx={{ width: 650, lineHeightStep: 2, color: 'gray', mt: 1  }}>นักศึกษาพัฒนาเว็บไซต์จากมหาวิทยาลัยเอเซียอคาเนย์
              ที่มีความหลงไหลในการสร้างเว็บไซต์ที่เข้าถึงได้และเป็นมิตรกับผู้ใช้</Typography>
            <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
              <Button href="https://github.com/Teerawut01" variant='contained' sx={{ bgcolor: '#CD9B1D', color: 'black'}}>Contained me ●</Button>
              <Avatar sx={{width:50,height:50}} src={imggithub01}/>
              <Avatar sx={{width:50,height:50}} src={imginstagram01}/>
            </Stack>
          </Box>        
          <Avatar src={imgteerawut} sx={{width:300,height:300 }} />                       
        </Box>

        <Box sx={{width:'1496px',height:5,backgroundColor:'#cb93ca',}}/>

        {/* About*/}
        <Box>
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

        <Box sx={{width:'1496px',height:5,backgroundColor:'#cb93ca',}}/>

        {/* Capabilities */}
        <Box>
          <Box sx={{display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'center', py: 6, px:2 , gap: 4, left:'-1684px3', mx: 'auto',position: 'static',backgroundColor:'black'}}>
            <Box sx={{ flex: 0.2 }}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' ,color:'white',width:'600px',mx:1}}>MY CAPABILITIES</Typography>
            </Box>
            <Box>
              
              <Typography variant="h5" sx={{ color: 'gray', width: 750, lineHeightStep: 2, mt: 1,my: 2 }}>
              ผมมองหาโอกาสในการเพิ่มทักษะใหม่ๆอยู่เสมอ ทั้งการพัฒนาฟรอนท์เอนด์ แบล็กเอนด์ การออกแบบ UX/UI</Typography>
                <Stack spacing={2} direction="row" sx={{ mt: 2 }}>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white',borderRadius:5 }}>HTML</Button>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white',borderRadius:5 }}>CSS</Button>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white',borderRadius:5 }}>JavaScript</Button>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white',borderRadius:5 }}>React</Button>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white',borderRadius:5 }}>IoT</Button>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white',borderRadius:5 }}>DATABASE</Button>
                <Button variant="outlined" sx={{ color: 'white', borderColor: 'white',borderRadius:5 }}>FLUTER</Button>
              </Stack>           
            </Box>
         </Box>                      
        </Box>

        <Box sx={{width:'1496px',height:5,backgroundColor:'#cb93ca',}}/>

        {/* Experience*/}
        <Box>
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

        <Box sx={{width:'1496px',height:5,backgroundColor:'#cb93ca',}}/>

        {/* Contact*/}
        <Box>
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
          </Box>
          <Button variant="contained" sx={{ my:1,mx:140 , bgcolor: '#CD9B1D', color: 'black' }}>Submit</Button>                              
        </Box>
        <Box component="footer" sx={{ textAlign: 'center', color: '#9ca3af', p: 2, fontSize: '12px' }}>
        © 2025 TEERAWUT  PROMSIRI
      </Box>
        <Box sx={{width:'1496px',height:5,backgroundColor:'#cb93ca',my:6}}/>

        
      </Box>
    </> 
  )
}

export default HomeUI