import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {movies} from  "../Data/DbMovies";
import { Button } from 'react-bootstrap';

function Trailer() { 
  const {id} = useParams();
  const movie = movies.find((movie)=>movie.id===Number(id));
  const navigate=useNavigate();
  return (
   
    <div>
      <h1>{movie.title}</h1>
      <iframe 
      width="560"
      height="315"
      src={movie.posterURL}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; 
      autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
      </iframe>
      <p>{movie.description}</p>
      {/* navigate back to the home page */}
      <Button variant="info" onClick={()=>navigate("/")}>Go Back</Button>
    </div>
  );
}

export default Trailer