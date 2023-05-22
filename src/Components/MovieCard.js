import React, { useState } from 'react';
import {Card} from 'react-bootstrap';
import Rating from 'react-stars';


function MovieCard({movie}) {
   
  return (
    <div className="Card">
        <Card>
      <Card.Img className="Image" variant="top" src={movie.posterURL} />
      <Card.Body>
        <Card.Title className="Title">{movie.title}</Card.Title>
        <Card.Text>{movie.description} </Card.Text>
        <Rating name="read-only" value={movie.rating} readOnly />
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard