// import axios from 'axios';
import './App.css';
import HomeHOC from './HOC/HomeHOC';
import Master from './components/master/Master';
import Home from './pages/Home';
import Restaurant from './pages/Restaurant';
import InvestorsRelations from './pages/InvestorsRelations';
import ScrollToTop from './components/backToTop/ScrollToTop';
import PublicPages from './pages/PublicPages';
//import CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <HomeHOC path="/" exact component={Home} />
      <HomeHOC path="/:type" exact component={Master} />
      <HomeHOC path="/public/:page"  component={PublicPages} />
      {/* <HomeHOC path="/new" exact component={InvestorsRelations} /> */}
      <HomeHOC path="/restaurant/:id" exact component={Restaurant} />
    </>
  )
}

export default App;