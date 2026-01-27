import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;
  return (
    <div className="flex overflow-x-scroll p-2 ">
      <div>
        <h1 className="text-3xl p-2 text-white">{title}</h1>
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
      <h1>Movie List</h1>
    </div>
  );
};

export default MovieList;
