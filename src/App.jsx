import './App.css'
import NavBar from './LayOut/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import AllTask from './Pages/AllTask'
import NewTask from './Pages/NewTask'
import EditTask from './Pages/EditTask'

function App() {
 

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
       <Route index element={<Home/>} />
       <Route path='/AllTask' element={<AllTask/>}/>
       <Route path='/NewTask' element={<NewTask/>}/>
       <Route path='/EditTask' element={<EditTask/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
