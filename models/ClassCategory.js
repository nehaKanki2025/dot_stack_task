import mongoose from 'mongoose';

const classCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const ClassCategory = mongoose.model('ClassCategory', classCategorySchema);
export default ClassCategory;
