# Expert Octo Palm Tree

A sleek, user-friendly web application for quickly determining video game platform availability and cross-play capabilities.

## Claude Code Experiment

This project represents my first experiment using Claude Code, Anthropic's AI assistant for software development. The entire codebase was created with Claude's guidance, showcasing how AI assistants can help implement specifications efficiently. The process was:

- Provided Claude with the project specifications
- Collaborated on creating the frontend and backend components
- Used Claude for code generation, testing, and Git operations

This approach allowed for rapid implementation of a functional prototype based on the provided specs.

## Overview

Expert Octo Palm Tree helps gamers easily find out:
- Which platforms a game is available on
- If cross-play is supported between different platforms
- How to enable cross-play and any limitations

Simply enter a game title, and the application will search for and display all relevant platform and cross-play information in a clean, modern interface.

## Features

- **Simple Search**: Enter any game title to get instant information
- **Platform Availability**: Clear visual indication of which platforms support the game
- **Cross-Play Details**: Comprehensive information about cross-play capabilities
- **Mobile-Friendly**: Responsive design that works on all devices
- **Privacy-Focused**: Uses Brave Search API for enhanced privacy

## Technical Architecture

### Frontend
- HTML5, CSS3, and vanilla JavaScript
- Apple-inspired design with glassmorphism effects
- San Francisco font family
- Responsive layout with mobile-first approach

### Backend
- Node.js with Express
- RESTful API architecture
- Integration with Brave Search API
- Gemini AI for query formulation and information extraction

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/kelvinloyyipyoung/expert-octo-palm-tree.git
   cd expert-octo-palm-tree
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Start the server:
   ```
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Development

### Running Tests
```
cd backend
npm test
```

## UI Preview

The application features a clean, minimalist design with:
- Blurred background image of Melbourne, Australia
- Light gray overlay for readability
- Glassmorphism effect for UI elements
- Checkmarks and crosses for platform availability
- Bullet points for cross-play details

## Future Enhancements

- Database integration for faster lookups
- User accounts for saving favorite games
- Advanced search filters by platform or genre
- Game news and update integration

## License

This project is licensed under the MIT License