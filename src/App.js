import React, { useState, createContext } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
// Animation
import { motion } from "framer-motion";
import ReactSwitch from "react-switch";

// Toggle dark/light
export const ThemeContext = createContext(null);

export default function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={(theme, toggleTheme)}>
      <motion.div initial="hidden" animate="show" className="App" id={theme}>
        <Navbar />
        <ReactSwitch onChange={toggleTheme} />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </motion.div>
    </ThemeContext.Provider>
  );
}
