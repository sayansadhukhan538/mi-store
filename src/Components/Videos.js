import React from 'react'
import VideoCard from './VideoCard';
import '../Styles/Videos.css'
const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {videos.map(( item)=>(
            <VideoCard key={item.image} name={item.name} image={item.image}/>
        ))}

    </div>
  )
}

export default Videos