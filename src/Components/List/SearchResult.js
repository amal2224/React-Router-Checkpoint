import React from 'react'
import './SearchResult.css'
import ReactStars from "react-rating-stars-component";
import { BsFillTrashFill } from "react-icons/bs";
import {Link} from 'react-router-dom'


const SearchResult = ({el ,movie , setMovie }) => {
    const handleDelete = (id) => {setMovie(movie.filter(el => el.id !== id));};
    return (
        <div id="allCard">
                <div key={el.id} className="wrapperM">
                    <img id="posterImg" src={el.posterURL} alt={el.title}/>
                <div className="dataM">
                <div className="dataM contentt">
                    <div id="headerOption">
                        <button className='trailerbtn'>
                        <Link className='link-txt' to={`/trailer/${el.id}`}>
                            WATCH TRAILER
                        </Link>
                        </button>
                        <button className="btndelete" onClick={()=>handleDelete(el.id)}><BsFillTrashFill className="icondel"/></button>
                    </div>
                    <ReactStars className="rating" count={el.rating}  size={24} color="#ffd700"/>    
                    <h1 className="titleM">{el.title}</h1>
                    <p className="description">{el.description}</p>
                </div>
                </div>
                </div>
            </div>
    )
}
export default SearchResult