import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/page/Home";
import "../src/index.css"
import Service from "../src/page/Service";
import Tracking from "../src/page/Tracking";
import About from "../src/page/About";
import Contact from "../src/page/Contact";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tracking/:id" element={<Tracking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;