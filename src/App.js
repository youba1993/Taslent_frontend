import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonBackToTop from "./components/ButtonBackToTop";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import UnderConstruction from "./pages/UnderConstruction";
import LinksPage from "./pages/LinksPage";
import NewsAndEvents from "./pages/NewsAndEvents";
import QandA from "./pages/QandA";
import Contact from "./pages/Contact";

function App() {

  return (
    <div >
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/links" element={<LinksPage />} />
        <Route exact path="/news&events" element={<NewsAndEvents />} />
        <Route exact path="/qa" element={<QandA />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/underConstruction" element={<UnderConstruction />} />
      </Routes>
      <ButtonBackToTop />
      <Footer />
    </div>
  );
}

export default App;
