const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../')));

// API endpoint for game search
app.get('/api/search', (req, res) => {
  const gameTitle = req.query.game;
  
  // Validate input
  if (!gameTitle) {
    return res.status(400).json({ error: 'Game name is required' });
  }
  
  try {
    // For now, return dummy data
    // In the future, this would use Gemini API to formulate queries and Brave Search API to get data
    const dummyData = {
      gameTitle: gameTitle,
      platforms: [
        { name: 'PC', available: true },
        { name: 'PlayStation 5', available: true },
        { name: 'Xbox Series X/S', available: true },
        { name: 'Nintendo Switch', available: false },
        { name: 'PlayStation 4', available: true },
        { name: 'Xbox One', available: true }
      ],
      crossPlay: [
        'Full cross-play between PC, PlayStation 5, and Xbox Series X/S',
        'Cross-play requires enabling in the game settings',
        'PlayStation 4 and Xbox One players can only play with each other',
        'Progress syncs across all platforms if using the same account'
      ]
    };
    
    // Simulate API delay
    setTimeout(() => {
      res.json(dummyData);
    }, 1000);
  } catch (error) {
    console.error('Error processing search:', error);
    res.status(500).json({ error: 'An error occurred while processing your request' });
  }
});

// Helper function stubs for future implementation
const formulateQuery = (gameTitle) => {
  // This would use Gemini API to formulate queries
  return `${gameTitle} game platforms cross-play`;
};

const executeSearch = async (query) => {
  // This would use Brave Search API
  // Implementation to be added
};

const extractInformation = (searchResults) => {
  // This would use Gemini API to extract relevant information
  // Implementation to be added
};

// Serve frontend for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For testing