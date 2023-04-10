import React from 'react'
import '../Styles/NavCard.css'

const NavCard = ({name, price, image}) => {
  return (
    <div className='NavCard'>
        <img src={image} alt={`${name}`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default NavCard