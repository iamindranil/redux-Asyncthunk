import Navbar from './components/Navbar'
import Create from './components/Create'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'



function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Create/>}/>
        <Route path='/read' element={<Read/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
