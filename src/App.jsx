import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutBook from './Pages/AboutBook/AboutBook'

function App() {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/:id' element={<AboutBook/>} />
    </Routes>
  )
}

export default App
