import React from 'react';


const LeagueCreate = () => {


  const handleChange = (setFunc, e) => {
    setFunc(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    document.getElementById("league-create").reset();
    // create a function to make a post req to api
  };

  return (
    <form id="league-create" onSubmit={handleFormSubmit}>

    </form>

  );
};

export default LeagueCreate;