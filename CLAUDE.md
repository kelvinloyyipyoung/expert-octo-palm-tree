# CLAUDE.md - Development Guidelines

## Build/Test Commands
- Frontend setup: `cd frontend && npm install && npm run dev`
- Backend setup: `cd backend && npm install && npm start`
- Run tests: `npm test`
- Run single test: `npm test -- -t "test name"`

## Project Structure
- Frontend: HTML (`index.html`), CSS (`style.css`), JS (`script.js`)
- Backend: Node.js/Express in `backend` folder with `app.js` and tests

## Code Style Guidelines
- **UI Design**: 
  - Apple-inspired (light backgrounds, dark gray #333333 text)
  - San Francisco font, glassmorphism effect for components
  - Mobile responsive design with centered layout
- **JavaScript**:
  - Use async/await for API calls
  - Proper error handling with specific error messages
  - Clear variable naming (camelCase)
- **Backend**:
  - RESTful API endpoints with validation
  - Secure API key handling
  - Proper error status codes (400, 500, etc.)
- **Documentation**:
  - Comment complex logic
  - Document API endpoints

## Implementation Priorities
1. Complete frontend UI with search functionality
2. Implement backend Express server with endpoints
3. Integrate Brave Search and Gemini APIs
4. Add comprehensive error handling