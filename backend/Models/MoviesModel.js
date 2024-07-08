const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  genre: { type: String, required: true },
  releaseDate: { type: Date, required: true }
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;


// const mongoose = require("mongoose");

// const MoviesSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   genere: { type: String, required: true },
//   description:{type: String} ,
//   releasedate: {type: String},
// //   image: {data : Buffer, contentType: String}
// });

// module.exports = mongoose.model("Movies", MoviesSchema);
