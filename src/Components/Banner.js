import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


    

const Banner = ({end}) => {
    
    
  return (
    <Carousel  interval={1234} nextLabel={null} prevLabel={null} >
        {end.map((item)=>(
            <Carousel.Item key={item.image}>
                <img className='d-block w-100' src={item.image} alt="" />
                <Carousel.Caption>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>{item.source}</p>
                    <p>Read more..</p>
                </Carousel.Caption>
            </Carousel.Item>
            
        ))}
    </Carousel>
  )
}

export default Banner