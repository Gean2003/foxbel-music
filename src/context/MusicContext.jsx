import { createContext, createElement, useState } from "react";

export const MusicContext = createContext()

const MusicProvider = ({children}) => {
    const [songs, setSongs] = useState()
    const [currentData, setCurrentData] = useState()
    const [isPlaying, setIsPlaying] = useState(false)


    return (
        <MusicContext.Provider 
        value={{
            songs,
            setSongs,
            currentData,
            setCurrentData,
            isPlaying,
            setIsPlaying
        }} >
            {children}
        </MusicContext.Provider>
    )
}

export {
    MusicProvider
}

export default MusicContext