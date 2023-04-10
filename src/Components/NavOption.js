import React, { useState, useEffect } from 'react'
import NavCard from './NavCard';
import '../Styles/NavOption.css'

const NavOption = ({miPhones,redmiPhones,tv,laptop,fitnessAndLifeStyle,home,audio,accessories}) => {
    const[miPhonesToggle, setMiPhonesToggle] = useState(false);
    const [redmiPhonesToggle,setRedmiPhonesToggle] = useState(false);
   const [tvToggle,setTvToggle] = useState(false);
   const [laptopToggle,setLaptopToggle] = useState(false);
   const [fitnessAndLifeStyleToggle,setFitnessToggle] = useState(false);
   const [homeToggle,setHomeToggle] = useState(false);
   const [audioToggle,setAudioToggle] = useState(false);
   const [accessoriesToggle,setAccessoriesToggle] = useState(false);
   
   useEffect(() => {
     if(window.location.pathname ==='/miphones'){
        return setMiPhonesToggle(true)
     }
     if(window.location.pathname ==='/redmiphones'){
        setRedmiPhonesToggle(true)
     }
     if(window.location.pathname ==='/tv'){
        setTvToggle(true)
     }
     if(window.location.pathname ==='/laptops'){
        setLaptopToggle(true)
     }
     if(window.location.pathname ==='/lifestyle'){
        setFitnessToggle(true)
     }
     if(window.location.pathname ==='/home'){
        setHomeToggle(true)
     }
     if(window.location.pathname ==='/audio'){
        setAudioToggle(true)
     }
     if(window.location.pathname ==='/accessories'){
        setAccessoriesToggle(true)
     }
   }, [])
   
  return (
    <div className="navOptions">
        {miPhonesToggle ? miPhones.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}
        {redmiPhonesToggle ? redmiPhones.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}
        {accessoriesToggle ? accessories.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}
        {tvToggle ? tv.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}
        {laptopToggle ? laptop.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}
        {fitnessAndLifeStyleToggle ? fitnessAndLifeStyle.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}
        {homeToggle ? home.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}
        {audioToggle ? audio.map((item)=>(
            <NavCard key={item.image} name={item.name} price={item.price} image={item.image}/>
        )): null}

    </div>
  )
}

export default NavOption