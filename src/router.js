import React from 'react';
import Home from './components/Home.jsx'
import ScorekeeperDashboard from './components/Scorekeeper/ScorekeeperDashboard.jsx';
import FantasyDashboard from './components/Fantasy/FantasyDashboard.jsx';

const routes = {
  "/": () => <Home />,
  "/fantasy": () => <FantasyDashboard />,
  "/scorekeeper": () => <ScorekeeperDashboard />,
};

export default routes;