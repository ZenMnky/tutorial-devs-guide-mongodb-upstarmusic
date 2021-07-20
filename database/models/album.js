import mongoose from 'mongoose';

const AlbumSchema = mongoose.Schema({
  title: String,
  date: Date,
  copiesSold: Number,
  numberTracks: Number,
  image: String,
  revenue: Number,
});

export default AlbumSchema;
