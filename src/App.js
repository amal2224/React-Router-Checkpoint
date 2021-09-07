import React,{useState} from 'react'
import './App.css';
import MovieCard from './Components/Cards/MovieCard'
import MovieList from './Components/List/MovieList'
import FilterCard from './Components/Filter/FilterCard'

const App = () => {
  const [movie,setMovie]=useState([
                                  { id:Math.random(),
                                    title:'Turning Red',
                                    description:"Young actress Rosalie Chiang lends her voice to Mei Lee, a 13-year-old who suddenly “poofs” into a giant red panda when she gets too excited. Sandra Oh voices Mei Lee’s protective, if not slightly overbearing mother, Ming, who is never far from her daughter—an unfortunate reality for the teenager. Directed by Shi and produced by Lindsey Collins.",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/image_73ed95dd.jpeg?region=0%2C0%2C540%2C810',
                                    rating:1,
                                  },
                                  { id:Math.random(),
                                    title:'Luca',
                                    description:"Set in a seaside town on the Italian Riviera, Disney and Pixar’s “Luca” is a coming-of-age story about a young boy experiencing an unforgettable summer. Luca shares these adventures with his friend, Alberto, but all the fun is threatened by a deeply-held secret: they are sea monsters from another world below the water’s surface. “Luca” is directed by Enrico Casarosa and produced by Andrea Warren.",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810',
                                    rating:4,
                                  },
                                  { id:Math.random(),
                                    title:'Cruella',
                                    description:"Emma Stone (LA LA LAND) stars in Disney’s CRUELLA, an all-new live-action feature film about the rebellious early days of one of cinema’s most notorious – and notoriously fashionable – villains, the legendary Cruella de Vil. Set during the 1970s punk rock revolution in London, the story follows a clever and creative young grifter named Estella, who is determined to become a successful designer. ",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/image_7ff71125.jpeg?region=0%2C0%2C540%2C810',
                                    rating:5,
                                  },
                                  { id:Math.random(),
                                    title:'Maleficent',
                                    description:"A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_19736_42ce0589.jpeg?region=0%2C0%2C540%2C810',
                                    rating:3,
                                  },                      
                              ])

const[titleMovie,setTitleMovie] = useState('');
const[rateMovie,setRateMovie] = useState('');
  return (
    <div>
      <MovieCard setMovie={setMovie} movie={movie}/> {/*add new movie*/}
      <br/>
      <FilterCard setTitleMovie={setTitleMovie} setRateMovie={setRateMovie}/> {/*get the resulat of search input&rate*/}
      <br/>
      <MovieList movie={movie} setMovie={setMovie} titleMovie={titleMovie} rateMovie={rateMovie}/>{/* display the resulat */}
    </div>
  )
}
export default App;