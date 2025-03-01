document.addEventListener('DOMContentLoaded', () => {
  const searchButton = document.getElementById('search-button');
  const gameSearchInput = document.getElementById('game-search');
  const resultsArea = document.getElementById('results-area');

  // Add event listener to search button
  searchButton.addEventListener('click', () => {
    handleSearch();
  });

  // Add event listener for Enter key in search input
  gameSearchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  });

  // Function to handle search
  function handleSearch() {
    console.log('Search initiated');
    const gameTitle = gameSearchInput.value.trim();
    
    // Validate input
    if (!gameTitle) {
      alert('Please enter a game name');
      return;
    }

    // Show loading indicator
    resultsArea.innerHTML = '<div class="loading"></div>';
    resultsArea.classList.add('active');

    // Make API call to backend
    fetchGameData(gameTitle);
  }

  // Function to fetch game data from the API
  async function fetchGameData(gameTitle) {
    try {
      // Dummy fetch call to backend API
      const response = await fetch(`/api/search?game=${encodeURIComponent(gameTitle)}`);
      
      // Temporary dummy data for development
      if (!response.ok) {
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
        console.log('Dummy data:', dummyData);
        displayResults(dummyData);
      } else {
        const data = await response.json();
        console.log('API response:', data);
        displayResults(data);
      }
    } catch (error) {
      console.error('Error fetching game data:', error);
      resultsArea.innerHTML = `
        <div class="error">
          <h3>Error</h3>
          <p>Sorry, there was an error processing your request. Please try again later.</p>
        </div>
      `;
    }
  }

  // Function to display results in the UI
  function displayResults(data) {
    // Create results HTML
    const resultsHTML = `
      <h2 class="game-title">${data.gameTitle}</h2>
      
      <h3>Platform Availability</h3>
      <table class="platforms-table">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Available</th>
          </tr>
        </thead>
        <tbody>
          ${data.platforms.map(platform => `
            <tr>
              <td>${platform.name}</td>
              <td>${platform.available ? '✓' : '✗'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      
      <div class="cross-play">
        <h3>Cross-Play Details</h3>
        <ul>
          ${data.crossPlay.map(detail => `<li>${detail}</li>`).join('')}
        </ul>
      </div>
    `;

    // Update results area
    resultsArea.innerHTML = resultsHTML;
  }
});