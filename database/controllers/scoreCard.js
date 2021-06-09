// import axios from 'axios';
import mongoose from 'mongoose';
import ScoreCard from '../models/Scorekeeper/ScoreCard';

export const createScoreCard = (req, res) => {
  console.log('IMA CARD!');
  const { name, home. visitor } = req.body;
  const newScoreCard = new ScoreCard({
    date: new Date(),
    scorekeeper: name,
    teams: {
      home: home,
      visitor: visitor
    }
  }).save(err => {
    if (err) {
      return handleError(err);
    } else {
      res.status(200).send("Score Card created!")
    }
  });
};