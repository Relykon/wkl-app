import React, { useState } from 'react';
import ScoreCard from './ScoreCard';
import data from '../fakeData';

const teams = data.teams.map((t) => {
  return [t._id, t.name];
});

const CreateScoreCard = () => {
  const [gameCreated, setGameCreated] = useState(false);
  const [name, setName] = useState(null);
  const [homeTeam, setHomeTeam] = useState(null);
  const [visitorTeam, setVisitorTeam] = useState(null);
  const [homeTeamSelected, setHomeTeamSelected] = useState(false);
  const [visitorTeamSelected, setVisitorTeamSelected] = useState(false);

  const teamSelectOptions = teams.map(t => {
    if (homeTeamSelected === true && homeTeam === t[1]) {
      return <option disabled key={t[0]} value={t[1]}> {t[1]} </option>;
    } else {
      return <option key={t[0]} value={t[1]}> {t[1]} </option>;
    }
  });

  const selectedTeams = [];

  const handleChange = (setFunc, e) => {
    setFunc(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    selectedTeams.push(homeTeam, visitorTeam);
    console.log(selectedTeams)
    setGameCreated(true);
    document.getElementById("add-score-card").reset();
    console.log(selectedTeams)
  };

  return (
    <div>
      <h3> Score a Game! </h3>
      <form id="add-score-card" onSubmit={handleFormSubmit}>
        Scorekeeper's Name:
        <input required type="text" placeholder="your name here" maxLength="30" onChange={(e) => handleChange(setName, e)} />
        <div id="teams-select">
          Home Team (taunt winner):
          <select required onClick={() => setHomeTeamSelected(true)} onChange={(e) => handleChange(setHomeTeam, e)} >
            <option value="" disabled={homeTeamSelected}> Select Team </option>
            {teamSelectOptions}
          </select><br/>
          "Visitor" Team:
          <select required onClick={() => setVisitorTeamSelected(true)} onChange={(e) => handleChange(setVisitorTeam, e)} >
            <option value="" disabled={visitorTeamSelected}> Select Team </option>
            {teamSelectOptions}
          </select>
          <input type="submit" value="Create Game" />
        </div>
      </form>
      <div id="live-score-card">
        { gameCreated
          ? <ScoreCard teamData={data.teams} selectedTeams={selectedTeams}/>
          : null }
      </div>
    </div>
  );
};

export default CreateScoreCard;