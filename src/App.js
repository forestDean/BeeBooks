import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Staging from './pages/Staging';
import Header from './components/Header';
import Footer from './components/Footer';
import Wrapper from './components/Wrapper';
import Container from "./components/Container";


const App = () => {
  return (
      <Router>
        <Container>
          <Header />
          <Wrapper>
            <Routes>
              <Route path="/" element={<Home/>} />
              {/* <Route path="/13-react-portfolio/" element={<Home/>} /> */}
              <Route path="/pages/Staging" element={<Staging/>} />
            </Routes>
          </Wrapper>
          <Footer />
        </Container>
      </Router>
    );
  }

export default App
