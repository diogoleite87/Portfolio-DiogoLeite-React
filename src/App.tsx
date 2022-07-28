import './App.css'

import NavBar from './components/Navbar'
import { Router } from './Router'
import { BrowserRouter } from "react-router-dom"


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
