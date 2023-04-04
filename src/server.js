const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the build folder
app.use(express.static(path.join(__dirname, 'build')));

// Route all requests to the build folder's index.html file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
