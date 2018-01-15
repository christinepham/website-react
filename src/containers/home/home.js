import React from 'react'
import { Carousel } from 'react-bootstrap'

import Cover from './images/page14.png'
import HelloWorld from './images/hello-world.jpg'
import './home.css'

const Header = () => (
   <header className="background container">
    <div className="quote">
      <h2><i>"We cannot teach people anything; we can only help them discover it within themselves."</i>
      &nbsp; Galileo Galilei</h2>
    </div>
  </header>
)

const CarouselHome = () => (
  <div className="carousel-home container">
  	<Carousel>
  		<Carousel.Item>
        <a href="https://www.paperoranges.com" target="_blank">
    			<img width={600} height={400} alt="600x400" src={ Cover }/>
    			<Carousel.Caption>
            <h3>Alice's 3D Printing Spree</h3>
            <p>Click to Learn More</p>
          </Carousel.Caption>
        </a>
  		</Carousel.Item>
      <Carousel.Item>
        <a href="https://github.com/christinepham/website-react/wiki" target="_blank">
          <img width={600} height={200} alt="600x200" src={ HelloWorld }/>
          <Carousel.Caption>
            <h3>Github Wiki</h3>
            <p>Read about what I used to create this website</p>
          </Carousel.Caption>
        </a>
      </Carousel.Item>
  	</Carousel>
  </div>
)

const Home = () => (
  <div>
    <Header></Header>
    <CarouselHome></CarouselHome>
  </div>
)

export default Home
