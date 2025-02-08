import "./App.css";

//Pages:
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";

//Components:
import Navbar from "./Components/Navbar";
import SearchForm from "./Components/SearchForm";

//React Router config:
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//Hook:
import { useState } from "react";

function App() {

  const [navegator, setNavegator] = useState(0)
  
  const handleNavegator = (e) => {
    setNavegator(e)
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/*//Links com react router: (componente Navbar) */}
        <Navbar handleNavegator={handleNavegator} />
        {/*Search  */}
        {navegator === 0 && <SearchForm />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/*Rota dinâmica */}
          <Route path="/product/:id" element={<Product />} />
          {/*Nested routes: */}
          <Route path="/product/:id/info" element={<Info />} />
          {/*Search: */}
          <Route path="/search" element={<Search />} />
          {/*No match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
