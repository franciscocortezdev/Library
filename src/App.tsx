import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import Home from './Pages/Home'
import NewBook from './Pages/NewBook'
import ViewBook from './Pages/ViewBook'

function App () {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create" element={<NewBook/>} />
        <Route path="/view/:IDbook" element={<ViewBook/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
