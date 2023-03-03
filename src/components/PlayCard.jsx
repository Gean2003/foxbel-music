import { useEffect } from "react";
import useMusic from "../hooks/useMusic"

const PlayCard = () => {

  const { songs, setIsPlaying, isPlaying, currentData } = useMusic()

  useEffect(() => {
    
    if(currentData){
      if(isPlaying){
      currentData.buttonElement.current.innerText = 'pause'
      currentData.audioElement.current.play()
    }else{
      currentData.audioElement.current.pause()
      currentData.buttonElement.current.innerText = 'play'
    }
    }else{

    }
    

  }, [isPlaying])
  

  const handlePlay = () => {
      setIsPlaying(!isPlaying)
  }

  return (
    <section className='absolute bottom-0 w-full h-[60px] bg-red-500'>
        <img src={ songs?.album.cover_small } alt={ songs?.title} />
        <button onClick={ handlePlay } className='mx-auto'> { isPlaying? 'pause' : 'play' } </button>
    </section>
  )
}

export default PlayCard