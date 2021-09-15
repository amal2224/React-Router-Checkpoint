import React , {useState} from 'react'
import './MovieCard.css'
import {Modal,Button, Form} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";

const MovieCard = ({setMovie,movie}) => {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [posterURL,setPosterURL]=useState('');
    const [rating,setRating]=useState('');
    const [show, setShow] = useState(false);
    const handleTitle=(event)=>setTitle(event.target.value);
    const handleDes=(event)=>setDescription(event.target.value);
    const handlePoster=(event)=>setPosterURL(event.target.value);
    const ratingChanged = (newRating) => setRating(newRating);

    const handleShow = () => setShow(!show);
    const handleClose = () => setShow(!show);
    
    const handleAdd=()=>{
        setMovie(
            [...movie,{
                        title :title.length>0 ? title: "unknown" ,
                        description : description.length>0 ? description:"Unknown",
                        posterURL : posterURL.length>0 ? posterURL:'/asset/notfound.png',
                        rating : rating ,id:Math.random()}
                    ]
        );
        setShow(false);
    }
    return (
        <>
<div className="headerCard">
    <button className="button button-1" onClick={handleShow}>Add New Movie</button>
</div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control onChange={handleTitle} type="text" placeholder="Movie name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={handleDes} as="textarea" rows={3} placeholder="Write some description of the movie"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Movie poster</Form.Label>
                    <Form.Control onChange={handlePoster} type="text" placeholder="URL movie poster" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Movie Rating</Form.Label>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"/>
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
        </Button>
        
        <Button variant="primary" onClick={handleAdd}>
            Add
        </Button>
        </Modal.Footer>
    </Modal>
</>
    )
}
export default MovieCard