import React, { useState } from 'react';


const CreateScoreCard = () => {
  const [name, setName] = useState(null);
  const [team, setTeam] = useState(null);

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

      </form>
    </div>
  );
};