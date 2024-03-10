import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Html from './pages/Html'
import ReactQ from './pages/ReactQ'
import CssQ from './pages/CssQ'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='HTML/' element={<Html/>}/>
        <Route path='React/' element={<ReactQ/>}/>
        <Route path='Css/' element={<CssQ/>}/>


      </Routes>
    </>
  )
}

export default App
