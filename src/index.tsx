import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./layout/Footer";
import Header from "./layout/Header";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import HousingSheet from "./pages/HousingSheet";
import "./styles/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.Fragment>
    <Router basename={process.env.PUBLIC_URL}>
      {process.env.REACT_APP_DEMO && <div className="demo-banner">DEMO</div>}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fiche-logement/:housingId/:name" element={<HousingSheet />} />
          <Route path="/a-propos-de-kasa" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.Fragment>
);
