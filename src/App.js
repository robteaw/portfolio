import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Toggle from "./components/Toggle";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
// Animation
import { motion } from "framer-motion";

export default function App() {
  return (
      <motion.div initial="hidden" animate="show" className="App">
        <Navbar />
        <Toggle />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </motion.div>
  );
}
