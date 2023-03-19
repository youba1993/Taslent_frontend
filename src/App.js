import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";

function App() {
  return (
    <div >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
