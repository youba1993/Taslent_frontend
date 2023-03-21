import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonBackToTop from "./components/ButtonBackToTop";
import Gallery from "./pages/Gallery";

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
      <ButtonBackToTop />
      <Footer />
    </div>
  );
}

export default App;
