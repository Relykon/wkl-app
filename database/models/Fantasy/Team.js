import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const teamSchema = new Schema({
  _id: Number,
  name: String,
  players: Array,
  points: Array,
  photos: Array
});

const Team = model('Team', teamSchema);

export default Team;