
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Pricing from '../pages/Pricing'
import Navbar from '../components/Navbar'
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='portfolio' element={<Pricing />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
