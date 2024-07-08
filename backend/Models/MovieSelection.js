const mongoose = require("mongoose");

const MovieSelectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  seats: [{ type: String, required: true }]
});

const MovieSelection = mongoose.model("MovieSelection", MovieSelectionSchema);

module.exports = MovieSelection;



// const mongoose = require("mongoose");

// const MovieSelectionSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//   movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
// });

// const MovieSelection = mongoose.model("MovieSelection", MovieSelectionSchema);

// module.exports = MovieSelection;
