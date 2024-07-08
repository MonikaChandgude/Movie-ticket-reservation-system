const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/userModel');
const Movie = require('../Models/MoviesModel');
const MovieSelection = require('../Models/MovieSelection');
const router = express();
router.use(express.json());

// Route to select movies for a user
router.post('/select-movies', async (req, res) => {
  try {
    const { userId, movieIds } = req.body;
    
    let movieSelection = await MovieSelection.findOne({ userId });
    if (!movieSelection) {
      movieSelection = new MovieSelection({ userId, movies: movieIds });
    } else {
      movieSelection.movies = movieSelection.movies.concat(movieIds);
    }

    await movieSelection.save();
    res.status(200).json({ message: "Movies selected successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Route to fetch selected movies for a user
router.get('/user/:userId/movies', async (req, res) => {
  try {
    const { userId } = req.params;
    const movieSelection = await MovieSelection.findOne({ userId }).populate('movies');

    if (!movieSelection) {
      return res.status(404).json({ error: "No movies found for this user" });
    }

    res.status(200).json(movieSelection.movies);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});


// Route to select seats for a movie
router.post('/select-seats', async (req, res) => {
    try {
      const { userId, movieId, seats } = req.body;
      
      let movieSelection = await MovieSelection.findOne({ userId });
      if (!movieSelection) {
        movieSelection = new MovieSelection({ userId, selections: [{ movieId, seats }] });
      } else {
        let selection = movieSelection.selections.find(sel => sel.movieId.toString() === movieId);
        if (selection) {
          selection.seats = selection.seats.concat(seats);
        } else {
          movieSelection.selections.push({ movieId, seats });
        }
      }
  
      await movieSelection.save();
      res.status(200).json({ message: "Seats selected successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });
  
  // Route to fetch selected seats for a movie by a user
  router.get('/user/:userId/movie/:movieId/seats', async (req, res) => {
    try {
      const { userId, movieId } = req.params;
      const movieSelection = await MovieSelection.findOne({ userId }).populate('selections.movieId');
  
      if (!movieSelection) {
        return res.status(404).json({ error: "No selections found for this user" });
      }
  
      const selection = movieSelection.selections.find(sel => sel.movieId._id.toString() === movieId);
  
      if (!selection) {
        return res.status(404).json({ error: "No seats found for this movie for this user" });
      }
  
      res.status(200).json(selection.seats);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });
  





module.exports = router;

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
