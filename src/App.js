import logo from './logo.svg';
import './App.css';
import Home from './Home.js';
import mycs from './Mycss.module.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Contact from './Contact.js';

import { Routes, Route, Link } from "react-router-dom";
function App() {
  return (

    <>
      <div className={mycs.main}>
        <ul><li className={mycs.mainli}><h1>🅢🅗🅘🅥🅐🅐🅨</h1></li></ul>
        <ul className={mycs.menu}>
          <Link to="/"><li><a>Home</a>
          </li></Link>
          <li><a>Updates</a></li>
          <li><a>Menu</a></li>
          <li><a>Testimonials</a></li>
          <Link to="contact"><li><a>contact</a></li></Link>
          <Button className={mycs.call} variant="primary">Meet With Us</Button>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    {/* <Home/> */}
    </>
    
  );
}

export default App;
