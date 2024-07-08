import React from 'react';
import MovieList from './MovieList';



const Home = () => {
  return (
    <>
    <MovieList/>
    </>
    // <div className="bg-gray-100 min-h-screen">
    //   <header className="bg-gray-800 text-white py-4">
    //     <div className="max-w-7xl mx-auto px-4">
    //       <h1 className="text-3xl font-bold">Movie Booking System</h1>
    //     </div>
    //   </header>
    //   <main className="max-w-7xl mx-auto px-4 py-6">
    //     <h2 className="text-2xl font-bold mb-4">All Movies</h2>
    //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    //       {movies.map(movie => (
    //         <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
    //           <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover" />
    //           <div className="p-4">
    //             <h3 className="text-lg font-bold">{movie.title}</h3>
    //             <p className="text-gray-600">{movie.genre}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </main>
    // </div>
  );
};

export default Home;
