import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import data from './fakeData';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(team, tauntWs, tauntLs, wins, losses, scored, allowed) {
  return { team, tauntWs, tauntLs, wins, losses, scored, allowed };
};

const rows = data.teams.map(t => {
  return createData(t.name, t.record.taunt.wins, t.record.taunt.losses, t.record.game.wins, t.record.game.losses, t.runs_scored, t.runs_allowed);
});

let handleCellClick = (e) => {
  console.log(e.target.textContent);
}

const Standings = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell key="topHeader-0"> Team </TableCell>
            <TableCell key="topHeader-1" align="right">  </TableCell>
            <TableCell key="topHeader-2" align="left"> Taunts </TableCell>
            <TableCell key="topHeader-3" align="right">  </TableCell>
            <TableCell key="topHeader-4" align="left"> Sports </TableCell>
            <TableCell key="topHeader-5" align="right">  </TableCell>
            <TableCell key="topHeader-6" align="right">  </TableCell>
          </TableRow>
          <TableRow>
            <TableCell key="header-0">  </TableCell>
            <TableCell key="header-1" align="right"> W </TableCell>
            <TableCell key="header-2" align="right"> L </TableCell>
            <TableCell key="header-3" align="right"> W </TableCell>
            <TableCell key="header-4" align="right"> L </TableCell>
            <TableCell key="header-5" align="right"> Scored&nbsp;(runs) </TableCell>
            <TableCell key="header-6" align="right"> Allowed&nbsp;(runs) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.team}>
              <TableCell key={'body-0' + row.team} component="th" scope="row">
                {row.team}
              </TableCell>
              <TableCell key="body-1" onClick={handleCellClick} align="right"> {row.tauntWs} </TableCell>
              <TableCell key={'body-1' + row.team} align="right"> {row.tauntLs} </TableCell>
              <TableCell key={'body-2' + row.team} align="right"> {row.wins} </TableCell>
              <TableCell key={'body-3' + row.team} align="right"> {row.losses} </TableCell>
              <TableCell key={'body-4' + row.team} align="right"> {row.scored} </TableCell>
              <TableCell key={'body-5' + row.team} align="right"> {row.allowed} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Standings;