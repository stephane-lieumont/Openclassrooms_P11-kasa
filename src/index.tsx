import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

import Home from './pages/Home'
import About from './pages/About'
import HousingSheet from './pages/HousingSheet'
import Error404 from './pages/Error404'

import './styles/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />        
          <Route path="/fiche_logement" element={<HousingSheet />} />
          <Route path="/a_propos_de_kasa" element={<About />} />
          <Route path="*" element={<Error404 />}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
