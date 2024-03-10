import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Html from './pages/Html'
import ReactQ from './pages/ReactQ'
import CssQ from './pages/CssQ'
import JavaSQ from './pages/JavaSQ'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='HTML/' element={<Html/>}/>
        <Route path='React/' element={<ReactQ/>}/>
        <Route path='Css/' element={<CssQ/>}/>
        <Route path='Js/' element={<JavaSQ/>}/>



      </Routes>
    </>
  )
}

export default App
