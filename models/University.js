import mongoose from 'mongoose';

const universitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const University = mongoose.model('University', universitySchema);
export default University;
