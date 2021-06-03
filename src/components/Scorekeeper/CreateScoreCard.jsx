import React, { useState } from 'react';
import data from '../fakeData';

const teams = data.teams.map((t) => {
  return [t._id, t.name];
});

const CreateScoreCard = () => {
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

  const handleChange = (setFunc, e) => {
    setFunc(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    document.getElementById("add-score-card").reset();
  };

  return (
    <div>
      <h3> Score a Game! </h3>
      <form id="add-score-card">
        Scorekeeper's Name:
        <input required type="text" placeholder="your name here" maxLength="30" onChange={(e) => handleChange(setName, e)} />
        <div id="teams-select">
          Home Team (taunt winner):
          <select onClick={() => setHomeTeamSelected(true)} onChange={(e) => handleChange(setHomeTeam, e)} >
            <option value="null" disabled={homeTeamSelected}> Select Team </option>
            {teamSelectOptions}
          </select><br/>
          "Visitor" Team:
          <select onClick={() => setVisitorTeamSelected(true)} onChange={(e) => handleChange(setHomeTeam, e)} >
            <option value="null" disabled={visitorTeamSelected}> Select Team </option>
            {teamSelectOptions}
          </select>
        </div>
      </form>
    </div>
  );
};

export default CreateScoreCard;