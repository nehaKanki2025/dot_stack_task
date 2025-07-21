import mongoose from 'mongoose';

const standardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Subject' }],
});

const Standard = mongoose.model('Standard', standardSchema);
export default Standard;
