# PrepPilot

PrepPilot is an AI-powered placement preparation platform developed as part of the **Innova Hackathon**. It helps students prepare for technical interviews, aptitude tests, and career planning through AI-driven tools in a single application.

## About

Placement preparation often involves switching between multiple platforms for mock interviews, assessments, learning resources, and career guidance. PrepPilot brings these features together into one platform, providing a more structured and personalized learning experience.

## Features

### Authentication

- User registration and login
- Firebase Authentication
- Protected routes
- Persistent user sessions

### AI Mock Interviews

- Technical interview practice
- HR interview practice
- AI-generated interview questions
- Instant feedback

### AI Exam Generator

- Multiple-choice questions
- Technical assessments
- Aptitude tests
- Adjustable difficulty levels

### Learning Roadmaps

- Personalized learning paths
- Skill-based recommendations
- Technology-specific roadmaps

### AI Assistant

- Programming assistance
- Career guidance
- Interview preparation
- Technical question support

## Technology Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Python

### Authentication

- Firebase Authentication

### AI

- Groq API

## Project Structure

```text
PrepPilot/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── routes/
│   └── context/
│
├── backend/
│   ├── ai/
│   ├── routes/
│   ├── models/
│   └── app.py
│
└── README.md
```

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/2025sahillund/InnovaHackathon.git
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

### Backend

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn app:app --reload
```

## Environment Variables

### Frontend (`.env`)

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

### Backend (`.env`)

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

## Future Improvements

- Resume analysis
- Resume builder
- Voice-based mock interviews
- Coding practice environment
- Company-specific interview preparation
- Performance analytics
- Multi-language support

## Screenshots

Include screenshots of:

- Login
- Dashboard
- AI Interview
- AI Exam Generator
- Roadmap Generator
- AI Assistant

## Team

Developed by:

**Sahil Lund**

## Hackathon

This project was built for the **Innova Hackathon**.

## License

This project is intended for educational and hackathon purposes.
