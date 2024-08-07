import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { useRef } from 'react';
import Skills from './Components/Skills/Skills';

function App() {
  const HomeRef=useRef(null);
  const AboutRef=useRef(null);
  return (
    <div className="App">
        <Navbar HomeRef={HomeRef} AboutRef={AboutRef}></Navbar>
        <Home HomeRef={HomeRef}></Home>
        <About AboutRef={AboutRef}></About>
        <Skills ></Skills>
        <Footer></Footer>
    </div>
  );
}

export default App;
