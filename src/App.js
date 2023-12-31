import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact'
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Container from "./components/Container";


const App = () => {
  return (
      <Router>
        <Container className="page">
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </Wrapper> 
          <Footer />        
        </Container>
      </Router>
    );
  }

export default App
