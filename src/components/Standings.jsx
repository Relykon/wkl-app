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
            <TableCell> Team </TableCell>
            <TableCell align="right">  </TableCell>
            <TableCell align="left"> Taunts </TableCell>
            <TableCell align="right">  </TableCell>
            <TableCell align="left"> Sports </TableCell>
            <TableCell align="right">  </TableCell>
            <TableCell align="right">  </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>  </TableCell>
            <TableCell align="right"> W </TableCell>
            <TableCell align="right"> L </TableCell>
            <TableCell align="right"> W </TableCell>
            <TableCell align="right"> L </TableCell>
            <TableCell align="right"> Scored&nbsp;(runs) </TableCell>
            <TableCell align="right"> Allowed&nbsp;(runs) </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.team}
              </TableCell>
              <TableCell onClick={handleCellClick} align="right"> {row.tauntWs} </TableCell>
              <TableCell align="right"> {row.tauntLs} </TableCell>
              <TableCell align="right"> {row.wins} </TableCell>
              <TableCell align="right"> {row.losses} </TableCell>
              <TableCell align="right"> {row.scored} </TableCell>
              <TableCell align="right"> {row.allowed} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Standings;