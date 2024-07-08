const express = require('express');
const Movie = require('../Models/MoviesModel'); // Adjust the path as needed

const router = express.Router();

router.post('/add', async (req, res) => {
  try {
    const { title, director, releaseDate, genre, description, duration } = req.body;

    const movie = new Movie({
      title,
      director,
      releaseDate,
      genre,
      description,
      duration,
    });

    await movie.save();
    res.status(201).json({ message: "Movie added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get('/movies', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.status(200).json(movies);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  });

module.exports = router;




// const express = require("express");
// const fetchuser = require("../middleware/fetchuser");
// const router = express.Router();
// const Movies = require("../Models/MoviesModel");
// const { body, validationResult } = require("express-validator");

// //Route 1 -----Add New Movies: POST".
// router.post(
//   "/addmovies",

//   [
//     body("title", "Enter valid title").isLength({ min: 3 }),
//     body("description", "description must be atleast 5 characters").isLength({
//       min: 5,
//     }),
//   ],
//   async (req, res) => {
//     try {
//       const { name, genere, description, releasedate } = req.body;

//       // If there are errors, return bad request and the error
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const movie = new Movies({
//         name,
//         description,
//         genere,
//         releasedate,
//         //   user: req.user.id,
//       });
//       const savedmovie = await movie.save();
//       res.json(savedmovie);
//     } catch (error) {
//       console.error(error.message);
//       res.status(500).send("An error occurred");
//     }
//   }
// );
