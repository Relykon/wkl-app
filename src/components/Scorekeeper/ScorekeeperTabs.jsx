import React, { useState } from 'react';
// import { A } from 'hookrouter';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
// tabs
import CreateScoreCard from './CreateScoreCard';
import Rules from '../Rules';
import Standings from '../Standings';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScorekeeperTabs() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="scorekeeper-tabs">
          <Tab label="Score A Game" {...a11yProps(0)} />
          <Tab label="Standings" {...a11yProps(1)} />
          <Tab label="Stats" {...a11yProps(2)} />
          <Tab label="Rules" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CreateScoreCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Standings />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <img src="https://public.tableau.com/static/images/WK/WKL2019/LeagueStats/1.png" alt="wkl 2019 season stats!"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Rules />
      </TabPanel>
    </div>
  );
}



