// import axios from 'axios';
import './App.css';
import HomeHOC from './HOC/HomeHOC';
import Master from './components/master/Master';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import ScrollToTop from './components/backToTop/ScrollToTop';
//import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <HomeHOC path="/" exact component={Home} />
      <HomeHOC path="/:type" exact component={Master} />
      <HomeHOC path="/restaurant/:id" exact component={Restaurant} />
    </>
  )
}

export default App;