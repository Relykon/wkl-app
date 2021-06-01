import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(team, tauntWs, tauntLs, wins, losses, scored, allowed) {
  return { team, tauntWs, tauntLs, wins, losses, scored, allowed };
}

const rows = [
  createData('Dungeons & Ballers', 2, 7, 8, 1, 39, 13),
  createData('Tragic Kingdom', 7, 2, 7, 2, 44, 33),
  createData('P.S.A', 5, 4, 7, 2, 63, 35),
  createData('Objection!',6, 3, 6, 3, 54, 50),
  createData('NC Double Eh?', 4, 5, 4, 5, 40, 36),
  createData('Fremont Trolls', 2, 7, 4, 5, 55, 46),
  createData('Yachty By Nature', 2, 7, 4, 5, 50, 47),
  createData('Comically Bad', 4, 5, 4, 5, 36, 56),
  createData('The Wurst', 6, 3, 4, 5, 48, 67),
  createData('Rookie Mooves', 7, 2, 4, 5, 34, 80)
];


const Standings = () => {
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
              <TableCell align="right">{row.tauntWs}</TableCell>
              <TableCell align="right">{row.tauntLs}</TableCell>
              <TableCell align="right">{row.wins}</TableCell>
              <TableCell align="right">{row.losses}</TableCell>
              <TableCell align="right">{row.scored}</TableCell>
              <TableCell align="right">{row.allowed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Standings;