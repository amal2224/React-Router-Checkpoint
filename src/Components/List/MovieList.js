import React from 'react'
import './MovieList.css'
import SearchResult from './SearchResult';
import MovieCard from '../Cards/MovieCard'
import FilterCard from '../Filter/FilterCard'

const MovieList = ({movie,setMovie,titleMovie,rateMovie,setTitleMovie,setRateMovie}) => {
    let result = movie.filter(el=>
                            (el.rating>=rateMovie) && (el.title.toLowerCase().includes(titleMovie.toLowerCase().trim()))
                            ).map((el,i) =>
                                (<SearchResult  el ={el} movie={movie} setMovie={setMovie} i={i}/>)
                            )
    return (
        <div id="allCard">
    <div className="demo">
        <MovieCard setMovie={setMovie} movie={movie}/> 
        <FilterCard setTitleMovie={setTitleMovie} setRateMovie={setRateMovie}/>
    </div>
        {
        result.length ?
        result:
        <img id="notFound" src="https://cdn.statically.io/gh/Anime-Sama/IMG/img/autres/404.png" alt="error"/>
        }
    </div>
    )
}
export default MovieList