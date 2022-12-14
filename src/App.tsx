import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import NewBook from './Pages/NewBook'
import ViewBook from './Pages/ViewBook'
import Store from './Context/store'
import Menu from './Components/Menu'
import EditBook from './Pages/EditBook'

function App () {
  return (
    <Store>

      <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<NewBook/>} />
        <Route path="/view/:IDbook" element={<ViewBook/>} />
        <Route path="/edit/:IDbook" element={<EditBook/>} />
      </Routes>
      </BrowserRouter>
    </Store>
  )
}

export default App
