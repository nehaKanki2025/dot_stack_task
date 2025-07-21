import mongoose from 'mongoose';

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ['School', 'College', 'Exam-Center', 'PlayHouse'] },

  schoolDetails: {
    board: String,
    medium: String,
    classCategory: String,
    standard: String,
    subjects: [String]
  },

  collegeDetails: {
    university: String,
    degree: {
      type: String,
    
    }
  },

  examDetails: {
    examType: String
  },

  playhouseDetails: {
    ageGroup: {
      type: String,
      required: function () {
        return this.type === 'PlayHouse';
      }
    },
    capacity: {
      type: Number,
      required: function () {
        return this.type === 'PlayHouse';
      }
    },
    facilities: [String]
  }
});

const Institute = mongoose.model('Institute', instituteSchema);

export default Institute;
