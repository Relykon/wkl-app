import React, { useState } from 'react';
import { A } from 'hookrouter';


const FantasyDashboard = () => {
  // const [activeLeague, setActiveLeague] = useState(false);
  // const [] = useState();
  // const [] = useState();
  // const [] = useState();


  const handleChange = (setFunc, e) => {
    setFunc(e.target.value);
  };

  return (
    <div className="fantasy-main">
      <h1> WKL Fantasy Kickball </h1>
      <div className="fantasy-nav">
        <A href='/leagueCreate'> Create a League </A>
        <A href='/teamCreate'> Create a Team </A>
      </div>
    </div>

  );
};

export default FantasyDashboard;