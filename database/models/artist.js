import mongoose from 'mongoose';
import AlbumSchema from './album';

const ArtistSchema = mongoose.Schema({
  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  Albums: [AlbumSchema],
});

export default mongoose.model('Artist', ArtistSchema);
