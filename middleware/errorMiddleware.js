const errorMiddleware = (err, req, res, next) => {
  console.error(err.stack);  // Log the error for debugging
  
  // Respond with a generic error message
  res.status(500).json({
    message: 'Something went wrong, please try again later.',
    error: process.env.NODE_ENV === 'development' ? err.stack : {},  // Show full stack in development mode
  });
};

module.exports = errorMiddleware;