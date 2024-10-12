import './App.css'
import Button from './components/Button'
import bgimage from './assets/images/banner-bg-6.png'
import NetflixSeries from './components/NetflixSeries'
import Tabs from './components/Tabs'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1 className='text-center bg-slate-900 text-6xl py-5 text-white'>Vite + React</h1>

      <img src={bgimage} className='img'/>

      <NetflixSeries />

      {/* <Tabs />
      <Footer /> */}

      
      {/* <div className='container px-20'>
      <NetflixSeries />
      <Button message={"Click me"} color={"bg-red-500 px-6 py-2 rounded-md"}/>
      <Button message={"Book an Appointment"} color={"bg-green-600 px-6 py-2 text-white rounded-md"} />
      <Button message={"Learn More"} color={"bg-purple-600 px-6 py-2 text-white rounded-md"} />
      <Button message={"Submit"} color={"bg-orange-600 px-6 py-2 text-white rounded-md"} />
    
      </div> */}

        <div className='text-white'>
          The count is {count}
        
        <div>
        <button onClick={() => {setCount(count + 1)}} >Update Count</button>
        </div>
        </div>

    </>
  )
}

export default App
