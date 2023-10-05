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
import UserProfile from "./pages/UserProfile";
import { useSpring, animated } from 'react-spring';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function App() {
  // Define animations for hero section
  const heroAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
    delay: 500
  });
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };
  return (
    <div >
      <animated.div className="background-image text-center text-white scroll-bg pb-2" style={heroAnimation}>
        <div className="background-image text-center text-white scroll-bg pb-5">
          <h1 className=" p-2 size-lg" style={{ fontSize: "65px" }}>Ansuf Yiswen</h1>
          <h3>Taslent</h3>
          <p> is a village in Algeria in the commune of Ighram (Kabylie), located in the Soummam valley ...</p>
          <div className="d-flex justify-content-center">
            <Link to={"/about"}> <Button onClick={() => handleScroll()} size="lg" className="me-2" variant="outline-light" >Learn more</Button> </Link>
            <Link to={"https://buy.stripe.com/test_6oEdS17frfOagw0000"} ><Button size="lg" className="me-2" variant="outline-info" style={{ fontWeight: "bold" }} >Donate</Button></Link>
          </div>
        </div>
      </animated.div>
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
        <Route exact path="/profile" element={<UserProfile />} />
        <Route exact path="/underConstruction" element={<UnderConstruction />} />
      </Routes>
      <ButtonBackToTop />
      <Footer />
    </div>
  );
}

export default App;
