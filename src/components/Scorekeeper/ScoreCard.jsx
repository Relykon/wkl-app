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


/*
<form>
  Home vs. Visitor

  Table:
      1   2   3   4   5  total
  --------------------------
  H | 0 | 2 | 1 | 0 | 3 |  6 |  // click a square to edit number
  V | 0 | 2 | 1 | 0 |   |  3 |  // click a finalized number to
  ---------------------------   // ask to update it
 Inning: Bottom of 5th
 Outs: () () ()                [OUT] // confirm 3 outs
 Foul: () () ()          [FOUL] //confirm foul out


 [End Game] // confirm? // not the normal end? double confirm - request reason -> add to game notes

*/