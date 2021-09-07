import React from 'react'
import './MovieList.css'
import SearchResult from './SearchResult';

const MovieList = ({movie,setMovie,titleMovie,rateMovie}) => {
    let result = movie.filter(
                                el=> (el.rating>=rateMovie) && (el.title.toLowerCase().includes(titleMovie.toLowerCase().trim())))
                                .map((el,i) =>(
                                                <SearchResult  el ={el} movie={movie} setMovie={setMovie} i={i}/>)
                            )
    return (
        <div id="allCard">
        {result.length ? result:<img id="notFound" src="/asset/resultNotFound.jpg" alt="error"/>}
        </div>
    )
}
export default MovieList