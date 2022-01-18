import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// Animation
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div initial="hidden" animate="show" className="App">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;
