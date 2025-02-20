# expert-octo-palm-tree Project TODO Checklist

This checklist covers every step from project setup through full integration and testing for the expert-octo-palm-tree website.

## 1. Project Setup
- [ ] **Repository Structure**
  - [ ] Create the root folder with:
    - [ ] `index.html`
    - [ ] `style.css`
    - [ ] `script.js`
  - [ ] Create a `backend` folder with:
    - [ ] `package.json` (initialize as a Node.js project)
    - [ ] `app.js` (or `server.js`) for the Express server
    - [ ] `backend.test.js` (for backend endpoint tests)
  - [ ] Optionally, add a `frontend.test.js` for front-end testing plans

- [ ] **Tooling & Dependencies**
  - [ ] Initialize Node.js in the backend folder (`npm init`)
  - [ ] Install dependencies:
    - [ ] Express
    - [ ] Jest (for testing)
    - [ ] Supertest (for endpoint testing)
  - [ ] Set up a basic version control structure (e.g., Git)

## 2. Front-End Implementation
- [ ] **HTML (index.html)**
  - [ ] Add a centered title "expert-octo-palm-tree" using dark gray (`#333333`) text.
  - [ ] Create a search bar section:
    - [ ] Text input with placeholder "Name a game..."
    - [ ] Rounded corners, 1px light gray border, white background
  - [ ] Create a pill-shaped search button next to the input:
    - [ ] Light gray border (1px) and a glassmorphism effect
  - [ ] Add a results area below the search bar with a unique identifier for DOM manipulation
  - [ ] Link to `style.css` and `script.js`

- [ ] **CSS (style.css)**
  - [ ] Style the page for mobile responsiveness (vertical scrolling on mobile)
  - [ ] Center layout for larger screens with a blurred Melbourne, Australia background and light gray overlay (`#f8f8f8`)
  - [ ] Implement glassmorphism effects for key elements
  - [ ] Use the San Francisco font and maintain an Apple-inspired color scheme (light backgrounds, dark gray text)
  - [ ] Style the results area, platform table (with alternating row colors), and bullet list for cross-play details

- [ ] **JavaScript (script.js)**
  - [ ] Add an event listener for the search button:
    - [ ] On click, log “Search initiated”
    - [ ] Read the game title from the input field
    - [ ] Display a loading indicator in the results area
    - [ ] Make a dummy fetch call to `/api/search`
  - [ ] Ensure the fetched dummy data is logged to the console

## 3. Backend Implementation
- [ ] **Express Server Setup (app.js/server.js)**
  - [ ] Set up a basic Express server that listens on a specified port
  - [ ] Create the `/api/search` endpoint to handle GET requests with a `?game=<game name>` query parameter
  - [ ] Validate and sanitize the `game` query parameter (return a 400 error for missing/invalid input)

- [ ] **Dummy Data Endpoint**
  - [ ] Return a JSON object containing:
    - [ ] `gameTitle` (from the query parameter)
    - [ ] `platforms`: Array of objects (e.g., `{ name: "PC", available: true }`)
    - [ ] `crossPlay`: Array of strings detailing cross-play capabilities
  - [ ] Implement basic error handling with appropriate HTTP status codes (e.g., 400 for bad input, 500 for server errors)

- [ ] **API Integration Stubs**
  - [ ] Create helper functions (stubs) for:
    - [ ] Formulating the query for Brave Search using Gemini
    - [ ] Executing the Brave Search API call
    - [ ] Processing the response to extract platforms and cross-play details
  - [ ] Integrate these helper functions into the `/
