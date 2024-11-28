import { Route, Routes} from 'react-router-dom'
import './App.css'
// import Button from './component/Button'
import bgimage from "/bg.avif"
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

import image1 from './assets/images/card-top.jpg';
import image2 from './assets/images/image-1.jpg'; 



function App() {
  
  return (
    <div>
      {/* <h1 className='text-4xl text-[#aeaeae] bg-blue-400 text-center m-20'>Vite App</h1> */}
      <Navbar />
    
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>

        <Cards title="The Coldest Sunset" imageSrc={image1}/>
        <Cards title="Noteworthy technology" imageSrc={image2}/>

    </div>
  )
}

export default App


// Props