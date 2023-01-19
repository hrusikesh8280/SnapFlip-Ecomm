import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Footer from './pages/Footer';
import Home from './pages/Home';
import { SliderCard } from './components/SliderCard';


function App() {
  return (
    <div className="App">
      {/* <Navbar/>
    <Home />
      <Footer /> */}
      <SliderCard />
     
    </div>
  );
}

export default App;
