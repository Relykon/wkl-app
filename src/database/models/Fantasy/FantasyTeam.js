import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const fantasyTeamSchema = new Schema({
  _id: Number,
  name: String,
  players: Array,
  points: Array,
  photos: Array
});

const FantasyTeam = model('FantasyTeam', fantasyTeamSchema);

export default FantasyTeam;