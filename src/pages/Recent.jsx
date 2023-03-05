import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import RecentList from '../components/RecentList'
import Search from '../components/Search'
import Header from '../header/Header'
import useMusic from '../hooks/useMusic'
import  endpoint from '../utils/APIRoutes'

const Recent = ({data, src, setSrc, audioElement}) => {

  const [isLoading, setisLoading] = useState(true)
  const [isOpen, setisOpen] = useState(false)

  return (
    <div  className='mx-auto max-w-[1920px] lg:w-full lg:h-screen lg:pb-[100px] lg:overflow-auto'>
      <Search />
    <Header />

    <div className='w-full h-auto flex-wrap'>
      <div className='w-full h-auto flex gap-7 flex-wrap  justify-center '>
      {
        data?.map( info => (
            <RecentList key={info.id}
                        info={info}
                        audioElement={audioElement}
                        setSrc={setSrc}
                        src={src} 
                         /> 
        ))
      }
      </div>
        <h3>Resultados</h3>
    </div>
    </div>
  )
}

export default Recent
