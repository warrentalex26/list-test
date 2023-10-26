// src/Router.js
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import People from './pages/People/People';
import PeopleDetails from './pages/PeopleDetails/PeopleDetails';
import PlanetDetails from './pages/PlanetDetails/PlanetDetails';
import Planet from './pages/Planet/Planet';
import Starships from './pages/Starships/Starships';
import StarshipsDetails from './pages/StarshipsDetails/StarshipsDetails';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/people/" element={<People />} />
      <Route path="/people/:id" element={<PeopleDetails />} />
      <Route path="/planets/" element={<Planet />} />
      <Route path="/planets/:id" element={<PlanetDetails />} />
      <Route path="/starships/" element={<Starships />} />
      <Route path="/starships/:id" element={<StarshipsDetails />} />
    </Routes>
  </Router>
);

export default AppRouter;