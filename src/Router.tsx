import { Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

export function Router(){
   return(
       <Routes>
           <Route element = { <Home/> }  path="/" />
           <Route element = { <About/> }  path="/about" />
           <Route element = { <Projects/> }  path="/projects" />
           <Route element = { <Contact/> }  path="/contact" />
       </Routes>
   )
}
