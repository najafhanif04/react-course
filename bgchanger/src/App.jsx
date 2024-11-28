import { useState } from "react"
import ToggleSwitch from "./components/ToggleSwitch"

function App() {
  const [color, setColor] = useState("black")
  

  return (
    <>
    
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      
      <div className="flex fixed flex-wrap justify-center top-10 inset-x-0 px-2">


      <ToggleSwitch />


        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-lg">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-red-700 text-white">Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-green-700 text-white">Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-blue-700 text-white">Blue</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-orange-700 text-white">Orange</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-purple-700 text-white">Purple</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-400 text-white">Yellow</button>
          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-pink-700 text-white">Pink</button>
          <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-gray-700 text-white">Gray</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-4 py-1 rounded-full shadow-lg bg-cyan-700 text-white">Cyan</button>
        </div>
        
      </div>
    </>
  )
}

export default App
