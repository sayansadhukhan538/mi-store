import React from 'react'
import { Carousel } from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {
  return (
    <Carousel interval={3456} nextLabel={null} prevLabel={null} indicators={false}>
        {start.map((item)=>(
            <Carousel.Item>
                <img className='d-block w-100' src={item} alt="" />
            </Carousel.Item>
        ))}
    </Carousel>
  )
}

export default Slider;