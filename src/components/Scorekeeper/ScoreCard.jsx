import React, { useState } from 'react';
// import data from '../fakeData';


const ScoreCard = ({ teamData, home, visitor }) => {
  const [inning, setInning] = useState(1);
  const [outs, setOuts] = useState(0);
  const [visitorScore, setVisitorScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);
  const [newRunsAdded, setNewRunsAdded] = useState(0);

  const totalScores = (newRuns, teamTotal) => {
    return teamTotal = newRuns + teamTotal;
  };

  const handleChange = (setFunc, e) => {
    let team = e.target.className === 'visitor-input'
    ? visitorScore
    : homeScore;
    setFunc(e.target.value);
    totalScores(newRunsAdded, team);
  };

  console.log('in ScoreCard home, visitor', home, visitor)

  return (
    <div id="score-card-main">
      <h3> {visitor} vs {home} </h3>
      <div>
        <div id="scoreboard">
          <table className="scorecard-table">
            <thead>
              <tr>
                <th> Team </th>
                <th> 1st </th>
                <th> 2nd </th>
                <th> 3rd </th>
                <th> 4th </th>
                <th> 5th </th>
                <th> Total </th>
              </tr>
            </thead>
            <tbody>
              <tr id="visitor-row">
                <td> {visitor} </td>
                <td>
                  <input className="visitor-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="visitor-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="visitor-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="visitor-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="visitor-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  {visitorScore}
                </td>
              </tr>
              <tr id="home-row">
                <td> {home} </td>
                <td>
                  <input className="home-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="home-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="home-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="home-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td>
                  <input className="home-input" type="text" placeholder="0" onChange={(e) => handleChange(setNewRunsAdded, e)} />
                </td>
                <td> {homeScore} </td>
              </tr>
            </tbody>
          </table>
        </div> <br />
        <span> Inning: {inning} </span> <br />
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