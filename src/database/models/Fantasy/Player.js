import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const playerSchema = new Schema({
  _id: Number,
  name: String,
  team: String,
  points: Array,
  photos: Array
});

const Player = model('Player', playerchema);

export default Player;