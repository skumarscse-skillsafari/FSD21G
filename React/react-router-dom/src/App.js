import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer";
import PageNotFound from "./Pages/PageNotFound";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profiles from "./Pages/Profiles";
import Profile from "./Pages/Profile";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profiles" element={<Profiles />}/>
          <Route path="/profiles/profile/:userId" element={<Profile />}/>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
