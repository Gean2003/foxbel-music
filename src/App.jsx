import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Recent from './pages/Recent'
import HomeLayout from './components/HomeLayout'

function App() {
  
  return (
    <div className='h-screen max-w-[1920px] mx-auto'>
      <Routes>
          <Route path='/' element={ <Landing /> } />

          <Route element={ <HomeLayout /> } >
                <Route path='/recent' element={ <Recent /> } />
                <Route path='/artist' element={ <h1>In progress</h1> } />
          </Route>
      </Routes>
    </div>
  )
}

export default App
