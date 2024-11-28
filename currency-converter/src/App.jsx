import { useState } from 'react'
import { InputBox } from './components'
import {useCurrencyInfo} from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [amoint, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyIndo = useCurrencyInfo(from)

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  return (
    <>
   
      <h1 className='text-3xl bg-orange-400'>Vite + React</h1>
  
    </>
  )
}

export default App
