import React from 'react'
import { NavLink } from 'react-router-dom'
import foxbelImg from '../assets/Foxbel-Music/foxbel-music.png'
import manWithMusic from '../assets/casual-life-3d-man-searching-music-with-phone.png'

const Landing = () => {
  return (
    <div className='w-full text-white bg-[#ECECEC] h-screen flex items-center justify-center max-w-[1920px] mx-auto'> 
      <main className='overflow-hidden flex lg:w-3/4 lg:h-3/4 rounded-[30px] bg-[#222222]'>
        <div className='w-2/4 px-8 bg-[#222222] flex flex-col gap-3 justify-center items-center h-full'>
          <figure className='flex justify-center mb-1'>
              <img src={ foxbelImg } alt="foxbel_logo" 
                  className='w-full'
                  />
          </figure>
          <div className='px-5'>
            <p className='text-justify text-base'>En foxbel podrás listar y seguir tus canciones y artistas favoritos, además de escuchar tu musica cuando y donde quieras.</p>
          </div>
          <div className='flex justify-start w-full px-4 mt-4'>
              <NavLink to={'/recent'} 
                    className='py-2 px-3 bg-red-500 rounded-lg font-medium hover:scale-105 transition-all '>
                      Descubre más
              </NavLink>
          </div>
      </div>

      <div className='w-2/4 bg-[#181818] h-full rounded-l-[30px]'>
        <figure className='w-full h-screen'>
            <img src={ manWithMusic } alt={ `${manWithMusic}`} 
              className='w-full' />
        </figure>
      </div>
      </main>
      
    </div>
  )
}

export default Landing