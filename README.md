# ScholarAI - Intelligent Academic Assistant

ScholarAI is a comprehensive academic platform designed to assist students and researchers with assignments, research, and study.

## 🚀 Tech Stack

- **Frontend**: Nuxt 3 (Vue 3) + Tailwind CSS + TypeScript
- **Backend**: Node.js (Express) + TypeScript
- **Database**: PostgreSQL (Planned)
- **AI**: OpenAI GPT-4
- **Services**: Redis (Caching - Planned)

## 📂 Project Structure

```
Acadence/
├── frontend/           # Nuxt 3 Web Application
│   ├── components/     # Reusable UI Components
│   ├── layouts/        # Page Layouts (Default, Dashboard)
│   ├── pages/          # Application Routes
│   └── ...
└── backend/            # Express API Server
    ├── src/
    │   ├── controllers/ # Request Handlers
    │   ├── services/    # Business Logic (OpenAI Integration)
    │   └── routes/      # API Endpoints
    └── ...
```

## 🛠️ Setup & Installation

### 1. Prerequisites
- Node.js (v18+)
- npm

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Access the app at: `http://localhost:3000`

### 3. Backend Setup
```bash
cd backend
npm install
```
Configure your `.env` file in `backend/.env`:
```env
PORT=8080
OPENAI_API_KEY=your_key_here
```
Start the server:
```bash
npm run dev
```
The API runs at: `http://localhost:8080`

## ✨ Features Implemented

- **Landing Page**: Modern design with feature highlights.
- **Dashboard**: User-specific academic overview.
- **Assignment Assistant**: AI-powered Q&A (connected to OpenAI).
- **Research Assistant**: Mock interface for topic refinement.
- **Plagiarism Checker**: UI for document scanning.
- **Study Mode**: Tools for quizzes and flashcards.

## 📝 API Endpoints

- `POST /api/assignments/solve`: Generates an academic answer for a given question.
  - Body: `{ "question": "...", "level": "Undergraduate", "tone": "Standard" }`

## 🔮 Roadmap
- Integrate PostgreSQL/Prisma for user data.
- Add Redis for caching expensive AI queries.
- Implement file upload handling (Multer/S3).
- Connect real Plagiarism API (e.g., Copyleaks).
# Scholarai
