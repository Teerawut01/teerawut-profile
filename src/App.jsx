import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeUI from './views/HomeUI'
import WorkUI from './views/WorkUI'
import AboutUI from './views/AboutUI'
import ContactUI from './views/ContactUI'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <HomeUI/>}  />
          <Route path='/work' element={ <WorkUI/>}  />
          <Route path='/about' element={ <AboutUI/>}  />
          <Route path='/contact' element={ <ContactUI/>}  />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App