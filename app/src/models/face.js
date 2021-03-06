import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const FaceSchema = new Schema({
  firstname: String,
  lastname: String,
  accountname: String,
  number: { type: Number, min: 0, max: 1000000 }, // registration number
  number_id: { type: Number, min: 0, max: 1000000 }, // registration number
  range: { type: Number, min: 0, max: 1000000 }, // to find by query language
  picture: String,
  network: String,
  network_id: { type: String, unique: true },
  lang: String,
  website: String,
  occupations: String,
  claim: { type: Boolean, default: true },
  non_human: { type: Boolean, default: false },
  access_token: String,
  refresh_token: String,
  previous: Number,
  next: Number
});

export default mongoose.model('Face', FaceSchema);
