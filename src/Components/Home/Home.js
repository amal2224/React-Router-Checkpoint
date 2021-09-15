import React from 'react'
import './Home.css'
import {Carousel} from 'react-bootstrap'


const Home = () => {
    
    return (
        <div className="caroHome">
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    <h3 id="welcome">Just take a break and let's turn dreams on once again.</h3>
    <img className="disney" src="https://i.pinimg.com/564x/89/d4/0c/89d40cbee9a9c4562fb83a2048d4d957.jpg"
        alt="logo"/>
    </div>
    <Carousel style={{width:'40%',marginTop:'15px'}}>
  <Carousel.Item interval={1000}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://i.pinimg.com/236x/5a/0b/64/5a0b64df8a059da2ea9fbc4d47c4277b.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/ec/f9/e1/ecf9e1381d1ed60d372d5ff9b85ee6aa.jpg"
      alt="First"
    />
      </Carousel.Item>
  <Carousel.Item interval={500}>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://i.pinimg.com/236x/b1/3c/14/b13c142b110429b58d56d6a5d81c5c49.jpg"
      alt="Second slide"
    />
    
  </Carousel.Item>
  <Carousel.Item>
    <img style={{height:'650px'}}
      className="d-block w-100"
      src="https://i.pinimg.com/564x/03/5a/ce/035acee89abd6e9ae3adde14589d149f.jpg"
      alt="Third slide"
    />
    
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Home
