import React, { useState } from 'react';
import data from '../fakeData';


const ScoreCard = ({ teamData, selectedTeams }) => {
  const [inning, setInning] = useState(1);
  const [outs, setOuts] = useState(0);

  return (
    <div id="score-card">
      <h3>  {selectedTeams[0]} vs. {selectedTeams[1]} </h3>
      <div>
        <span> Inning: {inning} </span>
        <br/>
        <span> Outs: {outs} </span>
      </div>
    </div>
  );
};

export default ScoreCard;