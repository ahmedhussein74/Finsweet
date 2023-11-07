import "./css/App.css";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Podcast from "./pages/Podcast";
import About from "./pages/About";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Podcast />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
