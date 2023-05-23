import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function MovieCard({movie}) {
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterImage} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{movie.description}</Card.Text>
        {/* Go to movie (title, description)  and trailer page */}
        <Link to={`/trailer/${movie.id}`}>
        <Button variant="primary">See Movie</Button>
        </Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard