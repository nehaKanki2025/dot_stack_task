import mongoose from 'mongoose';
import Standard from './Standard.js';
import ClassCategory from './ClassCategory.js';
import ExamType from './ExamType.js';

const instituteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    type: {
      type: String,
      required: true,
      enum: ['School', 'College', 'PlayHouse', 'Exam-Center'],
    },

    schoolDetails: {
      board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
      },
      medium: {
        type: String,
        required: true,
      },
      classCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ClassCategory',
      },
      standard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Standard',
      },
      subjects: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Subject',
        },
      ],
    },

    collegeDetails: {
      university: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'University',
      },
      degree: {
        type: String,
        required: true,
      },
    },

    examDetails: {
      examType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ExamType',
      },
    },

    playhouseDetails: {
      ageGroup: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
      },
      facilities: [
        {
          type: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const Institute = mongoose.model('Institute', instituteSchema);
export default Institute;
