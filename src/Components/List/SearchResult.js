import React from 'react'
import './SearchResult.css'
import ReactStars from "react-rating-stars-component";
import { BsFillTrashFill } from "react-icons/bs";

const SearchResult = ({el ,movie , setMovie , i}) => {
    const handleDelete = (i) => {
    setMovie(movie.filter((el, index) => index !== i));
    console.log(i);
    };

    return (
        <div id="allCard">
                <div key={i} className="wrapperM">
                    <img id="posterImg" src={el.posterURL} alt={el.title}/>
                <div className="dataM">
                <div className="dataM contentt">
                    <div id="headerOption">
                        <button className="btndelete" onClick={()=>handleDelete(i)}><BsFillTrashFill className="icondel"/></button>
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