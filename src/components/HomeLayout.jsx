import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../nav/SideBar'
import PlayCard from '../components/PlayCard'

const HomeLayout = () => {
  return (
    <div className='w-full lg:flex relative h-screen max-w-[1920px] mx-auto'>
        <SideBar />
        <div className='w-4/5 h-screen'>
            <Outlet />
        </div>
        <PlayCard />
    </div>
  )
}

export default HomeLayout