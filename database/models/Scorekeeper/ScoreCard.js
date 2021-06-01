import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const scoreCard = new Schema({
  _id: Number,
  date: Date,
  scorekeeper: String,
  teams: {
    home: String,
    visitor: String
  },
  innings: {
    first: {
      home: Number,
      visitor: Number
    },
    second: {
      home: Number,
      visitor: Number
    },
    third: {
      home: Number,
      visitor: Number
    },
    fourth: {
      home: Number,
      visitor: Number
    },
    fifth: {
      home: Number,
      visitor: Number
    },
  },
  totalScore: {
    home: Number,
    visitor: Number
  },
  winner: {
    game: String,
    taunt: String
  },
  loser: {
    game: String,
    taunt: String
  },
  verified: {
    type: Boolean,
    default: false
  }
});

const ScoreCard = model('ScoreCard', scoreCard);

export default ScoreCard;