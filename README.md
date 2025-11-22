# ASHA AI - Rural Health Companion

ASHA AI is a voice-first, AI-powered menstrual and reproductive health companion for rural India.

## Tech Stack
- **Backend**: FastAPI, Supabase (Mocked for MVP)
- **Frontend**: React, Tailwind CSS, Vite

## Features
- **Voice-First Symptom Checker**: Speak symptoms in Hindi/local languages.
- **Period Tracker**: Track cycles and get predictions.
- **ASHA Worker Mode**: Log visits and track high-risk patients.
- **Health Lessons**: Audio capsules for health awareness.

## Setup & Run

### Prerequisites
- Python 3.8+
- Node.js 16+

### Backend
1. Navigate to `backend` folder.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run server:
   ```bash
   uvicorn main:app --reload
   ```
   Server runs at `http://localhost:8000`.

### Frontend
1. Navigate to `frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run dev server:
   ```bash
   npm run dev
   ```
   App runs at `http://localhost:5173`.

## Environment Variables
- Rename `backend/.env.example` to `backend/.env` and add your Supabase credentials if you want to use a real database.
