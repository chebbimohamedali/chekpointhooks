import React from 'react'
import Card from "./MovieCard";


function MovieList({movies}) {
 
  return (
    <div className="Movie">
        {movies.map((movie)=>
        <Card movie={movie}/>
        )
        }
    </div>
  )
}

export default MovieList