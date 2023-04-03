// import { Router } from 'react-router-dom';
import "./App.css";
import "./compo/Home.css";
import "./compo/Grid.css";
import "./compo/Steps.css";
import "./compo/Sliders.css";

import Navbar from "./compo/Navbar";

import Footer from "./compo/Footer";
import "./compo/Footer.css";
import "./pages/About.css";
import './pages/Contact.css'

// import {FontAwesome} from 'react-fontawesome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from "./pages/About";
import MainPage from "./pages/MainPage";
import Contact from "./pages/Contact";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        
        <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch> 
        <Footer />
      </Router>
    </>
  );
}

export default App;
