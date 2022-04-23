import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Contact  from "./components/Contact"
import Products from "./components/Products"
import About  from "./components/About"
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import User from "./pages/User/User";

function App() {
  return (
    <BrowserRouter>
<Nav/>
      {/* <Home/> */}
      <Routes>
      <Route path="/" exact index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<Products/>} />
      <Route path="about" element={<About />} />
      </Routes>

      { <Footer/> }
    </BrowserRouter>
  );
}

export default App;
