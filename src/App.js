import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SocialMedia from './Components/SocialMedia';
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route,  } from "react-router-dom";
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Portfolio from './Pages/Portfolio';
import ContactMe from './Pages/ContactMe';


function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutMe" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactMe" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <SocialMedia/>
      </footer>
    </>
  )
}

export default App;

