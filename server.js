const express = require('express');
const projectRoutes = require('./routes/projectRoutes');
const backerRoutes = require('./routes/backerRoutes');
const visitorRoutes = require('./routes/visitorRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();

// Middleware
app.use(express.json());  // Body parser for JSON

// Routes
app.use('/projects', projectRoutes);
app.use('/backers', backerRoutes);
app.use('/visitor', visitorRoutes);

// Route for the root path to check if the server is running
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Kickstarter API! The server is running.');
});

// Global error handling middleware
app.use(errorMiddleware);


app.listen(3000, () => console.log('Server running on port 3000'));