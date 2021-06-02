import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const teamSchema = new Schema({
  _id: Number,
  name: String,
  record: {
    taunt: {
      wins: Number,
      losses: Number
    },
    game: {
      wins: Number,
      losses: Number
    },
  },
  runs_scored: Number,
  runs_allowed: Number
});

const Team = model('Team', teamSchema);

export default Team;