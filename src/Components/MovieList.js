import React from 'react';
import {movies} from "../Data/DbMovies";
import MovieCard from './MovieCard';
import "../App.css";


function MovieList () {
  return (
    <div  className="list">
      {
        movies.map((movie)=> (<MovieCard movie={movie} key={movie.id}/>))
      }
    </div>
  )
}

export default MovieList