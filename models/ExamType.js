import mongoose from 'mongoose';

const examTypeSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

const ExamType = mongoose.model('ExamType', examTypeSchema);
export default ExamType;
