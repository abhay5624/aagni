import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Story from './components/Story';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
        <Route path="/" exact component={() => <Home Homepage = {true}/>} />
        <Route path="/Aboutus"  exact component={() => <About Aboutpage = {true}/>} Aboutpage = {true}/>
        <Route path="/Story"  exact component={() => <Story Storypage = {true}/>} />
        <Route path="/gallery" component={() => <Gallery Gallerypage = {true}/>}/>
        <Route path="/contactus"  exact component={() => <Contact contactuspage = {true}/>} contactuspage = {true}/>
        </Switch>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
