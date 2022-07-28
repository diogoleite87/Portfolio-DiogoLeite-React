import './App.css'

import NavBar from './components/Navbar/navbar'
import { Router } from './Router'
import { BrowserRouter } from "react-router-dom"

import Home from './Pages/Home'



function App() {

  return (
    <BrowserRouter>
    <header>
      <NavBar/>
    </header>
    <main>
      <Router/>
    </main>
    </BrowserRouter>
  )
}

export default App
