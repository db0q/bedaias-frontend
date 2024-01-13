import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileDetail from './routes/ProfileDetail';
import Orgs from './routes/Orgs';
import About from './routes/AboutUs/AboutUs';
import Nukhba from './routes/NukhbaPage/Nukhba';
import Nukhbapost from './routes/NukhbaPage/Nukhbapost';
import { SpeedInsights } from "@vercel/speed-insights/next"
const App = () => {

  return (
    <div>
      <Routes>
        <Route
          path="/orgs"
          element={<Orgs />}
        />
        <Route
          path="/"
          element={<About/>}
        />
        <Route
          path="/nukhba"
          element={<Nukhba />}
        />
        <Route
          path="/orgs/:id"
          element={<ProfileDetail />}
        />
        <Route
          path="/nukhba/:id"
          element={<Nukhbapost />}
        />
      </Routes>
    </div>
  );
};

export default App;
