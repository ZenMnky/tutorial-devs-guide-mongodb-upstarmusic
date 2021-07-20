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

const Artist = mongoose.model('Artist', ArtistSchema);

export default Artist;
