import './App.css';
import PreNavbar from './Components/PreNavbar';
import Navbar from './Components/Navbar';
import { Route, BrowserRouter as Router,Routes } from 'react-router-dom';
import Slider from './Components/Slider';
import data from "./data.json"
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import StarProduct from './Components/StarProduct';
import HotAccessoriesMenu from './Components/HotAccessoriesMenu';
import HotAccessories from './Components/HotAccessories'
import ProductReviews from './Components/ProductReviews';
import Videos from './Components/Videos';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import NavRowMenu from './Components/NavRowMenu';

function App() {
  
  return (
    <Router className="App">
        <PreNavbar />
        <Navbar />
        <NavRowMenu miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
        <Slider start={data.banner.start}/>
        <Offers offers={data.offer}/>
        <Heading text='STAR PRODUCT'/>
        <StarProduct starProducts={data.starProduct}/>
        <Heading text='HOT ACCESSORIES'/>
        <HotAccessoriesMenu />

        <Routes>
          <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />}/>
        </Routes>

        <Routes>
          <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />}/>
        </Routes>
        
        <Routes>
          <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />}/>
        </Routes>

        <Routes>
          <Route exact path='/lifeStyle' element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />}/>
        </Routes>

        <Routes>
          <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />}/>
        </Routes>

        <Heading text='PRODUCT REVIEWS'/>
        <ProductReviews productReviews={data.productReviews}/>
        <Heading text='VIDEOS'/>
        <Videos videos = {data.videos}/>
        <Heading text='IN THE PRESS'/>
        <Banner end={data.banner.end}/>
        <Footer footer={data.footer}/>
       
        

    </Router>
  );
}

export default App;
