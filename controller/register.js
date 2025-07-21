
import Institute from "../models/Institute.js";

export const registerInstitute = async (req, res) => {
  try {
    const { name, type } = req.body;

    if (!name || !type) {
      return res.status(400).json({ error: 'Institute name and type are required.' });
    }

    let instituteData = { name };
    const normalizedType = type.trim().toLowerCase();

    switch (normalizedType) {
      case 'school':
        instituteData.type = 'School';
        instituteData.schoolDetails = {
          board: req.body.schoolDetails?.board,
          medium: req.body.schoolDetails?.medium,
          classCategory: req.body.schoolDetails?.classCategory,
          standard: req.body.schoolDetails?.standard,
          subjects: req.body.schoolDetails?.subjects,
        };
        break;

      case 'college':
        instituteData.type = 'College';
        instituteData.collegeDetails = {
          university: req.body.collegeDetails?.university,
          degree: req.body.collegeDetails?.degree,
        };
        break;

      case 'exam_center':
        instituteData.type = 'Exam-Center';
        instituteData.examDetails = {
          examType: req.body.examDetails?.examType,
        };
        break;

      case 'playhouse':
        instituteData.type = 'PlayHouse';
        instituteData.playhouseDetails = {
          ageGroup: req.body.playhouseDetails?.ageGroup,
          capacity: req.body.playhouseDetails?.capacity,
          facilities: req.body.playhouseDetails?.facilities,
        };
        break;

      default:
        return res.status(400).json({ error: 'Invalid institute type.' });
    }

    const institute = new Institute(instituteData);
    await institute.save();

    res.status(201).json({ message: 'Institute registered successfully', institute });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
