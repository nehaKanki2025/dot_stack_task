# dot_stack_task


# Dot Stack Task

A Node.js REST API for managing institutes, boards, class categories, exams, standards, subjects, and universities. Built with Express, MongoDB, and ES Modules.

## Features

- Register institutes (School, College, PlayHouse, Exam-Center)
- CRUD APIs for boards, class categories, exams, standards, subjects, and universities
- MongoDB integration using Mongoose
- Environment variable support with dotenv

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB Atlas or local MongoDB instance

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/nehaKanki2025/dot_stack_task.git
   cd dot_stack_task
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory:
   ```
   PORT=3000
   MONGODB_URL=your_mongodb_connection_string
   ```

### Running the Server

- Start the server:
  ```
  npm start
  ```
- For development with auto-reload:
  ```
  npm run dev
  ```

### API Endpoints
| Method | Endpoint                       | Description                |
|--------|------------------------------- |----------------------------|
| POST   | `/api/register`                | Register User as per College,Student,Playhouse,Exam   |
| POST   | `/api/boards`                  | Create a new board         |
| POST   | `/api/classCategories`         | Create a new class category|
| POST   | `/api/examTypes`               | Create a new exam type     |
| POST   | `/api/standards`               | Create a new standard      |
| POST   | `/api/subjects`                | Create a new subject       |
| POST   | `/api/universities`            | Create a new university    |


## API Documentatin

https://documenter.getpostman.com/view/31919969/2sB34mgcYF


### Technologies Used

- Node.js
- Express
- MongoDB & Mongoose
- dotenv

## License

ISC

## Author

nehaKanki2025