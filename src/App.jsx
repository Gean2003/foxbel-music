import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Recent from './pages/Recent'
import HomeLayout from './components/HomeLayout'
import  endpoint from './utils/APIRoutes'

function App() {
  const [data, setData] = useState()
  const [src, setSrc] = useState('')
  const [music, setMusic] = useState('discovery')
  const audioElement = useRef()

  useEffect(() => {
    
      axios.get(`${endpoint.DEEZER_API_SEARCH} ${music}`)
              .then(res =>  {setData(res.data.data)} )   
               .catch(err => console.log(err) )
  }, [music])

  
  return (
    <div className='h-screen max-w-[1920px] mx-auto'>
        {
            src? <audio src={ src } ref={audioElement} /> : <audio  src={ data?[0].preview : '' } ref={audioElement} />
        }
      <Routes>
          <Route path='/' element={ <Landing /> } />

          <Route element={ <HomeLayout /> } >
                {
                   data? <Route path='/recent' element={ <Recent 
                                                                data={data} 
                                                                src={src}
                                                                setSrc={setSrc}
                                                                audioElement={audioElement}
                                                                /> } />
                                                                    : <Route path='/recent' element={ <h1>Cargando</h1>} />
                }
                <Route path='/artist' element={ <h1>In progress</h1> } />
          </Route>
      </Routes>
    </div>
  )
}

export default App
