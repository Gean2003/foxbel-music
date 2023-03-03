import React from 'react'
import { NavLink } from 'react-router-dom'
import foxbelImg from '../assets/Foxbel-Music/foxbel-music.png'

const SideBar = () => {
  return (
    <section className='hidden  lg:w-1/5 lg:inline-block h-screen bg-red-principal py-0'>
      <figure className='w-full py-8 flex justify-center'>
        <img src={foxbelImg} alt="foxbel-image"
          className='w-3/4'
        />
      </figure>
      <div className='px-9 relative'>
        <h3 className='my-1 text-gray-200 font-medium text-[18px]'>Mi Librería</h3>
        <ul className='text-gray-300 font-normal flex flex-col gap-[6px] text-[15px]'>
          <li className='cursor-pointer lg:hover:scale-105 transition-all '> <NavLink to='/recent' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Recientes</p> </NavLink> </li>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/artist' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Artistas</p> </NavLink> </li>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/#' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Álbum</p> </NavLink></li>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/#' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Canciones</p> </NavLink></li>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/#' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Estaciones</p> </NavLink></li>
        </ul>
      </div>
      <div className='px-9 my-6 relative'>
        <h3 className='my-1 text-gray-200 font-medium text-[18px]'>Playlist</h3>
        <ul className='text-gray-300 font-normal flex flex-col gap-[6px] text-[15px]'>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/#' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Metal</p> </NavLink></li>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/#' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Para Bailar</p> </NavLink></li>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/#' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Rock 90s</p> </NavLink></li>
          <li className='cursor-pointer lg:hover:scale-105 transition-all'><NavLink to='/#' className={ ({isActive}) => isActive ? 'text-red-400' : 'text-white transition-all '}> <p className='lg:hover:text-red-400'>Baladas</p> </NavLink></li>
        </ul>
      </div>
    </section>
  )
}

export default SideBar