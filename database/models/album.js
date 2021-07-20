import { Schema } from 'mongoose';

const AlbumSchema = Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number,
});

export default AlbumSchema;
