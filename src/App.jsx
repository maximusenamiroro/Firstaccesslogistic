import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/page/Home";
import "../src/index.css"
import Service from "../src/page/Service";
import Tracking from "../src/page/Tracking";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/tracking/:id" element={<Tracking />} />
      </Routes>
    </Router>
  );
}

export default App;