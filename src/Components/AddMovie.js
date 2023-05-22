import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Rating from 'react-stars';
const AddMovie = ({setData,data}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name,setName]=useState("")
  const [rating,setRating]=useState(0)
  const handleClick=()=>setData([data=Math.random(),name,rating])
  return (
    <div><Button variant="primary" onClick={handleShow}>Add movie</Button>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>New movie</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="whrite name movie" onChange={()=>setName()} />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Import Movie</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
{/* Rating */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Share your rating</Form.Label>
        <Rating name="read-only" value={rating} onChange={()=>setRating()}  />
      </Form.Group>

     
    </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleClick}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default AddMovie