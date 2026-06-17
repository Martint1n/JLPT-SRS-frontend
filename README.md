## JLPT-SRS - Frontend
A web app for reviewing Japanese hiragana, katakana, and vocabulary (JLPT N5 to N3), built for French speakers. The frontend communicates with a dedicated Express backend through a JWT-secured REST API.

## Features
User signup and signin (JWT)
Spaced repetition system (SRS) based on a Fibonacci-like interval sequence
Daily review of due cards
Discovery of new cards with a configurable daily limit
User profile management

## Tech Stack
React 19 + TypeScript
Vite
React Router
Tailwind CSS
Axios

## Related backend project
The backend (Express + TypeScript + Prisma + PostgreSQL) lives in a separate repo: jlpt-srs-backend
Backend currently deployed on AWS EC2: http://3.26.92.166:4000

## Installation + running locally
git clone <this-repo-url>
cd jlpt-srs-frontend
npm install
Create a .env file at the root with your backend URL:
VITE_URL_BACKEND=http://localhost:4000

Then start the dev server:
npm run dev
The app is available at http://localhost:5173.

## Project Roadmap
- [ ] Phase 1 — Express + Prisma + PostgreSQL + JWT Auth
- [ ] Phase 2 — Dockerize the app
- [x] Phase 3 — React/Vite/TypeScript frontend connected to the backend
- [ ] Phase 4 — CI/CD with GitHub Actions
- [ ] Phase 5 — Database migration to AWS RDS, Nginx reverse proxy for serving the frontend alongside the backend, and infrastructure-as-code with Terraform