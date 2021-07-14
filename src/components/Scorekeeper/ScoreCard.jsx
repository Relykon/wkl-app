import React, { useState } from 'react';
import data from '../fakeData';
import photos from '../teamphotos/ComicallyBad.jpg';

console.log(photos)

const { teams } = data;

const innings = {
  first: {
    home: 0,
    visitor: 0
  },
  second: {
    home: 0,
    visitor: 0
  },
  third: {
    home: 0,
    visitor: 0
  },
  fourth: {
    home: 0,
    visitor: 0
  },
  fifth: {
    home: 0,
    visitor: 0
  }
};

const ScoreCard = ({ home, visitor, name }) => {
  let [inning, setInning] = useState(1);
  let [outs, setOuts] = useState(0);
  let [fouls, setFouls] = useState(0);
  let [visitorScore, setVisitorScore] = useState(0);
  let [homeScore, setHomeScore] = useState(0);
  let [newRunsAdded, setNewRunsAdded] = useState(0);

  const updateScore = (setFunc, e) => {
    const newInningScore = Number(e.target.value);
    if (e.target.parentNode.parentNode.id === 'visitor-row') {
      let updatedScore = visitorScore + newInningScore;
      setFunc(updatedScore);
    } else {
      setFunc(homeScore += newInningScore);
    }
  };

  const handleChange = (setFunc, e) => {
    setFunc(e.target.value);
  };

  // handleGameSubmit = () => {
  //   //submit me!
  // };

  const valueOptions = [
    <option value="0"> 0 </option>,
    <option value="1"> 1 </option>,
    <option value="2"> 2 </option>,
    <option value="3"> 3 </option>,
    <option value="4"> 4 </option>,
    <option value="5"> 5 </option>,
    <option value="6"> 6 </option>,
    <option value="7"> 7 </option>,
    <option value="8"> 8 </option>,
    <option value="9"> 9 </option>
  ];

  const teamPhotos = teams.filter(team => {
    if (team.name === visitor || team.name === home) {
      return true;
    } else {
      return false;
    }
  }).map(t => t.photo)

  // const homePhoto = <img src={teamPhotos[1]} alt="home team" />;
  // const stupidPhoto = <img src={require('../../assets/img/teamphotos/FremontTrolls.jpg')} />;

  console.log('FILTERD', teamPhotos);

  return (
    <div id="score-card-main">
      <div>
        <h3> {visitor} vs {home} </h3>
        <img src={photos} alt="visitor team" />
      </div>
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
              <tr id="visitor-row" className='visitor-input'>
                <td> {visitor} </td>
                <td>
                  <select id="vis-first" onChange={(e) => updateScore(setVisitorScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="vis-second" onChange={(e) => updateScore(setVisitorScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="vis-third" onChange={(e) => updateScore(setVisitorScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="vis-fourth" onChange={(e) => updateScore(setVisitorScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="vis-fifth" onChange={(e) => updateScore(setVisitorScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  {visitorScore}
                </td>
              </tr>
              <tr id="home-row">
                <td> {home} </td>
                <td>
                  <select id="home-first" onChange={(e) => updateScore(setHomeScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="home-second" onChange={(e) => updateScore(setHomeScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="home-third" onChange={(e) => updateScore(setHomeScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="home-fourth" onChange={(e) => updateScore(setHomeScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td>
                  <select id="home-fifth" onChange={(e) => updateScore(setHomeScore, e)}>
                    {valueOptions.map(val => val)}
                  </select>
                </td>
                <td> {homeScore} </td>
              </tr>
            </tbody>
          </table>
        </div> <br />
        <div>
          <span> Inning: {inning} </span>
        </div>
        <div onChange={(e) => handleChange(setOuts, e)}>
          Outs: {outs}
          <input id="1-out" type="radio" value="1" />
          {outs === "1"
            ? <input id="2-out" type="radio" value="2" />
            : null
          }
          {outs === "2" || outs === "3"
            ? <span>
              <input id="2-out" type="radio" value="2" checked />
              <input id="3-out" type="radio" value="3" />
            </span>
            : null
          }
        </div>
      </div>
      {outs === "3"
        ? <div onChange={(e) => handleChange(setInning, e)}>
            inning over ?
            <input onChange={(e) => handleChange(setInning, e)} type="radio" value={inning++} name="inning-check"/> <br/>
            Oops...not yet!
            <input type="radio" value={inning} name="inning-check" />
          </div>
        : null
      }
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