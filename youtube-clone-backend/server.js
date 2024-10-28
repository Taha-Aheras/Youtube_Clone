const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Endpoint to save search queries
app.post('/api/save-search', (req, res) => {
  const { searchTerm } = req.body;

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  const searchHistoryFilePath = path.join(__dirname, 'searchHistory.json');

  // Read existing search history
  let searchHistory = [];
  if (fs.existsSync(searchHistoryFilePath)) {
    const fileContent = fs.readFileSync(searchHistoryFilePath, 'utf-8');
    searchHistory = JSON.parse(fileContent);
  }

  // Add new search term to history
  searchHistory.push({ searchTerm, timestamp: new Date().toISOString() });

  // Save updated search history
  fs.writeFileSync(searchHistoryFilePath, JSON.stringify(searchHistory, null, 2));

  res.status(200).json({ message: 'Search term saved successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
