import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});




  ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(