import React,{useState} from 'react'
import './App.css';
import MovieList from './Components/List/MovieList'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import TrailerMovie from './Components/TrailerMovie/TrailerMovie';

const App = () => {
  const [movie,setMovie]=useState([
                                  { id:Math.random(),
                                    title:'Turning Red',
                                    description:"Young actress Rosalie Chiang lends her voice to Mei Lee, a 13-year-old who suddenly “poofs” into a giant red panda when she gets too excited. Sandra Oh voices Mei Lee’s protective, if not slightly overbearing mother, Ming, who is never far from her daughter—an unfortunate reality for the teenager. Directed by Shi and produced by Lindsey Collins.",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/image_73ed95dd.jpeg?region=0%2C0%2C540%2C810',
                                    rating:1,
                                    trailerURL:'https://www.youtube.com/watch?v=pqdHP2dWQ9M'
                                  },
                                  { id:Math.random(),
                                    title:'Luca',
                                    description:"Set in a seaside town on the Italian Riviera, Disney and Pixar’s “Luca” is a coming-of-age story about a young boy experiencing an unforgettable summer. Luca shares these adventures with his friend, Alberto, but all the fun is threatened by a deeply-held secret: they are sea monsters from another world below the water’s surface. “Luca” is directed by Enrico Casarosa and produced by Andrea Warren.",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/image_2ff75a5c.jpeg?region=0%2C0%2C540%2C810',
                                    rating:4,
                                    trailerURL:'https://www.youtube.com/watch?v=mYfJxlgR2jw'
                                  },
                                  { id:Math.random(),
                                    title:'Cruella',
                                    description:"Emma Stone (LA LA LAND) stars in Disney’s CRUELLA, an all-new live-action feature film about the rebellious early days of one of cinema’s most notorious – and notoriously fashionable – villains, the legendary Cruella de Vil. Set during the 1970s punk rock revolution in London, the story follows a clever and creative young grifter named Estella, who is determined to become a successful designer. ",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/image_7ff71125.jpeg?region=0%2C0%2C540%2C810',
                                    rating:5,
                                    trailerURL:'https://www.youtube.com/watch?v=gmRKv7n2If8'
                                  },
                                  { id:Math.random(),
                                    title:'Maleficent',
                                    description:"A vengeful fairy is driven to curse an infant princess, only to discover that the child may be the one person who can restore peace to their troubled land.",
                                    posterURL:'https://lumiere-a.akamaihd.net/v1/images/p_maleficentmistressofevil_19736_42ce0589.jpeg?region=0%2C0%2C540%2C810',
                                    rating:3,
                                    trailerURL:'https://www.youtube.com/watch?v=n0OFH4xpPr4'
                                  },                      
                              ])

const[titleMovie,setTitleMovie] = useState('');
const[rateMovie,setRateMovie] = useState('');
  return (
    <div className="app">
    <BrowserRouter>
    <NavBar/>
    <Switch>
    
      <Route exact path='/' component={Home}/>
    
      <Route path='/movie' render={(props)=>
              <MovieList{...props} 
                movie={movie} 
                setMovie={setMovie} 
                titleMovie={titleMovie} 
                rateMovie={rateMovie} 
                setTitleMovie={setTitleMovie} 
                setRateMovie={setRateMovie}/>}
              />
      
      {/* <Route path='/trailer/:ID'>
        <TrailerMovie movie={movie}/>
      </Route> */}

      <Route path='/trailer/:ID' render={(props)=>
        <TrailerMovie {...props} movie={movie}/>}
      />
    
    </Switch>
    </BrowserRouter>
    </div>
  )
}
export default App;