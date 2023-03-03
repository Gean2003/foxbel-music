import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import useMusic from '../hooks/useMusic';

const RecentList = ({info, audioElement, setSrc, src}) => {
  const [isPaused, setIsPaused] = useState(true)
  const buttonElement = useRef()
  const { setSongs, setIsPlaying, setCurrentData} = useMusic()

  useEffect(() => {
    if (isPaused) {
      buttonElement.current.innerText = 'play'
      audioElement.current.pause()
    } else {
      buttonElement.current.innerText = 'pause'
      audioElement.current.play()
    }

  }, [isPaused])

  useEffect(() => {
    if (src != info.preview) {
      buttonElement.current.innerText = 'play'
    } else {
      buttonElement.current.innerText = 'pause'
      audioElement.current.play()
    }
  }, [src])

  const handlePlay = (src) => {
    setIsPaused(!isPaused)
    setCurrentData({audioElement, buttonElement})
    setIsPlaying(isPaused)
    setSrc(src.preview)
    setSongs(src)
  }




  return (
    <section className='lg:w-44 lg:h-auto bg-blue-200'
      key={info.id}
    >
      <figure className='w-full h-auto bg-red-500 relative'>
        <img className='object-contain w-full h-full'
          src={info.album.cover} alt={info.title}
        />
        <button className='absolute top-5 text-white' onClick={() => handlePlay(info)} ref={buttonElement} ></button>
      </figure>
      <div>
        <p>{info.title}</p>
        <p>{info.album.title}</p>
        <p>{info.artist.name}</p>
      </div>
    </section>
  )
}

export default RecentList