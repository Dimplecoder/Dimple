const express = require('express');
const app = express();
const port = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', './views'); // Optional if views folder is already named "views"

// Serve home page
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home Page',
    heading: 'Welcome!',
    message: 'This is rendered using EJS.'
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
