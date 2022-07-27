import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Presentation from './components/Presentation/presentation'
import About from './components/About/about'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'

function App() {

  return (
    <>
    <Header></Header>
    <Presentation></Presentation>
    <About></About>
    <Projects></Projects>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
