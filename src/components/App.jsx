import React, { useState, useEffect } from 'react';
import { useRoutes, A } from 'hookrouter';
import routes from '../router'
import NavBar from './NavBar.jsx';
import NotFoundPage from './NotFoundPage.jsx'


const App = () => {
  const routeResult = useRoutes(routes);
  return (
    <div>
      <NavBar />
      { routeResult || <NotFoundPage /> }
    </div>
  );
};

export default App;
