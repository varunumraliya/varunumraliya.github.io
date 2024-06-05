import './App.css'
import Contact from './Contact'
import Home from './Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Project from './Project'
import RMSdetail from './project-page/RMSdetail'
import YTGdetail from './project-page/YTSdetail'
import FMAdetail from './project-page/FMAdetail'
import RFdetail from './project-page/RFdetail'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={() => <Home />}></Route>
        <Route path='/contact' Component={() => <Contact />}></Route>
        <Route path='/project' Component={() => <Project />}></Route>
        <Route path='/project/rms' Component={() => <RMSdetail />}></Route>
        <Route path='/project/yts' Component={() => <YTGdetail />}></Route>
        <Route path='/project/fma' Component={() => <FMAdetail />}></Route>
        <Route path='/project/rf' Component={() => <RFdetail />}></Route>
      </Routes>
    </>
  )
}

export default App
