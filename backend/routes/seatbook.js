const express = require('express');
const router = express.Router();
const User = require('../Models/userModel');
const Movie = require('../Models/MoviesModel');
const MovieSelection = require('../Models/MovieSelection');

// Route to book seats for multiple movies
router.post('/book-seats', async (req, res) => {
  try {
    const { userId, bookings } = req.body;

    // Validate the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Validate and process each booking
    const bookingPromises = bookings.map(async (booking) => {
      const { movieId, seats } = booking;

      // Validate the movie exists
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return { error: `Movie with ID ${movieId} not found` };
      }

      // Create a new booking
      const newBooking = new MovieSelection({ userId, movieId, seats });
      await newBooking.save();
      return newBooking;
    });

    // Wait for all bookings to be processed
    const results = await Promise.all(bookingPromises);

    res.status(200).json({ message: "Seats booked successfully", bookings: results });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


// Route to fetch booked movies by user
router.get('/user/:userId/booked-movies', async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find all bookings for the user
      const bookings = await MovieSelection.find({ userId });
  
      // Extract movieIds from bookings
      const movieIds = bookings.map(booking => booking.movieId);
  
      // Find movies corresponding to the movieIds
      const movies = await Movie.find({ _id: { $in: movieIds } });
  
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });



  // Route to fetch booked seats for a movie by user
router.get('/user/:userId/movie/:movieId/booked-seats', async (req, res) => {
    try {
      const { userId, movieId } = req.params;
  
      // Find the booking for the user and movie
      const booking = await MovieSelection.findOne({ userId, movieId });
  
      if (!booking) {
        return res.status(404).json({ error: "No booking found for this user and movie" });
      }
  
      // Return only the booked seats
      res.status(200).json({ seats: booking.seats });
    } catch (error) {
      res.status(500).json({ error: "Internal Server error" });
    }
  });
  

module.exports = router;
