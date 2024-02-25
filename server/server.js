const express = require('express');
const axios = require('axios'); // Ensure axios is installed for making HTTP requests
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // Import mongoose for MongoDB interactions
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/booksDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Google Books API search route
app.get('/searchBooks', async (req, res) => {
  const { query } = req.query; // Extract search query from URL parameters
  const apiKey = process.env.GOOGLE_BOOKS_API_KEY; // Your Google Books API key
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}&maxResults=40`;

  try {
    const response = await axios.get(url);
    res.json(response.data.items); // Send book data back to the client
  } catch (error) {
    console.error('Error fetching data from Google Books API:', error);
    res.status(500).send('Server error');
  }
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
