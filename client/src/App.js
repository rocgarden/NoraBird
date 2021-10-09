import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import Home from '../src/pages/Home';
import EventPlace from '../src/pages/eventPlaces';
import Header from './navigation/Header';
import Footer from './navigation/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import MainNavigation from './navigation/MainNavigation';

function App() {
  let routes;
  
  routes = (
    <Switch>
      <Route path="/" exact component = {Home}/>
      <Route path="/Contact/sendEmail" exact component = {Contact}/>
      <Route path="/About" exact component = {About}/>

    </Switch>
  )

  return (
    <div className="App">
      {/* <header className="App-header">
      
      </header> */}
      <Router>
      <Header />

      {/* <Home /> */}
      {/* <MainNavigation /> */}
      <main>
        {routes}
      </main>
      <Footer />
      
      </Router>

    </div>
  );
}

export default App;
