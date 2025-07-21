
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import instituteRoutes from './routes/institue.js';
import boardRoutes from './routes/board.js';
import ClassCategoryRoutes from './routes/classCategory.js';
import ExamRoutes from './routes/examType.js';



dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

connectDB().then(() => {
  console.log('Database connected');
}).catch((err) => {
  console.error('DB connection failed:', err);
});

app.use('/api/institutes', instituteRoutes);
app.use('/api/boards', boardRoutes);
app.use('/api/classCategories', ClassCategoryRoutes);
app.use('/api/examTypes', ExamRoutes);

app.get('/', (req, res) => {
  res.send('Hello API Server');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
