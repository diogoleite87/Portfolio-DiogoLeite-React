import './App.css'

import NavBar from './components/Navbar/navbar'
import { Router } from './Router'
import { BrowserRouter } from "react-router-dom"

import Home from './Pages/Home'
import Footer from './components/Footer/footer'



function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Router />
        </main>
        {/* <footer>
      <Footer/>
    </footer> */}
      </BrowserRouter>
    </>

  )
}

export default App
