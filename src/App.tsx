import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NewBook from './Pages/NewBook'
import ViewBook from './Pages/ViewBook'
import Store from './Store/store'
import Menu from './Components/Menu'

function App () {
  return (
    <Store>

      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<NewBook/>} />
        <Route path="/view/:IDbook" element={<ViewBook/>} />
      </Routes>
      </BrowserRouter>
    </Store>
  )
}

export default App
