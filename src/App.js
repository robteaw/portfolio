import React, {useState} from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import styled, {ThemeProvider} from 'styled-components'
import {lightTheme, darkTheme} from './themes.js'
// Animation
import { motion } from "framer-motion";
import { createContext } from 'react';

export const ThemeContext = createContext(null)

function App() {

  return (
    <ThemeContext.Provider>
    <motion.div initial="hidden" animate="show" className="App" id="dark">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </motion.div>
    </ThemeContext.Provider>
  );
}

export default App;
