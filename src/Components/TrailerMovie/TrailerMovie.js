import React from 'react'
import './TrailerMovie.css'
import {useParams} from 'react-router-dom'
import {Button} from 'react-bootstrap'

const TrailerMovie = ({movie,history, match}) => {
    const {ID}=useParams();
    const movieItem = movie.find(movieItem=>movieItem.id==ID);

    return (
        <div className="container containerOwner">
            <Button onClick={() => history.goBack()} variant="dark">Go back</Button>{' '}

            <h2 >{movieItem.title}</h2>
            <h4>
                Description:<br/>
            </h4>
            <p>{movieItem.description}</p>
            <iframe src={movieItem.trailerURL} title="Trailer Movie" width="100%" height="500px" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

export default TrailerMovie
